import axios from "axios";

export const fetchDatafromApi = async () => {
  try {
    const response = await axios("./db.json");
    const data = response.data;
    return data;
  } catch (error) {
    throw new error();
  }
};
