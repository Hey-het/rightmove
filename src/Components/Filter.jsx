"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function FilterPage({ houseDetails }) {
  const [propertyType, setPropertyType] = useState("");
  // const [radius, setRadius] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const postcode = searchParams.get("postcode") || ""; // default if not set
 
  function houseData(e) {
    e.preventDefault();

    const filtered = houseDetails.filter((house) => {
      const matchType = propertyType ? house.property_type === propertyType : true;
      // const matchRadius = checkRadius(radius, house.distance);
// 
      return matchType
    });
    router.push(`/house?postcode=${postcode}&propertyType=${propertyType}`);

    console.log("Filtered:", filtered);
    
  }

  // console.log(filteredData,"Filtered Data");

  return (
    <div className="bg-gray-100 p-3 rounded-lg max-w-5xl mx-auto shadow">
      <h2 className="text-xl font-semibold mb-4">
        Find property for sale in <span className="text-gray-700">{postcode}</span>
      </h2>

      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
        {/* Search Radius */}
        <div>
          <label className="block text-sm font-medium mb-1">Search radius</label>
          <select
            // value={radius}
            // onChange={(e) => setRadius(e.target.value)}
            className="w-full p-3 border-1 border-neutral-400 hover:bg-neutral-100 rounded-lg bg-white">
            <option value="any">This area only</option>
            {/* <option value="1">Up to 1 mile</option> */}
            {/* <option value="3">Up to 3 miles</option> */}
            {/* <option value="+3">3+ miles</option> */}
          </select>
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-sm font-medium mb-1">Property type</label>
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}

            className="w-full p-3 border-1 border-neutral-400 hover:bg-neutral-100 rounded-lg bg-white">
            <option value="">Any</option>
            <option value="Bungalow">Bungalows</option>
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi Detached</option>
            <option value="Terraced">Terraced</option>
          </select>
        </div>

        {/* Added to Site + Checkbox */}
        <div className="flex flex-col justify-between">
          <div>
            <label className="block text-sm font-medium mb-1">Added to site</label>
            <select className="w-full p-3 border-1 border-neutral-400 hover:bg-neutral-100 rounded-lg bg-white">
              <option>Anytime</option>
              <option>Last 24 hours</option>
              <option>Last 3 days</option>
              <option>Last 7 days</option>
            </select>
          </div>
          <label className="flex items-center space-x-2 mt-2">
            <input type="checkbox" className="h-4 w-4" />
            <span className="text-sm">Include Under Offer, Sold STC</span>
          </label>
        </div>
      </div>
      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium mb-1">Price range (£)</label>
          <div className="flex space-x-2">
            <select className="w-full p-3 border-1 border-neutral-400 hover:bg-neutral-100 rounded-lg bg-white">
              <option>No min</option>
              <option>£100,000</option>
              <option>£200,000</option>
            </select>
            <select className="w-full p-3 border-1 border-neutral-400 hover:bg-neutral-100 rounded-lg bg-white">
              <option>No max</option>
              <option>£500,000</option>
              <option>£1,000,000</option>
            </select>
          </div>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-sm font-medium mb-1">No. of bedrooms</label>
          <div className="flex space-x-2">
            <select className="w-full p-3 border-1 border-neutral-400 hover:bg-neutral-100 rounded-lg bg-white">
              <option>No min</option>
              <option>1</option>
              <option>2</option>
            </select>
            <select className="w-full p-3 border-1 border-neutral-400 hover:bg-neutral-100 rounded-lg bg-white">
              <option>No max</option>
              <option>4</option>
              <option>5+</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <button onClick={houseData}
            className="w-full bg-emerald-300 text-black font-semibold p-3  hover:bg-emerald-200 transition rounded-lg">
            Search properties
          </button>

        </div>
      </div>

    </div>
  );
}
