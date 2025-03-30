import React from 'react'
import ProductData from "../../components/product/ProductData";
import ProductFullDetail from "../../components/product/ProductFullDetail";
const Product = () => {
  return (
    <div className='space_betweeen'>
      <ProductData/>
      <ProductFullDetail/>
    </div>
  )
}

export default Product