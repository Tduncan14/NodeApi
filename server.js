
const http = require('http');


const data = [

    {
        id:1,text:"Keep Moving Forward"
    },

    {
        id:2, text:"Treek"
    },

    {
        id:3, text:"Always"
    }







]

const server = http.createServer((req,res) =>{

    res.setHeader('Content-Type','application/json')

    res.write('Keep moving forward');

    res.end(JSON.stringify({
        success:true,
        data
    }))
    console.log(req);
})


const PORT = 5000;

server.listen(PORT, () => {


    console.log(`server running on ${PORT}`);
})