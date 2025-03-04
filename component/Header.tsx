import Link from "next/link"

export default function Header() {
  return (
    
     
    <div className="w-full h-20 z-50 border-b bg-white flex justify-between items-center px-4 sm:px-6">
   
   <h1 className="text-3xl sm:text-3xl font-bold p-4">
      <Link href="/">
      WebSeer
      </Link>

</h1>
<Link href="/getStarted">
<button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl w-24 sm:w-28 text-bold h-10 sm:h-12 hover:bg-white hover:text-white hover:border border-white text-bold">
          New Chat
        </button>

</Link>
    </div>
  )
}

