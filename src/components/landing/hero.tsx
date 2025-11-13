import Button from "../common/ui/buttons/buttons";


export const HeroSection = () => {
  return (
    <div className=" relative w-full h-[85%] ">
      {/* {overlay} */}
      <div className="absolute bg-black/50 top-0 left-0 right-0 bottom-0"></div>
      {/* {cover image} */}
      <div className="h-full w-full">
        <img className="h-full w-full object-fill" src="/cover1.jpg" />
      </div>
      {/* {text content} */}
      <div className="absolute inset-0 flex justify-center items-center ">
        <div>
          <h1 className="font-semibold text-3xl text-white">
            Plan your Next Tour
          </h1>
          <p className="font-semibold text-gray-100 text-center">
            Book now to save your seat.
          </p>
          <div className="w-[200px] mx-auto -mt-5">
            <Button label="Book Now" />
          </div>
        </div>
      </div>
    </div>
  );
};
