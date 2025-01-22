import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe(props){
    return (
    <section className='suggested-recipe-container' aria-live='polite'>
    <ReactMarkdown> 
        <h2>Chef Claude Recommends :</h2>   
    {props.recipe}
    </ReactMarkdown>
    </section>
    )
}