import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bb15262ae6c146118a4e1b44d70144dd",
  },
});
