import Head from 'next/head'
import Image from 'next/image'
import { SiDiscord, SiTwitter } from 'react-icons/si'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'
import { useState, FC  } from 'react'
import Link from 'next/link';
import {useRouter} from 'next/router';

type Props = {
    children: JSX.Element,
};

const Header: FC<Props>  = ({children}) => {
  const [visibilityMobileMenu, setVisibilityMobileMenu] = useState(false)

  const router = useRouter()

  const toggleMobileMenu = () => {
    setVisibilityMobileMenu(!visibilityMobileMenu)
  }

  return (
    <div className='min-h-[100vh] h-full'>
      <div className="flex flex-col lg:w-auto h-full min-h-[100vh] justify-between">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>

        {/* Desktop Menu */}
        <div className="justify-between items-center hidden lg:flex w-full sticky top-0 bg-zinc-900 py-5 px-12">
          <span className='text-2xl'>Pol Epie</span>
          
          <div className='space-x-5'>
            <span>Discord Logo</span>
            <span>Linkedin Logo</span>
          </div>
          
        </div>

        {/* Mobile Menu */}
        <div className="flex justify-around items-center lg:hidden mb-5 py-5 z-20">
          <div className="ml-5"/>
          <Image
            src="/images/vali6.png"
            width={171}
            height={96}
            alt="logo"
          />
          {visibilityMobileMenu ?
            <div></div>
          :
            <GiHamburgerMenu className={`text-2xl`} onClick={toggleMobileMenu}/>
          }

        </div>

        <div className="px-12 z-20 h-auto flex-grow pb-10 md:pb-0 py-5 bg-zinc-800">
          {children}
        </div>

      </div>

      {visibilityMobileMenu ?
        <div className="absolute w-[100vw] h-[100vh] opacity-90 bg-black top-0 z-30 text-white flex items-center justify-center">
          <div className="flex flex-col w-[70%] items-center space-y-5 text-3xl">
            <button className={"absolute top-0 right-0 text-2xl pr-8 pt-5 nav-btn-bg w-[80%] text-right"} onClick={toggleMobileMenu}>x</button>
            
          </div>

        </div>
      : <></>
      }

    </div>
  )
}

export default Header
