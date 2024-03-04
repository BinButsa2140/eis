export default function Contact() {
  return (
    <div className="justify-center flex ">
      <div
      id="contact"
      className=" grid lg:grid-cols-2 xl:grid-cols-2 h-screen justify-center items-center
    text-white relative content-center lg:mx-5"
    >
      <div className="order-last lg:order-first">
        
        <div className=" text-center">
          <div className="lg:w-full text-3xl my-5 uppercase font-main font-bold ">get your items certificate now</div>
          <div className="mx-7">
          "Choose us for top-notch service! We're all about reliability, <span className="text-green-500">speedy</span> solutions, and being there for you 24/7. Trust us with your needs, and let's prove we're the perfect fit for you!"
          </div>
          <div className="my-7">
            
            <button className="btn-[#232A33] btn btn-lg">Start now</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center order-first lg:order-last ">
          <img className="h-[28rem] hover:shadow-2xl shadow-white" src="https://i.postimg.cc/prTLQPrr/C-5.png" alt="" />
      </div>
    </div>
    </div>
  );
}
