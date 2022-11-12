// import React from 'react'
// import { useState, useCallback, useEffect } from 'react'
// import { client } from '../client'
//  const Test = () => {
//      const [isContentLoading, setisContentLoading]  = useState(false)
//      const [contentSlides, setContentSlides] = useState([])

//      const cleanUp = (rawData) => {
//          const cleanData = rawData.map((recipe) => {
//              const {sys, fields} = recipe
//              const { id } = sys
//              const title = fields.title
//              const category = fields.category
//              const cookingTime = fields.cookingTime
//              const images = fields.images.fields.file.url
//              const ingredients = fields.ingredients
//              const method = fields.method
//              const rating = fields.rating
//              const updatedSlides = { id, title, category, cookingTime, images, ingredients, method, rating  }
//             return updatedSlides
//          })
//          setContentSlides(cleanData)
//      }

//      const getContentSlides = useCallback (async () => {
//         try {
//             const response = await client.getEntries({ content_type: 'desertRecipe'})
//             const responseData = response.items
//             console.log(responseData)
//             if(responseData){
//                 cleanUp(responseData)
//             }else{ setContentSlides([]) }
//         } catch (error) {
//             console.log(error)
//         }
//      }, [cleanUp])
//      console.log('content is ', contentSlides)
//      useEffect(() => {
//          getContentSlides()

//      }, [])
//   return (
//     <div>
//         <h1 className="bg-white-300 text-black">Test Cookbook</h1>
//     </div>
//   )
// }
// export default Test
