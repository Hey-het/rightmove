import { Suspense } from "react";
import Filter from "@/Components/Filter";
import { db } from "@/utils/dbConnection";

export default async function PropertySearchForm() {
  const houseData = (await db.query(`SELECT * FROM houses`)).rows;

  return (
    <div className="pt-8">
      <Suspense fallback={<div>Loading filter...</div>}>
        <Filter houseDetails={houseData} />
      </Suspense>
    </div>
  );
}
