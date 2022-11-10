import type { NextPage } from 'next'
import { useState, useEffect, useRef } from "react"
import Header from '../components/Header/Header';
import WalletConnectProvider from "@walletconnect/web3-provider";
import { BigNumber, utils } from 'ethers';
import Image from 'next/image'
import Link from 'next/link'

const Mint: NextPage = () => {
  const [revealDiscord, setRevealDiscord] = useState(false)

  return (
    <div className='w-full min-h-[100vh] bg-zinc-800'>
      <div className='w-full h-[100vh] flex flex-col items-center justify-between py-10'>
        <div/>
        
        <div className='flex flex-col items-center'>
          <span className='text-5xl text-zinc-800 title'>Mercurialis</span>

          <span className='text-1xl'>Web 3 Developper</span>
        </div>

        <div className='space-x-10'>
          <Link href="https://github.com/PolEpie">GitHub</Link>

          <Link href="https://www.linkedin.com/in/pol-epie-458ab613a/">LinkedIn</Link>

          <button onClick={() => setRevealDiscord(!revealDiscord)}>{revealDiscord? "Mercurialis#8592"  : "Discord"}</button>
        </div>
      </div>

      <div className='w-full h-[100vh] flex items-center justify-center bg-zinc-900'>
        <div className='flex flex-col items-center space-y-5 px-5'>
          <span className='text-5xl text-zinc-800 title text-center w-full'>Who I am ?</span>

          <p className='text-1xl text-center'>To introduce myself, my name is Pol and i'm a French developper
          <br/>I've doing coding stuff since 4 Yo and i've start with developping stuff for Garry's Mod,
            <br /> it's a Sandbox game where you can create everything from scratch</p>
          
          <p className='text-1xl text-center'>I'm doing Web 3 developpment since this year and I'm now lead backend dev at <Link href='https://app.powernode.io/' className='color-blue'>PowerNodes</Link>
            <br />and also FullStack dev for a lot of other DeFi projects.
            <br />I've learn everything myself so i can really adapt me to other projects or stack.
            <br />I really love to learn so if your project need some new stuff it will be a pleasure for me to help you</p>
          
            <p className='text-1xl text-center'>I've already work on Dex, NFTs collection, Rebase Token, Web3 Servicies and Nodes projects</p>

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

        <div className='w-full h-[60vh] flex flex-col md:flex-row'>
          
          <Link href="https://reign-dapp.vercel.app/">
            <div className='reign-bg portfolio-card'>
              <span className='text-2xl absolute opacity-100'>Reign</span>
            </div>
          </Link>
          <Link href="https://wallet-tracker-dapp.vercel.app/">
            <div className='wallet-dms-bg portfolio-card'>
              <span className='text-2xl'>Wallet DMs</span>
            </div>
          </Link>
          <Link href="https://app.powernode.io/">
            <div className='power-bg portfolio-card'>
              <span className='text-2xl'>Power</span>
            </div>
          </Link>
          <div className='avion-bg portfolio-card'>
            <span className='text-2xl'>Avion</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Mint
