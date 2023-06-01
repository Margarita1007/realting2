import React from 'react';
import { Layout } from 'antd';
import ContentContainer from './ContentContainer';
import MapCatalog from './MapCatalog';

const Main: React.FC = () => {
    return (
        <Layout className='catalog'>
            <ContentContainer/>
            <div className='catalog-right catalog-right-visibility' id='catalog-right'>
                <MapCatalog/>
            </div>
        </Layout>
    )
}

export default Main;