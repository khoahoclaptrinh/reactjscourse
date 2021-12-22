import axios from "axios";

export default axios.create({
  baseURL: `http://laravelcourse.local/api/v1/`,
});
