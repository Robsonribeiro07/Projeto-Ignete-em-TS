 import { ThumbsUp, Trash } from '@phosphor-icons/react'
import style from './coment.module.css'
import { Avatar } from './avatar'
import { useState } from 'react'

interface commentpost {
    content: string,
    handleDeleteComent: (comment: string) => void
}

export function Comment ({content, handleDeleteComent} : commentpost){


     const [likes, setLikes] = useState(0)


     const handleLikeComments = () => {

        setLikes((states)=> { // usando uma arrow funcion para pega o argumento e retornando + 1 no caso o states gurada sempre o valor atual do likes
            
            return states + 1
        })
        // Implementar a logica para salvar o numero de likes no seu backend, caso necessario.
 
    }

    function handleDeleteComentt() {

        handleDeleteComent(content)
    }

    
    
    return (
        <div className={style.comment}>

            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/187860964?v=4" />

            <div className={style.commentBox}>
                <div className={style.commentContent}>
                 <header>
                    <div className={style.authorAndTime}>
                      <strong>Robson Ribeiro</strong>
                      <time dateTime="11">cera de 1h atras</time>
                    </div>


                    <button title='Deletar comentario' onClick={handleDeleteComentt} >
                        <Trash size={20}/>
                    </button>
                 </header>

                 
                 <p>{content}</p>

              
                </div>


                <footer>
                    <button>
                        <ThumbsUp onClick={handleLikeComments}   />
                        Aplaudir <span>{likes}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}