import {db} from "@/utils/dbConnection";

// import { redirect } from "next/navigation";
import Link from "next/link";

export default async function HouseDetails({ params }) {
  const houseDetails = (
    await db.query(`SELECT * FROM houses WHERE id = $1`, [params.housedetails])
  ).rows;

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <Link href="/house">
          <p className="text-green-600 font-medium mb-6 pt-14">← Back to Search result </p>
        </Link>

        {houseDetails.map((house) => (
          <div key={house.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* 1. Image Section */}
            <div className="w-full h-[350px]">
              <img
                src={house.image_url}
                alt={house.house_name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* 2. Title, Price, Address */}
            <div className="p-6 border-b border-gray-200">
              <h1 className="text-2xl font-bold text-gray-800">{house.house_name}</h1>
              <p className="text-xl text-green-600 mt-1">£{house.price.toLocaleString()}</p>
              <p className="text-gray-600 mt-1">{house.address}</p>
            </div>

            {/* 3. Key Features */}
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Key Features</h2>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {house.keyfeature.split(",").map((feature, index) => (
                  <li key={index}>{feature.trim()}</li>
                ))}
              </ul>
            </div>

            {/* 4. Description */}
            <div className="px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Description</h2>
              <p className="text-gray-700 whitespace-pre-line">{house.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
