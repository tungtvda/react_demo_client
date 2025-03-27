import axios from 'axios'
export const loginUser= async (data)=>{
	const res=await axios.post(`${process.env.REACT_APP_API_URL_BACKEND}/user/login`,data);
	return res.data
}

export const getUserDetail= async (id,access_token)=>{
	const res=await axios.get(`${process.env.REACT_APP_API_URL_BACKEND}/user/${id}`,{
		headers:{
			token:`Bearer ${access_token}`
		}
	});
	return res.data
}