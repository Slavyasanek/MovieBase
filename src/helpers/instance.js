import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWZmMDQ2Y2QzMDBkMmJiYzZiZWZiYTRiZDg1OTI5NSIsInN1YiI6IjY0NDdkYzJjMzk3ZGYwMDQ0MDRjMTBhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sfbmaEFvDcBYSv5DdmEBl9W_FaBeZqNYLH9oC2jnVwI`
    }
})