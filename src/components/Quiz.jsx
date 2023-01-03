import { useContext, useEffect, useState } from "react";
import { PokeContext } from "../context/pokeContext";
import PokeCounter from "./PokeCounter";
import pokeBall from '../assets/Pokebola.png'

const Quiz = () => {

    const { restOfList, updateList, myPokeList, pokeFullList } = useContext(PokeContext)
    const [pokemon, setPokemon] = useState()
    const [options, setOptions] = useState([])
    const [isCorrect, setIsCorrect] = useState('')
    const [correct, setCorrect] = useState(false)
    const [wrong, setWrong] = useState(false)

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min
    }
    
    const onHandleClick = (name) => {
        if(name === pokemon.name){
            setIsCorrect(name)
            setCorrect(true)
            setTimeout(() => {
                setCorrect(false)
            }, 1500);
            updateList(name)
        } else {
            setIsCorrect(`${name}false`)
            setCorrect(false)
            setTimeout(() => {
                setWrong(!wrong)
            }, 750);
        }
        
    }

    useEffect(() => {
        setTimeout(() => {
            const maxNumber = restOfList.length 
            const random1 = getRandomInt(1,maxNumber)
            let random2, random3, random4
            do {
                random2 = getRandomInt(1,maxNumber)
            } while (random1 === random2)
            do {
                random3 = getRandomInt(1,maxNumber)
                
            } while (random2 === random3 || random1 === random3)
            do {
                random4 = getRandomInt(1,maxNumber)
            } while (random3 === random4 || random2 === random4 || random1 === random4);
            const pokeData1 = restOfList[random1]
            const pokeData2 = restOfList[random2]
            const pokeData3 = restOfList[random3]
            const pokeData4 = restOfList[random4]
            const pokeArray = [pokeData1, pokeData2, pokeData3, pokeData4]
            const sortedArray = pokeArray.sort((a, b) => a.name.localeCompare(b.name))
            setOptions(sortedArray)
            fetch(pokeData1?.url)
                .then(res => res.json())
                .then(data => {
                    setPokemon({
                        name: data.name, 
                        img: data.sprites.other.dream_world.front_default ? data.sprites.other.dream_world.front_default 
                            : data.sprites.other.home.front_default ? data.sprites.other.home.front_default
                            : Object.values(data.sprites.other)[2].front_default ? Object.values(data.sprites.other)[2].front_default
                            : data.sprites.front_default
                    })
                })
        }, 500)
    }, [restOfList, wrong]);
    
    return (
    <div className="relative w-screen h-screen bg-secondary flex flex-col jus">
        <PokeCounter />
        <div className="flex w-full h-full justify-evenly items-center">
            <div className="flex flex-col items-center">
                <div className="relative h-[200px]">
                    {
                        pokemon &&
                        <img className={`h-full brightness-0 duration-500 ${correct && 'brightness-100'}`} src={pokemon.img} alt={pokemon.name} />
                    }
                </div>
                <div className="flex flex-col items-center my-5 gap-3">
                    {
                        options?.map(option => (
                            <button 
                                onClick={() => onHandleClick(option.name)}
                                key={option.name} 
                                className={`bg-black text-amarillo font-poppins py-2 px-5 w-[250px] duration-200 rounded-[5px] uppercase ${isCorrect === option.name && 'bg-correct text-black font-semibold'}  ${isCorrect === option.name + 'false' && 'bg-error text-white font-semibold'}`}
                            >{option.name}</button>
                        ))
                    }
                </div>
            </div>
            <div className="hidden sm:flex flex-col gap-5 items-center">
                <img className='h-[100px]' src={pokeBall} alt='pokeball' />
                <p className='pl-3 text-amarillo text-xl tracking-widest' style={{textShadow: "2px 2px black"}}>{myPokeList.length} figures of {pokeFullList.length}</p>
                <p className='pl-3 text-amarillo text-xl tracking-widest' style={{textShadow: "2px 2px black"}}>in your album</p>
            </div>
        </div>
    </div>
  )
}
export default Quiz