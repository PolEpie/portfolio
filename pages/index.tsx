import type { NextPage } from 'next'
import { useState, useEffect, useRef } from "react"
import Header from '../components/Header/Header';
import WalletConnectProvider from "@walletconnect/web3-provider";
import { BigNumber, utils } from 'ethers';
import Image from 'next/image'

const Mint: NextPage = () => {
  const [number, setNumber] = useState(0)

  return (
    <div className='w-full min-h-[100vh] bg-zinc-900'>
      <div className='w-full h-[100vh] flex items-center justify-center'>
        <div className='flex flex-col items-center'>
          <span className='text-5xl text-zinc-900 title'>Mercurialis</span>

          <span className='text-1xl'>Web 3 Developper</span>
        </div>
      </div>

      <div className='w-full h-[100vh] flex flex-col items-center justify-between bg-zinc-800 p-10'>
        <span className='text-5xl text-zinc-800 title text-center w-full'>My skills</span>

        <div className='w-full md:h-[60vh] flex flex-col md:flex-row space-y-10 md:space-y-0'>
          <div className='flex flex-col flex-grow items-center justify-between'>
            <span className='text-3xl text-zinc-800 title'>Main skills</span>

            <div className='flex flex-col text-center space-y-3'>
              <span>Solidity</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>MongoDB</span>
            </div>
            
            <div/>
          </div>

          <div className='border hidden md:block' />
          
          <div className='flex flex-col flex-grow items-center justify-between'>
            <span className='text-3xl text-zinc-800 title'>Familiar W/</span>

            <div className='flex flex-col text-center space-y-3'>
              <span>Docker</span>
              <span>DevOps linux</span>
              <span>MySQL</span>
              <span>Php</span>
              <span>Python</span>
              <span>Django</span>
            </div>
            
            <div/>
          </div>

          <div className='md:hidden'/>
        </div>
      </div>

      <div className='w-full h-[100vh] flex flex-col items-center justify-between bg-zinc-900 p-10'>
        <span className='text-5xl text-zinc-800 title text-center w-full'>Portfolio</span>

        <div className='w-full h-[60vh] flex flex-col md:flex-col'>
          
          <div className='reign-bg portfolio-card'>
            <span className='text-2xl absolute opacity-100'>Reign</span>
          </div>
          <div className='wallet-dms-bg portfolio-card'>
            <span className='text-2xl'>Wallet DMs</span>
          </div>
          <div className='power-bg portfolio-card'>
            <span className='text-2xl'>Power</span>
          </div>
          <div className='avion-bg portfolio-card'>
            <span className='text-2xl'>Avion</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Mint
