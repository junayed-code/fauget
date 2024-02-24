import bcrypt from "bcryptjs";
import mongoose, { Schema, models } from "mongoose";

const required = [true, "A user must have a {PATH} field."];

const schema = new Schema(
  {
    name: { type: String, required },
    email: { type: String, required },
    password: { type: String, required },
  },
  { timestamps: { updatedAt: false } },
);

// Create mongodb unique index of email field
schema.index({ email: 1 }, { unique: true });

// Create custom mongoose document method to compare password
schema.methods.comparePassword = async function (password: string) {
  return await bcrypt.compare(password, this.password as string);
};

// Define mongoose save middleware function
schema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password + "", 12);
});

const User = models.User || mongoose.model("User", schema);

export default User;
