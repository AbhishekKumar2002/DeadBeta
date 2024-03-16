import Image from "next/image";
import Earth3d from "./earth/Earth3d";

const HeroSection = () => {
  return (
    <div className="flex flex-col sm:flex-row mt-16  justify-evenly">
      <div className="w-full h-[calc((100vh-16px)/2)] sm:h-[calc(100vh-16px)] sm:w-1/2 flex flex-col justify-center items-center">
        <div>
          <Image
            src="/images/classic-car2.svg"
            alt="car"
            width={2000}
            height={2000}
            className="h-32 w-48"
          />
        </div>
        <div className="-mt-9">
          <h1 className=" text-black dark:text-slate-200 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Dead Beta
          </h1>
          <p className="text-center">Help to connect people</p>
        </div>
      </div>
      {/* <Human3d /> */}
      {/* <Clock /> */}
      <Earth3d />
      {/* <EarthDark3d /> */}
      {/* <City3d /> */}
    </div>
  );
};

export default HeroSection;
