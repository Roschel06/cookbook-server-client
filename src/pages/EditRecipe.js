// import { useState, useContext } from 'react';
// import {RecipeContext} from '../components/context'

// export default function EditRecipe() {
    

//     const {recipes, setRecipes} = useContext(RecipeContext)
   
//     const [editRecipe, setEditRecipe] = useState({ // LOCAL STATE
//         title: '',
//         ingredients: [],
//         method: '',
//         category: '',
//         cookingTime: ''

//     })

//     const [recipeIdx, setRecipeIdx] = useState(-1)

//     const handleSave = async () => {

//         try {
//             setRecipes({
//                 type: 'editRecipe',
//                 payload: editRecipe
//             }) // updates the context

//         } catch (error) {
//             console.log('Error editing data', error.message)
//         }

//     }

//     const handleDelete = (idx) => {
//        setRecipes({
//             type: 'deleteRecipe',
//             payload: idx
//         })
//     }

//     const editValues = (recipes, idx) => {
//         setEditRecipe({...recipes})
//         setRecipeIdx(idx)
//     }

//     const handleEdit = () => {
//       setRecipes({
//             type: 'editProduct',
//             payload: {
//                 idx: recipeIdx,
//                 product:recipes
//             }
//         })
//     }

//     return (
//         <div className="'w-full h-max flex flex-col bg-red-700 pl-5'">
//              <h1>Edit the Recipes</h1>
        
//         </div>
//     );
// }