import mongoose from "mongoose";

const DEV_MONGO_URI = "mongodb://localhost:27017/typescript-test-app";
const PROD_MONGO_URI =
  "mongodb+srv://muqeet_chaudhary:Abdul6890060@cluster0.bqu75.mongodb.net/typescript-test-app";

const MONGO_URI =
  process.env.NODE_ENV === "production" ? PROD_MONGO_URI : DEV_MONGO_URI;

(async () => {
  try {
    const mongooseOptions: any = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    const db = await mongoose.connect(MONGO_URI, mongooseOptions);

    console.log("Successfully connected to db..");
  } catch (error) {
    console.error(error);
  }
})();
