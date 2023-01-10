import axios from 'axios';

const axiosService = axios.create({
	baseURL: 'http://localhost:4000/',
	timeout: 2000,
	headers: { 'X-Custom-Header': 'foobar' },
});

export default axiosService;
