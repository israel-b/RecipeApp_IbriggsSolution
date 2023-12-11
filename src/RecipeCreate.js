import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
  // Blank initial form state
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
};

const [formData, setFormData] = useState({...initialFormState});

const handleChange = ({ target }) => {
  setFormData({...formData, [target.name]: target.value,});
};

const handleSubmit = (event) => {
  event.preventDefault();
  console.log("Submitted: ", formData);
  createRecipe(formData);
  
  setFormData({ ...initialFormState})
};

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [rating, setRating] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={formData.name}
                placeholder="Name" 
              />
            </td>
            <td>
              <input
                type="text"
                id="cuisine"
                name="cuisine"
                onChange={handleChange}
                value={formData.cuisine}
                placeholder="Cuisine" 
              />
            </td>
            <td>
              <input
                type="url"
                id="photo"
                name="photo"
                onChange={handleChange}
                value={formData.photo}
                placeholder="URL" 
              />
            </td>
            <td>
              <textarea
                type="text"
                id="ingredients"
                name="ingredients"
                onChange={handleChange}
                value={formData.ingredients}
                placeholder="Ingredients" 
              />
            </td>
            <td>
              <textarea
                type="text"
                id="preparation"
                name="preparation"
                onChange={handleChange}
                value={formData.preparation}
                placeholder="Preparation" 
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
