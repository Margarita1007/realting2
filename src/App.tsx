import React, {useEffect, useState} from 'react';
import './App.css';
import HeaderComponent from './components/header/Header';
import Main from './components/main/teasers/Main';
//import { Route, Routes } from 'react-router-dom';
import { Routes, Route,  } from 'react-router-dom';
import OfferPage from './components/main/offers/OfferPage';
import { ConfigProvider, Layout } from 'antd';
import axios from 'axios';
import { useAppDispatch } from './app/hooks';
import { PropertyData } from './types';
import { setGeoToObj, setObject } from './app/ObjectSlice';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

    async function getDataApi() {
      setLoading(true);
       axios
        .get("https://us-central1-aisales-bot-vieoxe.cloudfunctions.net/property-api", {
            headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"

              }
        })
        .then((resp) => {
            const dataresp: PropertyData = resp.data;
            dispatch(setObject(dataresp.Properties));
            dispatch(setGeoToObj(dataresp.Properties));
            setLoading(false);
        })
        .catch((error) => console.error(error)) 
    }

    useEffect(() => {
        getDataApi()
    })

  return (
    <ConfigProvider
      theme={{
        token: {   
          //fontFamily: 'Dancing Script, Montserrat, Ubuntu, sans-serif',
            fontFamily: 'Open Sans, Montserrat, Ubuntu, sans-serif',
        }
      }}>
        {!loading ? 
          <Layout>
            <HeaderComponent/>
            <main className='wrapper'>
              <Routes>
                  <Route path='/' element={<Main/>}/>
                  <Route path='offers/:id' element={<OfferPage/>}/>
              </Routes>
            </main>
          </Layout>
        : 
        <div style={{textAlign: 'center'}}>
          Идет загрузка
        </div>      
        }
        
      </ConfigProvider>  
  );
}

export default App;
