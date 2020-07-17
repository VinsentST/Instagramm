import React, { Component } from 'react';
import Posts from './Posts';
import Users from './Users';

//У него нет поведения,поэтому это функциональный компонент.Нет смысла делать классом 
export default function Feed(){
      return(
            <div className="container feed">
              {/*Блог с поставми.Динамичный формат,поскольку подгружаются из базы данных */}
                  <Posts />
                  <Users/>
            </div>
      )
}

