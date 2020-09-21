import axios from "axios";

export const fetchDatafromApi = async () => {
  try {
    return (await axios("./db.json")).data;
  } catch (error) {
    throw new error();
  }
};
