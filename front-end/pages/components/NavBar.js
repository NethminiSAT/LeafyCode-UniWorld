import Link from 'next/link'

const NavBar = () => {

  return (
    <div className="flex ">
      <div className="flex justify-between w-screen h-20 text-white bg-blue-500 ">
        <div className="z-30 flex items-center h-full pl-3 space-x-3 bg-blue-500">
          <p className="text-2xl font-bold">UniWorld</p>
        </div>
        <div
          className="flex flex-col text-xl text-center transform bg-blue-500 md:flex-row md:translate-y-0 md:space-x-5 md:items-center md:justify-end md:pr-3">
          <Link href="/"
                className="h-10 leading-10 border-b-2 border-dotted md:border-none">Home</Link>
          <Link href="#"
                className="h-10 leading-10 border-b-2 border-dotted md:border-none">About</Link>
          <Link href="/components/login"
                className="h-10 leading-10 border-b-2 border-dotted md:border-none md:bg-black md:rounded-full md:w-24">Log
            In</Link>
          <Link href="/users"
                className="h-10 leading-10 border-b-2 border-dotted md:border-none md:bg-black md:rounded-full md:w-24">Users</Link>
          <Link href="/components/register"
                className="h-10 leading-10 border-b-2 border-dotted md:bg-yellow-400 md:border-solid md:border-2 md:rounded-full md:w-24 md:leading-9">Sign
            Up</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar