import './UserProfile.css'
import { Button,IconButton,PhotoCamera,Stack, Typography } from '@mui/material';
import {useState,useEffect} from 'react'
import {CircularProgress} from '@mui/material'

function UserProfile() {
  let [file,setFile] = useState()
  let [isFileLoading,setIsFileLoading]  = useState(false)
  let [progress,setProgress] = useState(0)
  let uploadHandler = ()=>{
    console.log(file)
  }
  useEffect(() => {
    if(isFileLoading){
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 25));
      }, 800);
      return () => {
        clearInterval(timer);
      };  
    }
  });

  let changeHandler = (e)=>{
    let size = e.target.files[0].size*0.001
    if(size>=500 && size<= 1024){
      setIsFileLoading(true)
      console.log(e.target.files[0].size*0.001)
      setTimeout(()=>{
        setFile(URL.createObjectURL(e.target.files[0]));
        console.log(e.target.files)
        setIsFileLoading(false)
        setProgress(0)
      },3000)
    }
    else{
      alert(`please choose file between 0.5 - 1.0 mb other than ${Math.round(size)}kb `)
    }
  }
  return (
    <div className="main-container">
      <Stack direction="row" alignItems="center" spacing={2}>
          <Typography>choose file between 0.5 - 1.0 mb</Typography>
      <Button  variant="contained" component="label">
        Choose file
        <input onChange={changeHandler} hidden accept="image/*" multiple type="file" />
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
      </IconButton>
      <Button onClick={uploadHandler} variant='contained'>upload</Button>
     </Stack>
    <div className='image-container'>
      <img className='image' src={file} ></img>
      {isFileLoading && <CircularProgress className='loading-icon' variant='determinate' value={progress}/>}
    </div>
    </div>
  )
}

export default UserProfile