import React from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
/**Claude API import */


export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    
    const [recipe, setRecipe] = React.useState("")
    
    async function getRecipe() {
       const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
       setRecipe(recipeMarkdown)
    }


    return (
        <main>
            <form action={addIngredient} className="iform">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button> + Add ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} ingredientsListItems={ingredientsListItems} toggle={getRecipe}/>}
            {recipe && <ClaudeRecipe recipe={recipe}/>}
        </main>
    )
}