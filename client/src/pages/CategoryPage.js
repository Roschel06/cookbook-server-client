
import React, { useContext} from 'react';
import { Card } from '@mui/material';
import { useParams } from "react-router-dom";
import { RecipeContext } from '../components/context'


export default function CategoryPage() {


    const { globalRecipes }= useContext(RecipeContext)
    console.log("🚀 ~ globalRecipes", globalRecipes)
    const {name} = useParams();
    console.log('name is ' + name);

    const recipes = globalRecipes.post.find(item => item.fields.category === name)
    

    console.log('blabla ' + recipes);
    

    const recipesArray = Object.entries(recipes)
    console.log('recipesArray ' + recipesArray);





  return (
    <div>
        {
            recipesArray.map((item, idx) => {
                <div key={idx} className="cardWrapper"><Card globalRecipes={item}/></div>
            })
        } 
        <div className="recipe-in-category">
            <div>{recipes?.fields.title}</div>
{/*             <picture>
                    <source srcSet={`https:${recipes?.fields.image.fields.file.url}?w=500&h=500&fm=webp`} type="image/webp" />
                    <img src={`https:${recipes?.fields.image.fields.file.url}?w=500&h=500`} alt="" />
                </picture> */}
            <div>{recipes?.fields.cookingTime} min.</div>
            <div className="small-font">{recipes?.fields.ingredients}</div>
            <div className="small-font">{recipes?.fields.method}</div> 
        </div> 
       

        {
                Object.keys(recipes).forEach(function(key, index) {
                    <div>{recipes[key]?.fields?.title}</div>;
                  })
        }
    </div>
  )
}
