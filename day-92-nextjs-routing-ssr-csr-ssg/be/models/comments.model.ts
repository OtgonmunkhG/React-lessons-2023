import mongoose, { Schema } from "mongoose";

interface IComment {
  name: string;
  email: string;
  movie_id: { type: mongoose.Schema.Types.ObjectId; ref: "movies" };
  text: string;
  date: Date;
}

const CommentSchema: Schema = new Schema({});
const CommentModel = mongoose.model<IComment>("Comment", CommentSchema);
export default CommentModel;
