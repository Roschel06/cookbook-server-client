
import React from 'react';
import { Card } from '@mui/material';
import { useParams } from "react-router-dom";
import { RecipeContext } from '../components/context'
import {useState, useEffect, useCallback, useContext} from 'react'
import axios from "axios"


export default function CategoryPage() {


   const { globalRecipes }= useContext(RecipeContext)
    console.log("🚀 ~ globalRecipes", globalRecipes)
    const {title, cookingTime} = useParams();
    console.log('title is ' + title);
  

    //const recipe = globalRecipes.f(item => item.title === title)
    
  //console.log('cookingTime is ' + cookingTime);
    //console.log('blabla ' + recipes);
    

    /* const recipesArray = Object.entries(recipes)
    console.log('recipesArray ' + recipesArray);  */ 

    //const [recipe, setRecipe] = useState()
    //const {title} = useParams();
    //console.log('title is ' + title);
/*     const getData = useCallback(async() => {
        try {
            const response = await axios.get('/recipes/list')
    
            console.log('response is ' + response)

            const recipe = response.post.find(item => item.title === title)

            setRecipe([...recipe])
        } catch (error) {
            console.log(error)
        }
    }, [])
    
    useEffect(()=>{
      getData()
    },[getData]) */



  return (
    <div>
{/*         {
            recipesArray.map((item, idx) => {
                <div key={idx} className="cardWrapper"><Card globalRecipes={item}/></div>
            })
        }  */}
        <div className="recipe-in-category">
            <div>{title}</div>
{/*             <picture>
                    <source srcSet={`https:${recipes?.fields.image.fields.file.url}?w=500&h=500&fm=webp`} type="image/webp" />
                    <img src={`https:${recipes?.fields.image.fields.file.url}?w=500&h=500`} alt="" />
                </picture> */}
 {/*            <div>{cookingTime} min.</div>
            <div className="small-font">{ingredients}</div>
            <div className="small-font">{method}</div>   */}
        </div> 
    </div>
  )
}
