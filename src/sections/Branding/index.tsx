import { brandlogo } from "../../contents/partnerimg"

export default function Branding() {
  return (
    <div className="h-20 relative mb-52">
        <div className="w-full h-full absolute blur-xl bg-white">.</div>
        <div className=" bg-white rounded-2xl relative">
            <div className="flex">
                {
                    brandlogo.map((data, index)=>(
                        <div key={index} className="m-5 relative">
                            <img className="w-full h-20
                            object-contain 
                            " src={data.imgpath} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
