
let arr = [
    {
        id: 1,
        name: "John",
        age: 25
    },
    {
        id: 2,
        name: "Jane",
        age: 30
    },
    {
        id: 3,
        name: "Bob",
        age: 35
    }
]

const map = new Map();






const express = require("express"); 


const app = express();

app.use(express.json());







app.get("/test", (req, res) => {
    res.status(200).json("Hello world from EXPRESS");
})

app.get("/data", (req, res) => {
    res.status(200).json({
        data : arr,
        status : "success"
    });
})

app.get("/getuser/:id", (req, res) => { 
    
    const id = Number(req.params.id);

    const data = arr.find(idx => idx.id === id);

    res.status(200).json({
        status: "success",
        data: data ? data : "Not found"
    })

    
    
})

app.get("/userdetail", (req, res) => {

    const id = Number(req.query.id);

    const data = arr.find(idx => idx.id === id);

    res.status(200).json({
        status: "success",
        data: data ? data : "Not found"
    })

})



app.put("/updatedata/:id", (req, res) => {
    const id = Number(req.params.id);
    const {name, age} = req.query;

    arr.map(idx => {
        if(idx.id === id) {
            idx.name = name;
            idx.age = age;
        }
    })

    res.status(202).json({
        status: "success",
        data: arr
    })
})



app.delete("/delete/:id", (req, res) => {
    const id = Number(req.params.id);

    arr = arr.filter(item => item.id !== id);

    res.status(202).json({
        status: "success",
        data: arr
    })
})




app.post("/adduser", (req, res) => {

    console.log(req.body);

    const newId = Date.now();
    
    const url = req.body.url;
    map.set(newId, url);
    console.log(map);
    const obj = {
        id: Date.now(),
        name: req.body.name,
        age: req.body.age
    }

    arr.push(obj);

    res.status(202).json({
        status: "success",
        
        url : newId
    })

})

app.get("/:urlId", (req, res) => {
    const id = Number(req.params.urlId);
    const url = map.get(id);

    

    res.redirect(url);
})

app.listen(8080, () => {
    console.log("%cServer is running on port 8080", "color: red; font-weight: bold;");
})
