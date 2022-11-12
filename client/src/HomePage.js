
import './App.css';
import { useContext } from 'react';
import { RecipeContext } from './components/context'
import Card from './components/Card';
import CommunityRecipes from './components/CommunityRecipes';
import HomeCategories from './components/HomeCategories';
import { Route, Routes, Link } from "react-router-dom";
import CategoryPage from './pages/CategoryPage';

function HomePage() {

 const { globalRecipes }= useContext(RecipeContext)
 console.log('test are here', globalRecipes)
  return (
      <div>
        <HomeCategories globalRecipes={globalRecipes} />
        <CommunityRecipes globalRecipes={globalRecipes}/>
        <p>-------------------------------------------------</p>
        <p>hello from home page</p>
          {globalRecipes?.post?.map((item, idx) => <Card key={idx} globalRecipes={item}/> )}
      </div>
  )
   
}

export default HomePage;