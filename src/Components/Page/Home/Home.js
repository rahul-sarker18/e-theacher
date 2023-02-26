import React, { useContext } from 'react';
import Bolage from "../Bolage/Bolage";
import Baner from "./Baber/Baner";
import Serv from "./service3/Serv";
import {FiCornerLeftDown, FiCornerRightDown} from 'react-icons/fi'
import Vegitor from '../Extrapage/Vegitor/Vegitor';
import UseTitle from '../../UseTitle/UseTitle';
import Priceing from '../Extrapage/Priceing/Priceing';
import Login from '../../Authencations/Login';
import { AuthContext } from '../../Context/Usercontext';

const Home = () => {
  UseTitle('home')
  const {user} = useContext(AuthContext)
  return (
    <div>
      <Baner></Baner>

      <div>
        <div className='text-center  mt-16 '>
            <h1 className='text-3xl font-bold flex justify-center items-center gap-3'> <FiCornerLeftDown className='text-orange-400'/> Services <FiCornerRightDown className='text-orange-400'/></h1> 
        </div>
        <Serv></Serv>
      </div>

      <div className='mx-auto w-4/5'>
        <div className='text-center  mt-16 '>
            <h1 className='text-3xl font-bold flex justify-center items-center gap-3'> <FiCornerLeftDown className='text-orange-400'/> Views <FiCornerRightDown className='text-orange-400'/></h1> 
        </div>
        <Vegitor></Vegitor>
      </div>

      <div className='mx-auto '>
        <div className='text-center mb-5  mt-16 '>
            <h1 className='text-3xl font-bold flex justify-center items-center gap-3'> <FiCornerLeftDown className='text-orange-400'/> The Right <FiCornerRightDown className='text-orange-400'/></h1> 
        </div>
        <Priceing></Priceing>
      </div>

      


      <div>
        <div className='text-center  mt-16 '>
            <h1 className='text-3xl font-bold flex justify-center items-center gap-3'> <FiCornerLeftDown className='text-orange-400'/> Bloges <FiCornerRightDown className='text-orange-400'/></h1> 
        </div>
        <Bolage></Bolage>
      </div>

      {
       user?.uid ? undefined : <div className='mx-auto '>
        <div className='text-center mb-5  mt-16 '>
            <h1 className='text-3xl font-bold flex justify-center items-center gap-3'> <FiCornerLeftDown className='text-orange-400'/> LOG IN <FiCornerRightDown className='text-orange-400'/></h1> 
        </div>
        <Login/>
      </div>
      }

     
    </div>
  );
};

export default Home;