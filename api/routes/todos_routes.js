const express = require('express');
const router = express.Router();

const todos = require("../data/todos");

router.get('/', (req, res) => {

    res.json(todos);

    // res.json({
    //     page:1,
    //     total_pages:1,
    //     count:todos.length,
    //     data:todos,
    //     links:[
    //         {
    //             href:`/todos`,
    //             rel:"self",
    //             type:"GET",
    //         },
    //     ]
    // });
})

router.get('/:id', (req, res) => {
    //res.json(todos[0]);

    const {id}= req.params;

    const todo = todos[0];

    res.json({
        data:todo,
        links:[
            {
                href:`/todos/${id}`,
                rel:"self",
                type:"GET",
            },
            {
                href:`/todos`,
                rel:"list",
                type:"GET",
            },
        ]
    });
})


router.post('/', (req, res) => {

    const {title,content, done, deadline} = req.body; 

    console.log({title});
    console.log({content});
    console.log({done});
    console.log({deadline});

    if(title!=="" && title!=undefined){
        console.log("ok");
    }else{
        res.status(400).send("title is missing");
    }

    todos.push(req.body)

    res.json(todos);
})


module.exports = router;