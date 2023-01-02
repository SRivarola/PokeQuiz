import { Link } from "react-router-dom"

const CustomLink = ({url, text}) => {
  return (
    <Link 
        className="rounded-[5px] pt-1 pb-2 px-5 bg-purple text-amarillo font-pokehollow font-bold tracking-widest transition ease-in duration-700 hover:bg-black hover:text-white"
        to={url}
    >
        {text}
    </Link>
  )
}
export default CustomLink