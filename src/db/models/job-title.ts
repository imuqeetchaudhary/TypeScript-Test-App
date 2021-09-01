import { Schema, model } from "mongoose";

const jobTitleSchema = new Schema({
  titleName: {
    type: String,
    required: true,
  },
  allowedLeaves: {
    type: String,
    required: true,
  },
});

export default model("JobTitle", jobTitleSchema);
