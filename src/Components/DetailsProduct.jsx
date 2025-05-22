import Image from "next/image"

export default function Product() {
    return (
        <>

            <div className="grid grid-cols-3  py-4 px-30">
                <div className="container1 mx-4">
                    <div><Image className="bg-white flex  items-center mx-20"
                        src='/magnifyingglass.png'
                        alt='magnifying' width={100} height={100} /></div>


                    <div  >

                        <h3 className="text-lg font-semibold px-8 mx-10 py-2">Free home valuation</h3>
                        <p className="text-sm py-4 mx-16">find out how much your home's worth from an export</p>
                        <button className="text-teal-600 text-sm font-semibold text-center w-[350px] h-[50px]  bg-transparent hover:bg-gray-100  cursor-pointer">Get a Free agent valution</button>

                    </div>
                </div>
                <div className="container2 mx-10 ">
                    <div>
                        <Image className="bg-white flex  items-center mx-20"
                            src='/svgviewer.png'
                            alt='magnifying' width={100} height={100} />
                    </div>


                    <div  >

                        <h3 className="text-lg font-semibold px-8 py-2">Commercial Property</h3>
                        <p className="text-sm py-4 mx-8">Search freehold and leasehold commercial properties in the Uk</p>
                        <button className="text-teal-600 text-sm font-semibold  w-[350px] h-[50px]  bg-transparent hover:bg-gray-100  cursor-pointer">Search now</button>

                    </div>
                </div>
                <div className="container3 mx-16">
                    <div>
                        <Image className="bg-white flex  items-center mx-20"
                           src='/bulb.png'
                           
                            alt='magnifying' width={100} height={100} />
                    </div>
                    <div  >

                        <h3 className="text-lg font-semibold px-8 py-2"> Energy efficiency</h3>
                        <p className="text-sm py-4">Learn about going greener at home, and tips for redusing your energy bill</p>
                        <button className="text-teal-600 text-sm font-semibold text-center w-[350px] h-[50px]  bg-transparent hover:bg-gray-100  cursor-pointer">Find out more</button>

                    </div>
                </div>
            </div>



        </>
    )
}
