import React from 'react'
import {useState, useEffect, useCallback} from 'react'
import { Route, Routes, Link } from "react-router-dom";
import CategoryPage from '../pages/CategoryPage';
import axios from "axios"

export default function HomeCategories() {


    const [categories, setCategories] = useState()

   
    const getData = useCallback(async() => {
        try {
            const response = await axios.get('/recipes/list')
    
            console.log(response)

            setCategories([...response.data.recipes])
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
       <h2 className='center'>Browse through recipes</h2>
       <div className="homeCategories">
        {categories?.map((item, idx) => <div key={idx} className="cardWrapper">
        <Link to={`/category/${item.title}`}>
            <div className="card">
                <h3>{item.title}</h3> 
            </div>
        </Link>
        </div>
        )}
       </div>
    </section>
    </>
  )
}
