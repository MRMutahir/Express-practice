import fs from "fs";
import express from 'express'
let read = fs.readFileSync('./MOCK_DATA.json','utf-8');
// console.log(read);
let app = express();
app.get('/api/users',(req,res)=>{
    res.json(read);
});
app.get('/users',(req,res)=>{
    let html = `<ul><li>${read}</li></ul>`
    res.send(html)
})
app.get('/api/users/:id',(req,res)=>{
    let id = req.params.id * 1
    let getid = read.find(user => user.id === id)
    return res.json(getid)
})
app.listen(8000,()=>{
    console.log('Ok');
})
