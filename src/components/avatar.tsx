import style from './avatar.module.css'

import { ImgHTMLAttributes } from 'react';


interface Avatars extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
    
    src: string;  // URL da imagem do avatar  (string)  --  Adicionado o tipo string para o src da imagem.
 
}
export function Avatar ({hasBorder = true, ...props} : Avatars){

    return (
        <img className={hasBorder ? style.avatarWithBorder : style.avatar} 

        {...props}
         />
    )
}