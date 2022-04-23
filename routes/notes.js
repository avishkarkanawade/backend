const express =require('express');
const router = express.Router();

router.get('/', (req , res) =>{
    a={
        name:"avi",
        role:"maneger"
    }
    res.json(a);
})

module.exports = router 