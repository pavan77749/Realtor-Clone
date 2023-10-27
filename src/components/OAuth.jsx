import {FcGoogle} from "react-icons/fc"

export default function OAuth() {
  return (
    <button className="flex items-center justify-center w-full bg-red-700 text-white py-3 px7 rounded uppercase font-medium hover:bg-red-800 active:bg-red-900 hover:shadow-lg transition duration-150 ease-in-out">
        <FcGoogle className="text-2xl bg-white rounded-full mr-2"/>
        Continue with Google
    </button>
  )
}
