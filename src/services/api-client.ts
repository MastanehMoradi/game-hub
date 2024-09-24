import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fc1ee6d2abe44cb1a3b68f2791c06a51'
    }
})