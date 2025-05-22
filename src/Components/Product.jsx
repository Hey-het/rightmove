import Image from "next/image"
// import { Button } from "@/Components/ui/button";
// import { ShoppingBagIcon, HeartIcon } from "@heroicons/react/24/outline"
import { ArrowRight } from 'lucide-react';
export default function Product() {
    return (
        <>

            <div className="grid grid-cols-3 space-x-2 py-8 px-30">
                <div className="container1 h-[auto] w-[350px]  border-1 border-gray-400  hover:scale-[1.02] transition-transform duration-300 rounded-lg ml-5 cursor-pointer">
                    <Image src='/soldhouse.jpg' alt="House" width={600} height={150} className="rounded-lg hover h-40" />
                    <div>

                        <h3 className="text-xl font-semibold px-8 py-2"> Sold house prices</h3>
                        <p className="text-sm py-4 mx-8">Check What a home sold for plus photos, floreplans and local area insights.</p>
                        <h1 className="text-teal-600 font-semibold text-sm px-8 pt-6 mb-2 cursor-pointer ">Search house prices <ArrowRight className="w-4 h-4 inline ml-2 " /></h1>

                    </div>
                </div>
                <div className="container2 h-[auto] w-[350px] border-1 border-gray-400  hover:scale-[1.02] transition-transform duration-300 rounded-lg ml-3 cursor-pointer">
                    <Image src='/filterhouse.jpg' alt="House" width={600} height={300} className="rounded-lg h-40" />
                    <div>

                        <h3 className="text-lg font-semibold px-8 py-2"> Try 'That Rightmove Filter'</h3>
                        <p className="text-sm py-6 mx-8">We'll find your AI fantasy dream home.</p>
                        <h1 className="text-teal-600 font-semibold text-sm px-8 pt-6 mb-4 cursor-pointer">Take a look <ArrowRight className="w-4 h-4 inline ml-2 " /></h1>

                    </div>
                </div>
                <div className="container3  h-[auto] w-[350px] border-1 border-gray-400  hover:scale-[1.02] transition-transform duration-300 rounded-lg cursor-pointer">
                    <Image src='/applince.jpg' alt="House" width={600} height={300} className="rounded-lg h-40" />
                    <div>

                        <h3 className="text-lg font-semibold px-8 py-2">Which appliances use the most energy?</h3>
                        <p className="text-sm py-4 mx-8">Find out how much they could be adding to your bill</p>
                        <h1 className="text-teal-600 text-sm font-semibold px-8 pt-6  mb-4 cursor-pointer">Take a look <ArrowRight className="w-4 h-4 inline ml-2" /></h1>

                    </div>
                </div>
            </div>



        </>
    )
}