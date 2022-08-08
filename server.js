const express = require("express");
const cors = require("cors");
const app = express();
// const caseRouter = require("./serverCases");
const cases = require('./server.cases');

app.use(cors());
// app.use(caseRouter);
app.use("/login", (req, res) => {
  res.send({
    token: "test123",
  });
});
app.get("/allCases",(req,res)=>{
  res.send({
    cases: cases,
  })
})



app.listen(8080, () =>
  console.log("API is running on http://localhost:8080/login")
);
