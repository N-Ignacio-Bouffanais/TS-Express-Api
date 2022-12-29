import { connect } from "mongoose";

export const startConnection = async () => {
  try {
    const db = await connect("mongodb://127.0.0.1/mevn-database");
    console.log(db.connection.name);
  } catch (error) {
    console.log(error);
  }
};
