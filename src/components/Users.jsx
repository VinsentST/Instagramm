import React from 'react';
import User from './User';


const Users = (props) => {
      return (
            <div className="right">
                   <User
                        src="https://i.pinimg.com/originals/1a/08/90/1a08903848a091c15ba002d7020cacf2.jpg"
                        alt="ava"
                        name="Pidr"
                        />
                  <div className="users__block">
                  <User
                        src="https://i.pinimg.com/originals/1a/08/90/1a08903848a091c15ba002d7020cacf2.jpg"
                        alt="ava"
                        name="Pidr"
                        min/>
                      <User
                        src="https://i.pinimg.com/originals/1a/08/90/1a08903848a091c15ba002d7020cacf2.jpg"
                        alt="ava"
                        name="Pidr"
                        min/>
                         <User
                        src="https://i.pinimg.com/originals/1a/08/90/1a08903848a091c15ba002d7020cacf2.jpg"
                        alt="ava"
                        name="Pidr"
                        min/>
                         <User
                        src="https://i.pinimg.com/originals/1a/08/90/1a08903848a091c15ba002d7020cacf2.jpg"
                        alt="ava"
                        name="Pidr"
                        min/>   
                  </div>
            </div>

      );
}
export default Users;