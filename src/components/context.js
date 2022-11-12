import { createContext, useState, useReducer } from "react";
 import {useCallback, useEffect } from 'react'
 import { client } from '../client'
//import Test from './Test'

export const RecipeContext = createContext();

console.log(RecipeContext)

 export default function Context({children}) {
    
   const reducer = (state, action) => {
     switch (action.type) {

       case 'FETCH_SUCCESS':


            return {
             
             loading: false,
             post: action.payload,
             error: ''
            }

        case 'add':
            return {...state, recipes:[state.recipes, action.payload] }


            default:
             return state

      
  }
 }

// const initialState = {
//    loading: true,
//    error: '',
//    post:{},

//  }


const [globalRecipes, dispatchRecipes] = useReducer(reducer,{
 
//     recipes:{
//         title:'',
//         ingredients:'',
//         method:'',
//         category:'',
//         cookingtime:''
//    },
 
  

  })
 


       
//the initial value in the state needs to be the data (clean Data)
   // getData()
   // const [recipes setRecipe] = useState([])

    return <RecipeContext.Provider value={{globalRecipes, dispatchRecipes}}>

         {children}

    </RecipeContext.Provider>
} 