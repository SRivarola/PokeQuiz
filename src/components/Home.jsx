import { useEffect, useState } from "react"
import CustomLink from "./CustomLink";

const Home = () => {

    const [pikachu, setPikachu] = useState('');
    const pikachuUrl = 'https://pokeapi.co/api/v2/pokemon/25/'

    useEffect(() => {
      fetch(pikachuUrl)
          .then(res => res.json())
          .then(data => setPikachu(data.sprites.other.dream_world.front_default))
    }, [])

  return (
    <div className="bg-secondary h-screen w-screen flex flex-col items-center justify-start">
        <h1 className="text-5xl text-amarillo mt-10 sm:mt-5 m-5 mb-20" style={{textShadow: "3px 3px black"}}>
          POKE-QUIZ
        </h1>
        <img className="w-[200px] animate-brightPulsing" src={pikachu} alt='foto de pikachu'/>
        <p className="text-white font-pokehollow font-semibold mt-8 px-2 text-center tracking-widest">
          I spy with my little eye wich pokemon is behind the shadow
        </p>
        <div className="flex justify-center items-center gap-10 mt-8">
            <CustomLink url='/quiz' text='PLAY' />
            <CustomLink url='/album' text='ALBUM' />
        </div>
    </div>
  )
}
export default Home