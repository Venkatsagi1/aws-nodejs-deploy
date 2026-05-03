const express = require('express');
const app = express();

app.get('/api/get', (req, res) => {
    res.send('Hello,Back to NODEJS');
}   );

app.get('/api/get2', (req, res) => {
    res.send({
        user:{
        name: "venkat",
        role: "devops Engineer" 
        }
        
    }); 

    })


app.listen(8000,     () => {        
    console.log('Server is running on port 8000');
});