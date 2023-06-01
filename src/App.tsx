import React from 'react';
import './App.css';
import HeaderComponent from './components/header/Header';
import Main from './components/main/teasers/Main';
import { Route, Routes } from 'react-router-dom';
import OfferPage from './components/main/offers/OfferPage';
import { ConfigProvider, Layout } from 'antd';

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {   
          //fontFamily: 'Dancing Script, Montserrat, Ubuntu, sans-serif',
            fontFamily: 'Open+Sans, Montserrat, Ubuntu, sans-serif',
        }
      }}>
        <Layout>
            <HeaderComponent/>
            <main className='wrapper'>
              <Routes>
                  <Route path='/' element={<Main/>}/>
                  <Route path='offers/:id' element={<OfferPage/>}/>
              </Routes>
            </main>
        </Layout>
      </ConfigProvider>  
  );
}

export default App;
