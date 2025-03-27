import React from "react";
import { useNavigate } from "react-router";

const HeaderComponent=()=>{
	const navigate = useNavigate();
	const handleNavigateLogin=()=>{
		navigate('/sign-in')
	}
	return (
		<div>
			<div onClick={handleNavigateLogin} style={{cursor:"pointer"}}>Đăng nhập</div>

		</div>
		)
}
export default HeaderComponent