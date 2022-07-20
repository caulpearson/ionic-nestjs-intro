/* eslint-disable prettier/prettier */
import mongoose from "mongoose";

export const MessageSchema = new mongoose.Schema({
  content: String,
  submittedBy: String,
});