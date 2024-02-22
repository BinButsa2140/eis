
export default function Navbar() {
  return (
    <div className="flex justify-between w-full m-0 p-2 ">
        <div className="flex w-full">
            <div className="text-2xl">Logo</div>
        </div>

        <div className="w-full flex justify-center 
         uppercase font-bold 
        gap-10
        ">
            <a href="" className="">About us</a>
            <a href="" className="">How it works</a>
            <a href="" className="">pricing</a>
            <a href="" className="">contact</a>
        </div>
    </div>
  )
}
