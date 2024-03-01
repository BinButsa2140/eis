
export default function Navbar() {
  return (
    <div className="flex justify-between w-full m-0 px-2 py-4">
        <div className="flex w-full">
            <div className="text-2xl ms-3 font-bold">Fluxxer logo here</div>
        </div>

        <div className="w-full lg:flex justify-center 
         uppercase font-bold hidden
        gap-10 
        ">
            <a href="" className="">About us</a>
            <a href="" className="">How it works</a>
            <a href="#pricing" className="">pricing</a>
            <a href="" className="">contact</a>
        </div>
    </div>
  )
}
