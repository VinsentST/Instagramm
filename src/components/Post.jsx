import React, { Component } from 'react';
import User from './User';

export default class Post extends Component{
      render(){
            return(
                  <div className="post"> 
                        <User
                        src="https://i.pinimg.com/originals/1a/08/90/1a08903848a091c15ba002d7020cacf2.jpg"
                        alt="ava"
                        name="Pidr"
                        min/>
                        {/* Нативынй вариант.Можно декструторизацию.This ссылается на каждый отдельный поставми
                         */}
                        <img src={this.props.src} alt={this.props.alt}/>
                        <div className="post__name">
                              some account
                        </div>
                        <div className="post__descr">
                              dsvsdvsdvsdvsdvsdvsd
                              sdvsdvsdvsdvsvsvsdvsvsvsdv
                              sdvsvsdvsdvsdvsdvsvsvsvsdv
                              svsdvsdvsdvsdvsvdsdvsdvsdvsdvsdv
                              sdvsdvsdvsdvsdvsdvsdvsdv
                        </div>
                  </div>
            );
      }
}