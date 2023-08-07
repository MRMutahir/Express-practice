console.log('SALAM');
// import { obj1 } from "./api1";
import  Express  from "express";
const app = Express()
// const obj1 = require('./api1')
// console.log("apis");
let obj = [
    {
        name:'Muhammad Talha',
        class:'Mern stack',
        batch:10,
    },
    {
        name:'Muhammad Mutahir',
        class:'Mern stack',
        batch:10,
    } ,{
        name:'Muhammad Eshareeb',
        class:'Mern stack',
        batch:10,
    } ,{
        name:'Muhammad Taha',
        class:'Mern stack',
        batch:10,
    }
]

app.get('/home',(req,res)=>{
    res.send(obj[0])
    res.send('home')
    
});
app.get('/about',(req,res)=>{
    res.send(obj[1])
    res.send('{name:mutahir}')
})
app.listen(8000,()=>{
    console.log('server run !');
})
app.post('/home',(req,res)=>{
    res.send(obj)
})