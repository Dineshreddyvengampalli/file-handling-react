import fs from 'fs'
const dir = './uploads';

const getNumFiles = async (dir) => {
  const files = await fs.readdir(dir,(error,res)=>{
    console.log(res)
  })
}
getNumFiles(dir)

// fs.readdir(dir, (err, files) => {
//     console.log(dir)
//     console.log(files.length);
//     console.log(files)
//   });
  
