const express = require('express');
const app = express();
const port = process.env.PORT || 1000;
const cors = require('cors');

app.use(cors());

const courses = require('./data/courses.json');

app.get('/',(req,res)=>{
    res.send('Course API Running');
})

app.get('/courses',(req,res)=>{
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const singleCourse = courses.find(course => course.id === id);
    res.send(singleCourse);
})

app.listen(port, () => {
    console.log("T-Course server running on port", port);
});