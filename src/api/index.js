import axios from "axios";

const baseUrl = "https://api.hnpwa.com/v0/";

const fetchNewsList = async () => await axios.get(`${baseUrl}news/1.json`);
export default fetchNewsList