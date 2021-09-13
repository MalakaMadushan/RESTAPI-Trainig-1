const express =require("express");
const cors =require('cors');
const cookieParser =require('cookie-parser');
const db =require("./app/models/index");

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

db.sequelize.sync({ force: true }).then(() => {
    console.log("create db.");
  });

app.get("/",(req,res)=>{
    res.send("Welcome to server");
});

const PORT=3003;

app.listen(PORT,()=>{
    console.log(`Server is runing on ${PORT}`);

});