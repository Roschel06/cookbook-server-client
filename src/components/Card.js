import React from 'react'
import '../CSS/Card.css'

function Card({idx, globalRecipes}) {
    const {url} = globalRecipes.fields.url.fields.file
    const {title,cookingTime,category,ingredients, method,rating} = globalRecipes.fields

    //const stars = [<span>&#9733;</span>, <span>&#9733;</span>, <span>&#9733;</span>, <span>&#9733;</span>,<span>&#9733;</span>]

/*     let starArray = 
        [...Array(5)].map((star, index) => {
            index += 1;
            return (
            <span key={index}>&#9733;</span>
            );
        })
        console.log('Array is' + starArray); */

    const starRating =
/*      starArray.map(function(content) {
        // map content to html elements
        return <>{content}</>;

    }) */
    [...Array(5)].map((star, index) => {
        index += 1;
        return (
        <span key={index}>&#9733;</span>
        );
    })
    .reduce(function(r, element, index) {
        // create element groups with size 3, result looks like:
        // [[elem1, elem2, elem3, elem4], [elem5], ...]
        index % rating === 0 && r.push([]);
        r[r.length - 1].push(element);
        return r;

    }, []).map(function(rowContent, idx) {
        // surround every group with 'span'
        return <span key={idx} className="star">{rowContent}</span>;
    });

  return (
    <div className="card">
        <picture>
            <source srcSet={`https:${url}?w=500&h=500&fm=webp`} type="image/webp" />
            <img src={`https:${url}?w=500&h=500`} alt="" />
        </picture>
        <h3>{title}</h3>
        <div className="star-rating">{starRating}</div>
    </div>
  )
}

export default Card

