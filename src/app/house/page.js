import { db } from "@/utils/dbConnection";
import Link from "next/link";
import { ArrowLeft } from 'lucide-react';

export default async function HouseData({ searchParams }) {
    const params = await searchParams;
    const sortValue = params.sort === "asc" ? "a" : "d";
    const sortDirection = sortValue === "a" ? "asc" : "desc";

    const houseData = (await db.query(`SELECT * FROM houses ORDER BY price ${sortDirection}`)).rows;

    return (
        <div className="p-2 mt-5 ">
            {/* Container with flex and justify-between */}
            <div className="flex justify-between items-center mb-5">
                {/* Back arrow on the left */}
                <Link href="/">
                    <div className="flex items-center cursor-pointer bg-color-green-500">
                         <h1 className="text-teal-600 font-semibold text-sm px-8 pt-6 mb-4 cursor-pointer">home<ArrowLeft className="w-4 h-4 inline ml-2 " /></h1>
                        {/* Optional label next to arrow */}
                        {/* <span className="ml-1">Back</span> */}
                    </div>
                </Link>

                {/* Sort controls on the right */}
                <div className="flex items-center space-x-4">
                    <h1 className="mt-2">Sort:</h1>
                    {sortValue === "d" && (
                        <Link href="/house?sort=asc">
                            <button className="border-2 border-red-500 p-2 rounded-2xl">Highest Price</button>
                        </Link>
                    )}
                    {sortValue === "a" && (
                        <Link href="/house?sort=desc">
                            <button className="border-2 border-red-500 p-2 rounded-2xl">Lowest Price</button>
                        </Link>
                    )}
                </div>
            </div>

            {/* House list */}
            <div className="grid grid-cols-1">
                {houseData.map((house) => (
                    <div key={house.id} className="bg-gray-100 shadow-md rounded-lg p-6 flex justify-center space-x-4">
                        <div className="flex w-full">
                            <div className="flex-1/2 w-full">
                                <div className="relative w-full h-48">
                                    <Link href={`/house/${house.id}`}>
                                        <img src={house.image_url} alt={house.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                                    </Link>
                                </div>
                                <div className="">
                                    <p className="text-lg font-bold bg-green-500 p-4">£{house.price}</p>
                                </div>
                            </div>
                            <div className="bg-white flex-1/2 ">
                                <h2 className="text-xl font-semibold ml-14 mt-5">{house.house_name}</h2>
                                <p className="text-gray-600 ml-14">{house.owner}</p>
                                <p className="text-gray-600 ml-14">{house.address}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
