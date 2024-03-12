export default function CheckNumber() {
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="lg:text-5xl xl:text-5xl md:text-5xl text-xl font-bold uppercase">
          Check your <span className="text-green-600">certificate</span> number
        </div>
        <input className="w-full p-5" type="text" placeholder="XXX-XXX-XXX"/>
      </div>
    </div>
  );
}
