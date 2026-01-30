import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(cors()); //ek package che frontend and backend alg alg port pr run thy tyre ano use krvo pde otherwise data share ny thy
app.use(express.json()); //Parse JSON request bodies

//app.use for middleware and router file
//app.get use for request like get,post,put,delete

app.use("/api", userRoutes); //hit this api from frontend and second is function who is route define "userroutes"

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
