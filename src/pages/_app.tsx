import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import '@/styles/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

const App = ({ Component, pageProps, }: AppProps) => (
  <>
    <Head>
      <meta charSet='UTF-8' />
      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0'
      />
    </Head>
    <Component {...pageProps} />
    <ToastContainer
      position='top-right'
      theme='dark'
      autoClose={5000}
    />
  </>
);

export default App;
