import PostcodeForm from "@/Components/PropertySearchForm";
import { db } from "@/utils/dbConnection";

export default async function PostcodeFormPage(){
    
     const houseData = (await db.query(`SELECT * FROM houses `)).rows;

    return (
        <>
            <div className="pt-8">
                <PostcodeForm  houseDetails = {houseData}/>
                
            </div>
        </>
    );
}