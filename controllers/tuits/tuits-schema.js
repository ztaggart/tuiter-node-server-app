import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    tuit: String,
    topic: String,
    userName: String,
    time: String,
    title: String,
    image: String,
    replies: Number,
    retuits: Number,
    dislikes: Number,
    handle: String,
    likes: Number,
    liked: Boolean,
  },
  { collection: "tuits" }
);
export default schema;
