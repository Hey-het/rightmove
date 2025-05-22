
import Product from "@/Components/Product";
import DetailsProduct from "@/Components/DetailsProduct";
import Image from "next/image";         
import Banner from "@/Components/Banner";
import Container from "@/Components/Container";



export default function Home() {
  return (
    <>
    <Banner/>
    <br/>
    <Container/>
    <br/>
    <Product/>
      <br/>
    <DetailsProduct/>          
    </>
  );
}
