import { useMutationHook } from "../../hooks/useMutationHook";
import { Divider } from "antd";
import React from "react";
import { useState } from "react";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import InputForm from "../../components/InputForm/InputForm";
import {WapperContainerLeft, WapperContainerRight} from "./style"
import * as UserService from "../../services/UserService"
import * as Message from "../../components/Message/Message"
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; 
const SignInPage = () => {
	const navigate = useNavigate();
	const [email, setEmail]=useState('');
	const [password, setPassword]=useState('');
	
	const handleOnchangeEmail=(value)=>{
		setEmail(value);
	}
	const handleOnchangePassword=(value)=>{
		setPassword(value);
	}
	const mutation=useMutationHook(
		data=>UserService.loginUser(data)
	)
	console.log(mutation,'mutation++++++')
	const {data, isLoading, isSuccess, isError, isWarning}=mutation
	useEffect(()=>{
		if(isSuccess){
			console.log(data,'data+++++++++++++++++++++++++')
			localStorage.setItem('access_token',data.data.access_token);
			const decodeToken=jwtDecode(data.data.access_token);
			console.log(decodeToken,'decodeToken+++++++++++++++++')
			getUserDetail(decodeToken.id,data.data.access_token);
			// navigate('/')
		}
	},[isSuccess])
	const handleSignIn=()=>{
		console.log(email, password,"=11111")
		mutation.mutate({
			email: email,
			password:password
		})
	}
	const getUserDetail=async (userId, access_token)=>{
		const res=await UserService.getUserDetail(userId, access_token);
		console.log(res,"res++++++++++++++++")
	}
  return (
    <div style={{ display: 'flex' }}>
      <WapperContainerLeft>
        <h1>Xin chào</h1>
        <p>Đăng nhập vào tài khoản</p>
        <InputForm 
			style={{MarginBottom:'20px'}} 
			placeholder="demo@gmail.com"
			value={email}
			onChange={handleOnchangeEmail}
		/>
		<Divider size="lager"/>
		<InputForm 
			style={{MarginBottom:'20px'}} 
			placeholder="Password" 
			value={password}
          	onChange={handleOnchangePassword}
          	type="password"
		/>

		<Divider size="lager"/>
		<ButtonComponent
			backgroundColor="#1677ff"
			textColor="white"
			width="200px"
			onClick={handleSignIn}
			>
			Đăng nhập
		</ButtonComponent>
      </WapperContainerLeft>
      <WapperContainerRight />
    </div>
  )
}

export default SignInPage