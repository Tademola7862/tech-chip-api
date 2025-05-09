import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      
    },
    email: {
      type: String,
      required: [true, "email description is required"],
      
    },
    password: {
      type: String,
      required: [true, "Product price is required"],
      
    },
    updated_at: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;