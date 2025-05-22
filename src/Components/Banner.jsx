import Image from "next/image";

import Link from "next/link";

export default function Banner() {
  return (
    <div className="container mx-auto flex justify-center items-center mt-10">   
         <div className="relative w-[1100px] h-[400px] overflow-hidden rounded-3xl">
      <Image
        src="/banner.jpg" // Make sure this is your background image
        alt="Banner"
        layout="fill"
        objectFit="cover"
        className="rounded-3xl h-100 w-full"

      />

      <div className="absolute inset-0 rounded-3xl"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center  px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          <span className="text-teal-400">believe</span> in finding it
        </h1>
        <p className="mt-4 text-white text-3xl md:text-3xl font-bold">
          with the UK’s largest choice of homes
        </p>

        <div className="mt-8 bg-[#0B0033] p-4 md:p-6 rounded-2xl flex flex-col md:flex-row items-center gap-4 w-full max-w-3xl">
          <input
         type="text"
            placeholder="e.g. Bath, NW3, or Leeds station"  
          className="w-full border-2 border-white bg-white md:flex-1 px-4 py-3 rounded-lg"
          />
          {/* <Input
            type='text'
            placeholder="e.g. Bath, NW3, or Leeds station"
            className="w-full md:flex-1 px-4 py-3"
          /> */}
          <button className="bg-teal-500 text-white hover:bg-teal-600 w-full md:w-auto cursor-pointer p-4 rounded-lg">
           <Link href="/house">
            For sale
            </Link>
          </button>
          <button className="bg-teal-500 text-white hover:bg-teal-600 w-full md:w-auto cursor-pointer p-4 rounded-lg">
            To rent
          </button>
        </div>
      </div>
    </div>
    </div>

  );
}
