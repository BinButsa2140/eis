
export default function CheckedPage() {
  return (
    <div className='flex flex-col w-full h-screen'>
        <div className="lg:mx-20 xl:mx-20 md:mx-10 my-10 flex flex-wrap xl:flex-nowrap lg:flex-nowrap justify-center ">
            <div className="w-full">
                <img className=' w-full h-96 object-cover' src="https://images.unsplash.com/photo-1681935703733-5e9df028a318?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="w-full gap-5 flex flex-col p-10 bg-gray-900 rounded-lg">
                <div className="">
                    <div className="font-bold">serial number</div>
                    <div className="">XXX-XXX-XXX-XXX</div>
                </div>
                <div className=" capitalize flex flex-col items-start w-full ">
                    <h1 className='font-bold'>Product name</h1>
                    <h1 className=''>Jean paul gaultier Le beau</h1>
                </div>
                <div className=" capitalize flex gap-14 items-start w-full ">
                    <div className="">
                        <h1 className='font-bold'>Create date</h1>
                        <h1>DD/MM/YY</h1>
                    </div>
                    <div className="">
                        <h1 className='font-bold'>Expire date</h1>
                        <h1>DD/MM/YY</h1>
                    </div>
                </div>
                <div className=" capitalize flex flex-col items-start w-full ">
                    <h1 className='font-bold'>Result: <span className='font-medium text-green-400'>real</span></h1>
                    <h1 className=''></h1>
                </div>
            </div>
        </div>
    </div>
  )
}
