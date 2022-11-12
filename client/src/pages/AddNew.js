import React, { createContext, useContext , useState } from 'react';
import { RecipeContext } from '../components/context';
import axios from "axios";
export const RecipeContext = createContext();

console.log(RecipeContext)

 export default function Context({children}) {

   const reducer = (state, action) => {
     switch (action.type) {



        case ('add'):
          return{
            ...state,
            recipes: [...state.recipes, action.payload]
          }

            default:
             return state


  }
 }




const [globalRecipes, dispatchRecipes] = useReducer(reducer,{
 
    recipes:{
        title:'',
        ingredients:'',
        method:'',
        category:'',
        cookingTime:''
   },
 


  })
 



//the initial value in the state needs to be the data (clean Data)
   // getData()
   // const [recipes setRecipe] = useState([])

    return <RecipeContext.Provider value={{globalRecipes, dispatchRecipes}}>

         {children}

    </RecipeContext.Provider>
}
