import express, { query } from 'express';

const app = express();
const mock =        [ {id: 1, username : "anson", password : "yahiaahmed123456"},
{id: 2, username : "awad", password : "bigdick"},
{id: 3, username : "oramge", password : "kekw"}]


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Running port ${PORT}`);

})


app.get("/", (request, response) => {

    

   response.send("hello world")

})

app.get("/api/users" , (req,res) => {
    console.log(req.query);
    const{

    
    query: {filter,value},
} = req;

    if(!filter && !value) return res.send(mock);
    
    if(filter && value) return res.send( mock.filter((user) => user[filter].includes(value)))
        return res.send(mock)
});



app.get("/api/users/:id",(req,res) => {
   console.log(req.params.id) 
    const parsedid = parseInt(req.params.id);
    if(isNaN(parsedid))
        {
            return res.status(400).send ({msg: " Bad request. Invalid ID"});

        }
        const foundid = mock.find(( user) => user.id ===parsedid);
        if(!foundid) return res.sendStatus(404)
        return res.send(foundid);

})