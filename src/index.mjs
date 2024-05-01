import express from 'express';

const app = express();

const mock = [
    {id: 1, username : "anson", password : "yahiaahmed123456"},
    {id: 2, username : "awad", password : "bigdick"},
    {id: 3, username : "oramge", password : "kekw"}
]

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Running port ${PORT}`);

})
app.use(express.json())

app.get("/", (request, response) => {

    if (request.body.username === "hi") {
        response.status(201).send({msg: "hello!"})
    }
    else {
        response.status(201).send({msg: "doesn't work"})
    }

})

app.get("/api/users" , (req,res) => {
    res.send([
        {id: 1, username : "anson", password : "yahiaahmed123456"},
        {id: 2, username : "awad", password : "bigdick"},
        {id: 3, username : "oramge", password : "kekw"},
    ]);
    console.log("hi");
});
app.get("/api/users/:id",(req,res) => {
    console.log(req.params);
})