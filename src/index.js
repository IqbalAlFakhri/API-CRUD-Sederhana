const express = require('express');
const usersRoute = require('./routes/users.js');
const logsRequestMiddleware = require('./middleware/logs.js');
const upload = require('./middleware/multer.js');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 4000;

//routing didalam express app.method(path, handler);

//daerah middleware
app.use(logsRequestMiddleware);
app.use(express.json());
app.use('/asset',express.static('public/image'));

//daerah route
app.use("/users", usersRoute);
app.post("/upload",upload.single('photo'),(req, res) => {
    res.json({
        message: "Upload Success",
    })
})

//middleware error handling
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
    })
});
//daerah port listen server
app.listen(PORT, () => {
    console.log(`Server berhasil jalan di ${PORT}`);
})