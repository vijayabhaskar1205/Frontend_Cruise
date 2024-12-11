import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Cruise from './Cruise';
import {  useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import '../styles/explore.css'
const Explore = () => {
    const [cruises, setCruises] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    axios.defaults.withCredentials=true;
    useEffect(()=>{
      const verifyUser=async()=>{
      try{
        const token = localStorage.getItem('token');
        console.log(token);
        if (!token) {
            navigate('/login');
            return;
        }
       const res=await axios.get('http://localhost:3010/client/verify', {
        headers: { Authorization: `Bearer ${token}` }
    });
          if(res.data.status){
            fetchData();
          }
          else{
            navigate('/login');
          }
      }
    catch(err){
      navigate('/login');
    }
  }
  verifyUser();
  },[navigate]);

    const fetchData= async()=>{
    try{
      const response=await axios.get('http://localhost:3010/api/explore/getallcruises');
      const data=response.data.cruise;
      console.log(response.data)
      setCruises(data);
        setLoading(false);

    }catch(error){
        console.log(error)
        setError(error);
        setLoading(false);
    }
  };
   

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }
  console.log('Cruises Length:', cruises.length);
  return (
    <div className='explorepage'>
      <div>
        {loading?(
          <h1></h1>
        ):error?(
          <h1></h1>
        ):(
          cruises.map((cruise,index)=>{
            return (<div key={index}>
              <Cruise cruise={cruise}/>
              </div>
              )
          })
        )}
      </div>
    </div>
  )
}

export default Explore
