import React from 'react';

/*Создали как стрелочную функцию */
const User = (props)=>{
      {/*Деструкторизация */}
       const {min,src,alt,name}= props;
      return(

          <a href="#" className={min ? "user min": "user"}>
                  {/*Картинка с пользователем */}
                <img src={src} alt={alt}/>
                <div>{name}</div>
          </a>
      );
}
 
export default User;