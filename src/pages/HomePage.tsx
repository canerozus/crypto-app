import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { useGetCryptoByNameQuery } from "../store/cryptoApi";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { data, isFetching } = useGetCryptoByNameQuery();
  const res = data?.data;
  console.log(res);

  return (
    <>
      {isFetching ? (
        "Loading..."
      ) : (
        <Typography.Title level={2} className="heading">
          Global
          <Row>
            <Col span={12}>
              <Statistic
                title="Total Cryptocurrencies"
                value={res?.stats.total}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title="Total Exchanges"
                value={res?.stats.totalExchanges}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title="Total Market Cap"
                value={res && millify(res.stats.totalMarketCap)}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title="Total 24h Volume"
                value={res && millify(res.stats.total24hVolume)}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title="Total Markets"
                value={res && millify(res.stats.totalMarkets)}
              />
            </Col>
          </Row>
        </Typography.Title>
      )}
      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Typography.Title>
        <Typography.Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Typography.Title>
      </div>
    </>
  );
};

export default HomePage;
