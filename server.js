import app from "./app.js";
import cloudinary from "cloudinary";
import 'dotenv/config';

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});

// API Working 
app.get('/', (req, res) => {
  res.send('Hello, World!');
});


// cloud service that offers an end-to-end image and video management solution, including uploads, storage, manipulations, optimizations, and delivery
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});