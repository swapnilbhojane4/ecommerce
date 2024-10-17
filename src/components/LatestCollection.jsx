import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import { useSearchParams } from 'react-router-dom';
import ProductItem from './ProductItem';


export const LatestCollection = () => {

    const { products } = useContext(ShopContext);

    console.log(products);
    const [latesProducts, setLatestProducts] = useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-2xl'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Minimalist fashion with clean lines and neutral tones</p>
        </div>
        {/* Render products*/}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latesProducts.map((item, index)=>(
                    <ProductItem key={index}
                    id={item._id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                     />
                ))
            }
        </div>
    </div>
  )
}
export default LatestCollection;