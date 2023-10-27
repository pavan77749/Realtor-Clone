import { useLocation , useNavigate } from "react-router"


export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
   function pathMathRoute(route){
    if(route===location.pathname){
        return true
    }
   }
  return (
    <>
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
    <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
            <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="img not found" className="h-5 cursor-pointer" onClick={()=>navigate("/")} />
        </div>
        <div>
            <ul className="flex space-x-10 py-3 cursor-pointer">
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent  ${pathMathRoute("/") && "text-black border-b-red-500"}`} onClick={()=>navigate("/")} >Home</li>
              
              <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent  ${pathMathRoute("/") && "text-black border-b-red-500"}`} onClick={()=>navigate("/offers")}>Offers</li>
            
              <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent  ${pathMathRoute("/") && "text-black border-b-red-500"}`} onClick={()=>navigate("/signin")}>SignIn</li>
              
            </ul>
        </div>
    </header>
    </div>
    </>
  )
}
