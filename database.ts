import { connect } from "mongoose";
import config  from "./config/config";

export const startConnection = async () => {
  try {
    const db = await connect(config.DB.URI);
    console.log(db.connection.name);
  } catch (error) {
    console.log(error);
  }
};
