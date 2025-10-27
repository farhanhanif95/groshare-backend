import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(express.json()); // for parsing raw application/json
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.post('/', (req, res) => {
    console.log(req.body);
    const { name, age, gender } = req.body;

  res.json({
    message: "Body parameters received!",
    name,
    age,
    gender
  });

});