const express = require('express');
const cors = require('cors');
const emproutes = require('./routes/emp')


const app = express();
app.use(cors('*'));
app.use(express.json());
app.use("/emps",emproutes);



app.listen(5555,()=>{
    console.log("Server started at port 5555")
})