import  { PencilLine} from '@phosphor-icons/react'
 
import style from './Sidebar.module.css'
import { Avatar } from './avatar'
 export function Sidebar(){
    return(
    <aside className={style.sidebar}>
      <img 
      className={style.cover}
      src="https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
     

     <div className={style.profile}>

          <Avatar src='https://avatars.githubusercontent.com/u/187860964?v=4'/> 
         
        <strong>Robson Ribero</strong>
        <span>Web Developer</span>
     </div>

     <footer>
        <a href="#">
            <PencilLine size={24} />
            Edite seu perfil</a>
     </footer>
    </aside>
    )
}