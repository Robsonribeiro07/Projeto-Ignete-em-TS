export function Post(props){
    let Estilo = {
    width: '100%',
    height: '20%',
    border: '1px solid black'
        
    }

   return (
   <div className="div">
    <strong>{props.author}</strong>
     <p className="author">{props.content}</p>

   </div>
    
   )


}