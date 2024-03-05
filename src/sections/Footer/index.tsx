import { footer } from "../../contents/footer"

export default function Footer() {
  return (
    <div className="bg-gray-900 h-52 content-center">
      <div className="text-center font-bold py-5">
         <h1 className="">Fluxxer © 2024. All rights reserved.</h1>
      </div>
      <div className="flex w-full justify-around font-bold">
          {footer.map((data, index)=>(
            <div className="" key={index}>
              {data.title}
            </div>
          ))}
      </div>
    </div>
  )
}
