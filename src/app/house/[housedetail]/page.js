import { db } from "@/utils/dbConnection";
import { ArrowLeft } from 'lucide-react';
import Link from "next/link";

export default async function HouseDetail({ params }) {
    const id = await params;
    const houseData = (await db.query(`SELECT * FROM houses WHERE id = $1`, [id.housedetail])).rows;
    const house = houseData[0];

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white">
              <Link href="/house">
                    <div className="flex items-center cursor-pointer bg-color-green-500">
                         <h1 className="text-teal-600 font-semibold text-sm px-8 pt-6 mb-4 cursor-pointer">Search details<ArrowLeft className="w-4 h-4 inline ml-2 " /></h1>
                        {/* Optional label next to arrow */}
                        {/* <span className="ml-1">Back</span> */}
                    </div>
                </Link>
            {/* House Title */}
            <h1 className="text-4xl font-bold mb-4">{house.house_name}</h1>

            {/* Main Image */}
            <img
                src={house.image_url}
                alt={house.house_name}
                className="w-full h-[450px] object-cover rounded-lg mb-6"
            />

            {/* Price and Basic Info */}
            <div className="flex justify-between items-center mb-4">
                <p className="text-3xl font-semibold text-green-700">£{house.price}</p>
                <p className="text-lg text-gray-600">{house.property_type}</p>
            </div>

            {/* Address */}
            <p className="text-gray-800 text-lg mb-4">{house.address}</p>

            {/* Feature Grid */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-100 p-4 rounded text-center">
                    <p className="text-sm text-gray-500">Bedrooms</p>
                    <p className="text-xl font-bold">{house.bedrooms}</p>
                </div>
                <div className="bg-gray-100 p-4 rounded text-center">
                    <p className="text-sm text-gray-500">Size</p>
                    <p className="text-xl font-bold">{house.area} sqft</p>
                </div>
                <div className="bg-gray-100 p-4 rounded text-center">
                    <p className="text-sm text-gray-500">Type</p>
                    <p className="text-xl font-bold">{house.property_type}</p>
                </div>
            </div>

            {/* Key Features */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    {house.keyfeature?.split(',').map((item, idx) => (
                        <li key={idx}>{item.trim()}</li>
                    ))}
                </ul>
            </div>

            {/* Description */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Property Description</h2>
                <p className="text-gray-700 leading-relaxed">{house.description}</p>
            </div>

            {/* Floor Plan */}
            {house.floorplan_url && (
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Floor Plan</h2>
                    <img src={house.floorplan_url} alt="Floor Plan" className="w-full rounded" />
                </div>
            )}

            {/* Gallery */}
            {house.images && (
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {house.images.split(',').map((img, idx) => (
                            <img key={idx} src={img.trim()} alt={`Gallery ${idx + 1}`} className="rounded-lg" />
                        ))}
                    </div>
                </div>
            )}

            {/* Map */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Map Location</h2>
                {/* Replace with Google Maps iframe or map URL */}
                {/* <iframe
          src={`https://www.google.com/maps?q=${encodeURIComponent(house.address)}&output=embed`}
          width="800"
          height="300"
          className="rounded-lg"
          allowFullScreen
          loading="lazy"
        >
        </iframe> */}
                <iframe
                    className="w-full h-64 rounded-lg"
                    loading="lazy"
                    allowFullScreen
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(houseData[0].address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                />

            </div>
        </div>
    );
}
