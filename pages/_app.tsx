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
        title="Mercurialis"
        titleTemplate="Mercurialis"
        defaultTitle="Mercurialis"
        description=""
        canonical="http://mercurialis.io/"
        openGraph={{
          url: "http://mercurialis.io/",
          title: "Mercurialis",
          description: "",
          images: [
            {
              url: "/images/apple-touch-icon.png",
              width: 180,
              height: 180,
              alt: "Reign Logo",
            },
          ],
        }}
        twitter={{
          handle: "@polepie",
          site: "@polepie",
          cardType: "app",
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
