import {useState} from 'react'
function UseReduce() {
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    let [emailValid,isEmailvalid] = useState(false)
    let [passwordValid,isPasswordValid] = useState(false)
    let emailHandler = (event)=>{
        setEmail(event.target.value)
        isEmailvalid(email.includes('@'))
        console.log(emailValid)
    }
    let passwordHandler = (event)=>{
        setPassword(event.target.value)
        isPasswordValid(password.length>=5)
    }
    let siginHandler = (e)=>{
        e.preventDefault()
        localStorage.setItem('login','1')
    }
  return (
    <div>
        <form>
            <label>Email</label>
            <input onChange={emailHandler} type='text'></input>
            <label>password</label>
            <input onChange={passwordHandler} type='password'></input>
            {  emailValid && passwordValid && <button onClick={siginHandler} type='submit'>signIn</button>}
        </form>
        <div>
            {emailValid && <h3>email is valid</h3>}
        </div>
        <div>
            {passwordValid && <h3>password is valid</h3>}
        </div>
    </div>
  )
}

export default UseReduce