
export default function Submit({ name = 'name' }: { name?: string }) {
  return (
    <div className='h-screen flex flex-col justify-center gap-5 bg-gradient-to-br from-gray-900 to-green-600'>
        <div className=" font-main m-5">
            <div className="uppercase lg:text-8xl xl:text-8xl md:text-8xl text-5xl font-bold">
                WE have received your form 
            </div>
            <div className="text-2xl">
            Hello, customer! Thank you for submitting the form. We will contact you soon!.
        </div> 
        </div>
        <div className="hidden">{name}</div>
    </div>
  )
}
