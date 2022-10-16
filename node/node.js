let http = require('http')

let server = http.createServer((req,res)=>{
    res.write('hai')
    res.end()
})

server.listen(3000)