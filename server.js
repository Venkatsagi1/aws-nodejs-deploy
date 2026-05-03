const express = require('express');
const app = express();

app.get('/api/get', (req, res) => {
    res.send('Hello,Back to NODEJS');
}   );




app.listen(8000,     () => {        
    console.log('Server is running on port 8000');
});