import { Layout } from 'antd';
import React from 'react';
//import Filters from './Filters';
import CardList from './CardList';
import FooterComponent from '../../footer/Footer';

const ContentContainer: React.FC = () => {
      
    return (
        <div className='catalog-left-wrapper'>
            <Layout className='catalog-left'>
                {/* <Filters/> */}
                <CardList/>
            </Layout>
            <FooterComponent/>
        </div>
    )
}

export default ContentContainer;