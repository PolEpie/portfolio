import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <NextSeo
        title="DApp | Valibots"
        titleTemplate="DApp | Reign Valibots"
        defaultTitle="DApp | Reign Valibots"
        description=""
        canonical="https://reign-dapp.vercel.app/"
        openGraph={{
          url: "https://reign-dapp.vercel.app/",
          title: "DApp | Valibots",
          description: "",
          images: [
            {
              url: "/images/vali6.png",
              width: 51,
              height: 51,
              alt: "Reign Logo",
            },
          ],
        }}
        twitter={{
          handle: "@",
          site: "@",
          cardType: "app",
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
