const baseUrl = "https://api.hnpwa.com/v0";

const api = {
    fetchNewsList: () => fetch(`${baseUrl}/news/1.json`).then(res => res.json()),
    fetchAskList: () => fetch(`${baseUrl}/ask/1.json`).then(res => res.json()),
    fetchJobsList: () => fetch(`${baseUrl}/jobs/1.json`).then(res => res.json()),
}

export default api;