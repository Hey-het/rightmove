import  {db} from "@/utils/dbConnection";
import Link from "next/link";

export default async function HouseData({ searchParams }) {

    let sortValue = "d";

    const houseData = (await db.query(`SELECT * FROM houses order by price desc`)).rows;
    // console.log(houseData);

     if (searchParams.sort === "asc") {
        houseData.reverse();
        sortValue = "a";
    }
    else if(searchParams.sort === "desc") {
        sortValue = "d";
    }


    return (
        <div className="p-2 mt-5 ">
            {/* <h1 className="text-4xl font-bold text-center mb-10">House Data</h1> */}
           <div className="flex justify-end mb-5">
            <h1 className="mt-2">Sort:</h1>
             {sortValue==="d" ?<Link href="house?sort=asc">
                <button className="border-2 border-red-500 p-2 rounded-2xl ">Hight Price</button>
            </Link> : null }
           {sortValue==="a"? <Link href="house?sort=desc">
                <button className="border-2 border-red-500 p-2 rounded-2xl">Lowest Price</button>
            </Link> : null }
           </div>
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
    )
}