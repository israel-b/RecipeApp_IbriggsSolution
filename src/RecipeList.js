import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeList({recipes, deleteRecipe}) {
  // Displays the list of recipes using table structure
  // Each recipe row has a delete button that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <RecipeCard 
              deleteRecipe={() => deleteRecipe(index)}
              key={index}
              recipe={recipe}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
