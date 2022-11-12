import React, { useContext , useState } from 'react'
import { RecipeContext } from '../components/context'

export default function AddNew() {

    const { dispatchRecipes } = useContext(RecipeContext)

    //local state:
    const [newRecipe, setNewRecipe] = useState({
        title: '',
        ingredients: [],
        method: '',
        category: '',
        cookingTime: ''

    })
    //update the context:
    

    const handleSave = async => {
        console.log('hello from save new product', newRecipe)
        
        // try {
            
        //     const response = await fetch('need a url from contentful', {
        //         method: 'POST',
        //         body: JSON.stringify(newProductToSend),
        //         headers: {
        //             'Content-type': 'application/json; charset=UTF-8'
        //         }
        //     }) // syntax fetch('url', {configutation})

        //     // axios.post('url', data)

        //     // const data = await response.json();
        //     // console.log("🚀 ~ data", data)

        //     dispatchState({
        //         type: 'add',
        //         payload: newRecipe
        //     }) // updates the context

        // } catch (error) {
        //     console.log('Error sending data', error.message)
        // }

    }

    

    //console.log('globalRecipies is ', globalRecipes)
  return (
    <div className='w-full h-max flex flex-col bg-red-700 pl-5'>
        <h1>Add Your Recipe</h1>
        <div className='bg-gray-200 w-[50%] m-3 p-3'>
            <h5>Title:</h5>
                <input 
                    type='text' 
                    placeholder='Recipe Title' 
                    className= "mt-1 mb-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[250px] rounded-md sm:text-sm focus:ring-1 h-[36px]"
                    value={newRecipe.title}
                    onChange={ e => setNewRecipe({...newRecipe, title: e.target.value})}
                />
                <h5>Catrgory:</h5>
                <select 
                    placeholder='Choose a Catrgory' 
                    className= "mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[250px] rounded-md sm:text-sm focus:ring-1"
                    value={newRecipe.category}
                    onChange={ e=> setNewRecipe({...newRecipe, category: e.target.value})}
                    >
                        <option value="">Choose a category</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="soup">Soup</option>
                        <option value="drink">Drink</option>
                        <option value="dinner">Dinner</option>
                        <option value="desert">Desert</option>
                </select>
                <h5>Cooking Time (minutes):</h5>
                <input 
                    type='number' 
                    placeholder='0' 
                    className= "mt-1 mb-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[250px] rounded-md sm:text-sm focus:ring-1 h-[36px]"
                    value={newRecipe.cookingTime}
                    onChange={ e=> setNewRecipe({...newRecipe, cookingTime: e.target.value})}
                />
                <h5>ingredients</h5>
                <input 
                    type='text'
                    className= "mt-1 mb-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[250px] rounded-md sm:text-sm focus:ring-1 h-[36px]"
                    value={newRecipe.ingredients}
                    onChange={e => setNewRecipe({...newRecipe, ingredients: e.target.value})}/>
                <h5>Method:</h5>
                <textarea
                    placeholder='How to cook this recipe' 
                    className= "mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[250px] rounded-md sm:text-sm focus:ring-1"
                    value={newRecipe.method}
                    onChange={ e=> setNewRecipe({...newRecipe, method: e.target.value})}
                />
              <button className='bg-red-700 rounded-md mt-5 p-3 w-[100px] flex items-center justify-center text-white' onClick={handleSave}><h5>Save</h5></button>
        </div>
      

    
    </div>
  )
}
