import { useState } from "react"
import { brandlogo } from "../../contents/partnerimg"


export default function Froms() {
    const [toggle, setToggle] = useState<boolean>(false)

    function changePage():void{
        setToggle(!toggle)
        console.log(toggle)
    }
    
  return (
    <div className=" flex flex-col justify-center p-5 ">
        <div className="">
            
        </div>
        <div className=" flex flex-wrap lg:flex-nowrap xl:flex-nowrap rounded-lg">
            <div className=" w-full">
                
            </div>
            <div className="w-full ">
                <button className="" onClick={changePage}>
                    change
                </button>
                <form className="flex flex-col bg-gray-900 p-5">
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col max-w-full p-2">
                            <label className="font-bold font-second py-2 rounded-lg" htmlFor="">Firstname</label>
                            <input className="p-2" type="text" placeholder="Firstname"/>
                        </div>
                        <div className="flex flex-col max-w-full p-2">
                            <label className="font-bold font-second py-2 rounded-lg" htmlFor="">Lastname</label>
                            <input className="p-2" type="text" placeholder="Lastname"/>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col max-w-full p-2">
                            <label className="font-bold font-second py-2 rounded-lg" htmlFor="">Email</label>
                            <input className="p-2" type="email" placeholder="Enter email"/>
                        </div>
                        <div className="flex flex-col max-w-full p-2">
                            <label className="font-bold font-second py-2 rounded-lg" htmlFor="">Number</label>
                            <input className="p-2" type="text" placeholder=" Enter phone number"/>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col max-w-full p-2 uppercase">
                            <label className="font-bold font-second py-2 rounded-lg" htmlFor="">Product brand</label>
                            <select className="p-2" name="" id="">
                                {
                                    brandlogo.map((data,index)=>(
                                        <option className="uppercase" key={index} value="">{data.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="flex flex-col max-w-full p-2">
                            <label className="font-bold font-second py-2 rounded-lg" htmlFor="">Number</label>
                            <input className="p-2" type="text" placeholder=" Enter phone number"/>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-full p-2">
                            <label className="font-bold font-second py-2 rounded-lg" htmlFor="">Address</label>
                            <input className="p-2" type="text" placeholder=" Enter your address"/>
                    </div>
                    <div className="flex flex-col max-w-full p-2">
                            <label className="font-bold font-second py-2 rounded-lg" htmlFor="">Upload images</label>
                            <input className="p-2" type="file" multiple/>
                    </div>
                    

                </form>
            </div>
            
        </div>
    </div>
  )
}
