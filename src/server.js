import express from 'express'
import { people } from './people'

let app = express()

app.get('/hello',(req,res)=>{
    res.send("Hello!")
})
app.get('/people',(req,res)=>{
    res.json(people)
})
app.get('/people/:name', (req, res) =>{
    let {name} = req.params
    let person = people.find(x=>x.name === name)
    res.json(person)
})

app.listen(3000, ()=>{
    console.log("Server is listening on port 3000")
}
)
