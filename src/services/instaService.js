//Чисты JS, Нужен только чтобы обращаться к серверу.Не надо ничего рендерить.Используем метод fetch

export default class InstaService{
      constructor(){
            /*Упростим , т.к. то часть неизменяемя, её можно переиспользовать */
            this._apiBase = "http://localhost:3000";
      }
      /*Необходимо сделать класс так,чтобы он отправлял запрос к определенному ресурсу.
      Эти запросы могут много раз поворяться,поэтому пишем метод */
      /*async говорим о том,что функция асинхронная */
      getResource = async(url)=>{
            /*Приходит URL на который мы отправляем какой-то запрос */
            /*Асинхронная операция,надо дождаться пока все выполниться */
            /*await дождемся пока придет ответ с сервера */
            /*Используем интерполяцию */
            const res = await fetch(`${this._apiBase}${url}`);
            /*Делаем проверку Статус 200 . На то,что что-то поломалось */
            if(!res.ok){
                  throw new Error(`Couldn't fetch ${url}; received ${res.status}`);
            }
            /*Позволяет из JSON превратить в обычный объект.Т.к. это promise, то мы должны дождаться,пока это все выполниться
            Поэтому await */
            return await res.json();
      }
      /*Получим все посты с базы данных */
      getAllPosts = async()=>{
            /* Обратить внимание posts это название в json */
            const res = await this.getResource('/posts/');
            return res;
      }
      /*Поскольку нужны только фотографии,то будем их использовать */
      getAllPhotos = async()=>{
            /* Нам надо вытащить только srс и alt */
            const res = await this.getResource('/posts/');
            return res.map(this._transformPosts); 
      }
      //Напишем трансформирующий метод,чтобы возвращать только то,что надо
      _transformPosts = (post) =>{
            return(
                {
                  src:post.src,
                  alt:post.alt
                }
            )
      }
}