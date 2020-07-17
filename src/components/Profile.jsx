import React from 'react';
import User from './User';
import Palette from './Palette';


const Profile = (props)=>{
      return(
            <div className="container profile">
            <User
                 src="https://i.pinimg.com/originals/1a/08/90/1a08903848a091c15ba002d7020cacf2.jpg"
                 alt="ava"
                 name="Pidr"
                 min/>
                 <Palette/>
            </div>
      )
}
export default Profile;