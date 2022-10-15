import { useEffect, useState } from 'react';
import './App.css';
import ProfileForm from './Components/profile-form/ProfileForm';
import UseReduce from './Components/use-reducer/UseReduce';
import UserProfile from './Components/UserProfile';

function App() {
  let [isLogin,setIslogin] = useState(false)

  useEffect(()=>{
    if(localStorage.getItem('login'==='1')){
      setIslogin(true)
    }
  },[])

  return(
    <div className='app'>
      {/* <UserProfile></UserProfile> */}
      {/* <ProfileForm></ProfileForm> */}
      {!isLogin && <UseReduce></UseReduce>}
      {isLogin && <h1>logged in sucessfully</h1>}

    </div>
  )
}

export default App;
