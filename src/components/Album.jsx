import { useContext, useState } from "react"
import { PokeContext } from "../context/pokeContext"
import CustomLink from "./CustomLink"
import Pokemon from "./Pokemon"
import { GiBottomRight3DArrow } from "react-icons/gi";

const Album = () => {

    const { pokeFullList, myPokeList } = useContext(PokeContext)
    const [page, setPage] = useState(1)
    const [minPage, setMinPage] = useState(0)
    
    const filteredPokemons = () => {
        return pokeFullList.slice(minPage,minPage+15)
    }

    const nextPage = () => {
        pokeFullList.length > minPage + 15 && setMinPage( minPage + 15 )
        pokeFullList.length > minPage + 15 && setPage( page + 1 )
    }

    const previusPage = () => {
        minPage > 0 && setMinPage( minPage - 15 )
        minPage > 0 && setPage( page - 1 )
    }

  return (
    <div className="relative flex items-center justify-between bg-secondary w-screen h-screen">
        <div className="h-screen w-[10%] flex items-center justify-center">
            <button onClick={previusPage} className={`relative flex flex-col items-center gap-2 ${minPage === 0 && 'text-gray'}`} style={{textShadow: "2px 2px yellow"}}>
                <p>PREVIUS</p>
                <GiBottomRight3DArrow className={`text-2xl rotate-[135deg] ${minPage === 0 && 'text-gray'}`}/>
            </button>
        </div>
        <div className="relative h-screen w-[80%] flex flex-col justify-start items-center">
            <div className="h-[10%] w-full flex justify-between items-center mx-5">
                <CustomLink url='/' text='HOME' />
                <h1 className="text-2xl" style={{textShadow: "2px 2px yellow"}}>PAGE {page}</h1>
                <CustomLink url='/quiz' text='PLAY' />
            </div>
            <div className="h-[90%] flex flex-wrap w-full items-center">
                {
                    filteredPokemons().map(item => {
                        const findedPokemon = myPokeList.find(poke => poke.name === item.name)
                        const pokeUrl = item.url.split('/')
                        const id = pokeUrl[6]
                        return(
                            <Pokemon 
                                key={id} 
                                url={item.url}
                                name={item.name} 
                                obtained={findedPokemon ? true : false} 
                            />
                        )
                    })
                }
            </div>
        </div>
        <div className="h-screen w-[10%] flex items-center justify-center">
            <button onClick={nextPage}  className={`relative flex flex-col items-center gap-2 ${pokeFullList.length < (minPage + 15) && 'text-gray'}`} style={{textShadow: "2px 2px yellow"}}>
                <p>NEXT</p>
                <GiBottomRight3DArrow className={`text-2xl rotate-[-45deg] ${pokeFullList.length < (minPage + 15) && 'text-gray'}`}/>
            </button>
        </div>
    </div>
  )
}
export default Album