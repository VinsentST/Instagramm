import React, { Component } from 'react';
import InstaService from './../services/instaService.js';
import ErrorMessage from './Error';

export default class Palette extends Component {
      InstaService = new InstaService();
      state = {
            error: false,
            photos: []
      }
      //Применим метод жизненного цикла.Чтобы избежать ошибок только в после создания компоненты
      componentDidMount() {
            this.updatePhotos();
      }
      //Напишем функцию,загружающею фото с сервера
      updatePhotos() {
            this.InstaService.getAllPhotos()
                  .then(this.onPhotosLoaded)
                  .catch(this.onError)
      }
      /*Если есть ошибка.onEror умная програма изменит только флаг ошибки */
      onError = () => {
            this.setState({
                  error: true
            })
      }
      onPhotosLoaded = (photos) => {
            this.setState({
                  error: false,
                  photos
            })
      }
      //Для отделения бизнес логики
      renderItems(arr) {
            return arr.map(item => {
                  const { src, alt } = item;
                  return (
                        <img src={src} alt={alt} />
                  )
            }

            )
      }

      render() {
            const { error, photos } = this.state;
            if (error) {
                  return <ErrorMessage />
            }
            const items = this.renderItems(photos);
            return (
                  <div className="palette">
                        {items}
                  </div>
            )
      }
}
