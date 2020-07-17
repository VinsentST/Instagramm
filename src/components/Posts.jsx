import React, { Component } from 'react';
import Post from './Post';
import User from './User';
import InstaService from './../services/instaService.js'
import ErrorMessage from './Error';

export default class Posts extends Component {
      /*Используем новый стандарт .Без super */
      /*Создадим экземпляр нашего Сервиса ,чтобы мы могли как объект его использовать */
      InstaService = new InstaService();
      state = {
            posts: [],
            error: false
      };
      /*Используем методы жизненного цикла.Обращайся на серврер только когда создан компонент */
      componentDidMount() {
            this.updatePosts();
      }
      /*Будет обновлять наши посты.Как при только иницилизации,так и при скролле.Подвязать под скролл !!!!  */
      updatePosts() {
            this.InstaService.getAllPosts()
                  .then(this.onPostsLoaded)
                  .catch(this.onError);
      }
      /*Если все хорошо,то используем onPostLoaded */
      onPostsLoaded = (posts) => {
            /**Присвом state  с помощью этого метода */
            this.setState({
                  /*Short Object notation */
                  posts,
                  error: false
            })
            console.log(this.state)
      }
      /*Если есть ошибка.onEror умная програма изменит только флаг ошибки */
      onError = () => {
            this.setState({
                  error: true
            }
            )
      }
      //Паттерн Render метод.Будет возвращать уже готовую верстку,которую мы выведем из массива
      renderItems(arr){
            return arr.map(item => {
                  //Деструкторизация
                  const {name,altname,photo,src,alt,descr,id}=item;
                  return(
                        //key нужен чтобы избавиться от варнингов
                        // Если что-то удалилось на сервевре ,чтобы все заново не отрисовывать есть key
                        <div key={id} className="post"> 
                        <User
                              src={photo}
                              alt={altname}
                              name={name}
                              min/>
                        <img src={src} alt={alt}/>
                        <div className="post__name">
                             {name}
                        </div>
                        <div className="post__descr">
                              {descr}
                        </div>
                  </div>
                  )
            })
      }
      render()
       {
            const {error,posts}=this.state;
            if(error){
                  return <ErrorMessage/>
            }
            const items = this.renderItems(posts);
            //Нужно знать какое состояние моего state
            return (
                  <div  className="left">
                        {/*Вставили для отображения */}
                        {items}
                        {/* Пока это будут статические посты.Можем создавать разные посты с каритнками */}
                        <Post src="https://www.tokkoro.com/picsup/400212-animal-images-background.jpg" alt="1" />
                        <Post src="" alt="2" />
                        <Post src="" alt="3" />
                        <Post src="" alt="4" />
                  </div>
            )
      }


}


{/* <Post src="https://s1.1zoom.ru/big3/47/358153-admin.jpg" alt="inst"/>
                         <Post src="http://www.fonstola.ru/download.php?file=201201/2560x1440/fonstola.ru-71369.jpg" alt="inst"/> */}