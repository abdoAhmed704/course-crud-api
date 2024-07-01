const express = require("express");
const app = express();
const coursesRouters = require('./routers/courses-route')


app.use(express.json());
app.use('/api/courses', coursesRouters);


app.listen(5000, () => {
    console.log("Server is running on port 5000");
});