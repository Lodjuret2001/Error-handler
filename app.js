import express from 'express';
const app = express();


app.get("/posts", (req, res) => {
    res.send('Get Posts')
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
})