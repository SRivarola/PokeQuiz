import { createContext, useEffect, useState } from "react";

export const PokeContext = createContext()

const PokeContextProvider = ({children}) => {

    const [pokeFullList, setPokeFullList] = useState([])
    const [restOfList, setRestOfList] = useState(JSON.parse(localStorage.getItem('restOfList')) ? JSON.parse(localStorage.getItem('restOfList')) : [])
    const [myPokeList, setMyPokeList] = useState(JSON.parse(localStorage.getItem('myPokeList')) ? JSON.parse(localStorage.getItem('myPokeList')) : [])

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0'
    
    const updateList = (name) => {
        const filteredList = restOfList.filter(item => item.name !== name)
        const findedItem = pokeFullList.find(item => item.name === name)
        setTimeout(() => {
            setRestOfList(filteredList)
            localStorage.setItem('restOfList', JSON.stringify(filteredList))
            setMyPokeList([...myPokeList, findedItem])
            localStorage.setItem('myPokeList', JSON.stringify([...myPokeList, findedItem]))
        }, 1500);
    }

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPokeFullList(data.results)
                restOfList.length === 0 && setRestOfList(data.results) 
            })
    }, [])

    return (
        <PokeContext.Provider value={{
            pokeFullList,
            restOfList,
            setRestOfList,
            updateList,
            myPokeList,
        }}>
            {children}
        </PokeContext.Provider>
    )
}

export default PokeContextProvider