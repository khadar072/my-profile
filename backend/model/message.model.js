 import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
     email: {
      type: String,
      required:true  
    },
    name: {
      type: String,
      required:true
    },
    message: {
      type: String,
      required:true
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

const Messages = mongoose.model("Messages", messageSchema);

export default Messages;
