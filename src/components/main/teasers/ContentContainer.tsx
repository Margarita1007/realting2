import { Layout } from 'antd';
import React from 'react';
import Filters from './Filters';
import CardList from './CardList';

const ContentContainer: React.FC = () => {
    return (
        <Layout className='catalog-left'>
            <Filters/>
            <CardList/>
        </Layout>
    )
}

export default ContentContainer;