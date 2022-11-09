import React from 'react';
import Bolage from "../Bolage/Bolage";
import Baner from "./Baber/Baner";
import Serv from "./service3/Serv";
import {FiCornerLeftDown, FiCornerRightDown} from 'react-icons/fi'
import Vegitor from '../Extrapage/Vegitor/Vegitor';

const Home = () => {
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


      <div>
        <div className='text-center  mt-16 '>
            <h1 className='text-3xl font-bold flex justify-center items-center gap-3'> <FiCornerLeftDown className='text-orange-400'/> Bloges <FiCornerRightDown className='text-orange-400'/></h1> 
        </div>
        <Bolage></Bolage>
      </div>

      

     
    </div>
  );
};

export default Home;