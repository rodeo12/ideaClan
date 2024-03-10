const express= require("express");
const app= express() ;
app.use(express.json()) ;
require("dotenv").config() ;


const { authMiddleware } = require('./middleware/authMiddleware');
const { errorHandler } = require('./middleware/errorHandler');
const { loggerMiddleware } = require('./middleware/loggerMiddleware') ;

const adminRoutes = require('./admin/adminRoutes');
const courseRoutes = require('./course/courseRoutes');
const studentRoutes = require('./student/studentRoutes');
const lectureRoutes = require('./lecture/lectureRoutes');
const { connectDb } = require('./config/database');

// Middleware
app.use(loggerMiddleware.logger);
app.use(errorHandler.handleErrors);


// Routes
app.use('/admin', adminRoutes);
app.use('/courses', authMiddleware.authenticateToken, courseRoutes);
app.use('/students', authMiddleware.authenticateToken, studentRoutes);
app.use('/lectures', authMiddleware.authenticateToken, lectureRoutes);




//Error Handler

app.use((err,req,res)=>{
    console.err(err.stack);
    res.status(500).send({message: "Internal Server Error"});
})

app.get("/",(req,res)=>{
    res.status(200).json({ msg: 'Welcome to the ideaClan Backend' })
    })

//Server Connection

const PORT= process.env.PORT||7979 ;    
// Connect to MongoDB
connectDb()
  .then(() => {
    // Start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });