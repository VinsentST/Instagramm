import React,{Component}  from 'react';
import logo from './../logo.svg';
import {Link} from 'react-router-dom';
//Экспортируем класс по умолчанию он наследуется от Coponent , классы всегда пишутся с большой буквы
//Поскльку Wabpak может выдать ошибку 
//Классы конструирую объекты, у них есть свойства и функции .Основной метод render()
export default class Header extends Component {
      render() {
            return(
                  <header>
                         {/* Лого подставили во внутрь верстки */}
                        <div className="container h-flex">
                              <Link to='/' className="logo">
                                    <img src={logo} alt="logo"/>
                              </Link>
                           {/* Ссылки */}
                              <nav className="links">
                                    <ul>
                                          <li>
                                                <Link to='/' className="menu__links">Лента</Link>
                                          </li>
                                          <li>
                                                <Link to='/profile' className="menu__links">Профиль</Link>
                                          </li>
                                    </ul>

                              </nav>
                             
                        </div>
                  </header>
      );
     }
}  
    