import React from 'react'
import millify from 'millify';
import { Link } from "react-router-dom";
import { Typography, Row, Col, Statistic } from 'antd';
import { useGetCryptosQuery } from '../service/cryptoApi';

import Cryptocurrencies from './Cryptocurrencies';
import News from './News';

 
const {Title}=Typography;


const Homepage = () => {
  const{data,isFetching}=useGetCryptosQuery(8);
  if(isFetching)return "Loading.....";
  const gloStats=data?.data?.stats;


  return (
    <><Title level={2} className="heading">Global Crypto Stats</Title>
    <Row gutter={[32, 32]}>
      <Col span={12}><Statistic title="Total Cryptocurrencies" value={gloStats.total} /></Col>
      <Col span={12}><Statistic title="Total Exchanges" value={millify(gloStats.totalExchanges)} /></Col>
      <Col span={12}><Statistic title="Total Market Cap:" value={millify(gloStats.totalMarketCap)} /></Col>
      <Col span={12}><Statistic title="Total 24h Volume" value={millify(gloStats.total24hVolume)} /></Col>
      <Col span={12}><Statistic title="Total Markets" value={millify(gloStats.totalMarkets)} /></Col>
    </Row>
    <div className='home-heading-container'>
      <Title level={2} className="home-title">Top 8 Cryptocurrencies in The World</Title>
      <Title level={2} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>

    </div>
    <Cryptocurrencies simplified/>
    <div className='home-heading-container'>
      <Title level={2} className="home-title">Top Crypto News</Title>
      <Title level={2} className="show-more"><Link to="/news">Show More</Link></Title>
      </div>
    <News simplified/>
    
    </>
  )
}

export default Homepage

