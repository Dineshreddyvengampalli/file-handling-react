import React, { useState } from 'react'
import DOMPurify from 'dompurify';


function ProfileForm() {
    let [fileData,setFileData] = useState([])
    let [url,setUrl]  = useState('')
    let formData = new FormData()
    let inputHandler = (e)=>{
       setFileData(e.target.files[0])
       setUrl(URL.createObjectURL(e.target.files[0]))
    }
    let submitHandler = async(e)=>{
        e.preventDefault()
        formData.append('file',fileData)
        console.log(formData)
        const res = await fetch("http://localhost:3000/upload-file", {
            method: "POST",
            body: formData,
        }).then((res) => res.json());
        alert(JSON.stringify(`${res.message}, status: ${res.status}`));
        
    }
    const txt = ` <h3>This is a blog title </h3>
    <p>This is some blog text. There could be <b>bold</b> elements as well as <i>italic</i> elements here! <p>
    <img onerror='alert(\"Hacked!\");' src='invalid-image' />
 `
    const sanitizedBlog=DOMPurify.sanitize(txt)
    console.log(fileData)
    let image = DOMPurify.sanitize(`<img src={url} alt = 'image'></img>`)
  return (
    <div>
        <form>
            <input onChange={inputHandler} type='file'></input>
            <button type='submit' onClick={submitHandler}>upload</button>
        </form>
        <div dangerouslySetInnerHTML={{__html:sanitizedBlog}} >
        </div>
        <div dangerouslySetInnerHTML={{__html:image}}>

            {/* <img onError={<script>alert('error')</script>} ></img> */}
            {/* <img src={url} alt = 'image'></img> */}
        </div>
    </div>
  )
}

export default ProfileForm