
import { Link } from "react-scroll";

const Footer=()=>{

  const links=[
    {
      id:1,
      link:'about',
    },
    {
      id:2,
      link:'Privacy Policy'
    },
    {
      id:3,
      link:'Licensing'
    },
    {
      id:4,
      link:'contact'
    },
  ]
  
  return(
    
    <div className="flex justify-between item-center w-full h-10 px-20 text-white bg-black">
      <div>
        <p>@2023 Mr.Arun<span> All Rights Reserved</span></p>
      </div>
      <ul className="hidden md:flex">
    {links.map(({id,link})=>(
     <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200">
     <Link to={link} smooth duration={500}>{link}</Link>
   </li>
    ))}
  </ul>
    </div>
  )
}
export default Footer;