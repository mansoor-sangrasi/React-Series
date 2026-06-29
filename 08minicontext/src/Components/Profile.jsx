import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'


function Profile() {
    const {user}=useContext(UserContext)
  
    if ((!user.username || !user.password)) return <div>Please login</div>
    else if(user.username && user.password) return <div>Welcome Dear {user.username}</div>
    
  
}

export default Profile