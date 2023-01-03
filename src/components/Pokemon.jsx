import { useEffect, useState } from "react"

const Pokemon = ({name, obtained, url}) => {
    
    const [img, setImg] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                data.sprites.other.dream_world.front_default ? setImg(data.sprites.other.dream_world.front_default)
                : data.sprites.other.home.front_default ? setImg(data.sprites.other.home.front_default)
                : Object.values(data.sprites.other)[2].front_default ? setImg(Object.values(data.sprites.other)[2].front_default)
                : setImg(data.sprites.front_default)
            })
    }, [])

  return (
    <div className="h-[100px] w-[30%] sm:w-[20%] flex justify-center items-center">
        {
            img &&
            <img className={`h-[100px] ${!obtained && 'brightness-0'}`} src={img} alt={name} />
        }
    </div>
  )
}
export default Pokemon