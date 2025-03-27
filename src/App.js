
import React, {Fragment} from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios'
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import routes from './routes'
const queryClient = new QueryClient();
function App() {
  // useEffect(()=>{
  //    fetchAPI();
  // },[])
  // console.log(process.env.REACT_APP_API_URL_BACKEND,'process.env.REACT_API_URL_BACKEND++++++++++++++++++++++++')
  // const fetchAPI=async ()=>{
  //   const res=await axios.get(`${process.env.REACT_APP_API_URL_BACKEND}/user`);
  //   // const res=await axios.get(`http://localhost:3001/api/user`);
  //   console.log(res,"+++++++++++++++++++++++++++++")
  // } 
  return (
    <QueryClientProvider client={queryClient}>
    <div >
      <Router>
        <Routes>
          {
            routes.map((route)=>{
              const Page=route.page;
              const Layout=route.isShowHeader?DefaultComponent:Fragment
              return (<Route key={route.path} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
               
              } />)
            })
          }
          {/* <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProducsPage />} /> */}
        </Routes>
      </Router>
    </div>
    </QueryClientProvider>
  );
}

export default App;
