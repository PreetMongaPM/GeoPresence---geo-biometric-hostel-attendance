import express from 'express';
import authUser from './routes/authUser.js';
import registerUser from './routes/registerUser.js'
import cors from 'cors';

const app = express();
app.use(cors());

// app.get('/',(req, res, next)=>{
//  return res.json({success : 'true'});
// })

app.use('/api', authUser);
app.use('/api', registerUser);

app.listen(3000, ()=>{
  console.log("Server up and running at 3000");
})

export default app;