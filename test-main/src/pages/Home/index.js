import React from "react";
import ProductList from "../../components/ProductList/ProductList";
import { useSelector } from "react-redux";
import Slide from "../../components/Slide/Slide";
import { useGetProductsByNameQuery } from "../../services/productsApi";

function Home(){
  const slideImages = useSelector((state)=>state.slide) 
  const {data} = useGetProductsByNameQuery()
  return(
    <div className="slide_cont">
      <Slide slideImages={slideImages}/>
      <ProductList  data={data}/>
      asfasfsa


    </div>
  )
}

export default Home