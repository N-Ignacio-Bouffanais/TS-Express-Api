import { Schema, model, Document } from "mongoose";
import bcrypt  from "bcrypt";

export interface IUser extends Document {
  usersame: string;
  email: string;
  password: string;
  comparePassword: (password: string) => Promise<boolean>;
}

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: [
      {
        ref: "Role",
        type: Schema.Types.ObjectId,
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

UserSchema.pre<IUser>('save', async function (next){
  const user = this;
  if(!user.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt)
  user.password = hash
  next();
})

UserSchema.methods.comparePassword = async function(password:string): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
}

export default model<IUser>("User", UserSchema);
