import React from 'react'
import {useState, useEffect, useCallback} from 'react'
import { client } from '../client'
import { Route, Routes, Link } from "react-router-dom";
import CategoryPage from '../pages/CategoryPage';

export default function HomeCategories() {


    const [categories, setCategories] = useState()

   
    const getData = useCallback(async() => {
        try {
            const response = await client.getEntries({ content_type: 'category'})
            const responseData = response.items
            console.log(responseData)

            setCategories([...responseData])
        } catch (error) {
            console.log(error)
        }
    }, [])
    
    useEffect(()=>{
      getData()
    },[getData])

console.log(categories);

  return (
    <>
    <section aria-label="Categories">
       <h2 className='center'>Browse through categories</h2>
       <div className="homeCategories">
        {categories?.map((item, idx) => <div key={idx} className="cardWrapper">
        <Link to={`/category/${item.fields.titel}`}>
            <div className="card">
                <picture>
                    <source srcSet={`https:${item.fields.image.fields.file.url}?w=500&h=500&fm=webp`} type="image/webp" />
                    <img src={`https:${item.fields.image.fields.file.url}?w=500&h=500`} alt="" />
                </picture>
                <h3>{item.fields.titel}</h3> 
            </div>
        </Link>
        </div>
        )}
       </div>
    </section>
    </>
  )
}
