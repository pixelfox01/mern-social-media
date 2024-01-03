import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    bio: { type: String },
    image: { type: String },
    clerk_uid: { type: String, required: true },
    onboarding_complete: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
