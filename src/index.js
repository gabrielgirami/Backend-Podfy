import express from 'express'
import mongoose from 'mongoose'
import router from './routes'
import cors from 'cors'

import { MONGO_URI } from './config'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}))
app.use(cors());

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
  .then(() => console.log('Connected to DB!'))
  .catch((err) => console.log(err))

app.use(router)

app.listen(3333, () => {
  console.log('🔥 Server started!');
});