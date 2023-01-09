import { useContext } from 'react'
import { PokeContext } from '../context/pokeContext'
import pokeBall from '../assets/Pokebola.png'
import CustomLink from './CustomLink'

const PokeCounter = () => {

    const { myPokeList } = useContext(PokeContext)
    
  return (
    <div className='px-10 flex justify-between items-center w-screen h-[50px]' >
        <CustomLink url='/' text='HOME' />
        <div className='flex'>
            <img className='h-[30px]' src={pokeBall} alt='pokeball' />
            <p className='pl-3 text-amarillo tracking-wider' style={{textShadow: "2px -2px black"}}>{myPokeList.length}</p>
        </div>
        <CustomLink url='/album' text='Album' />
    </div>
  )
}
export default PokeCounter