import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic, Card } from "antd";
import { useGetCryptoByNameQuery } from "../store/cryptoApi";
import { Link } from "react-router-dom";
import News from "./News";

const HomePage = () => {
  const { data, isFetching } = useGetCryptoByNameQuery();
  const res = data?.data;
  const Cryptos = data?.data.coins;
  const topTen = Cryptos?.slice(0, 10);

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
      {
        <Row gutter={[32, 32]} className="crypto-card-container">
          {topTen?.map((crypto) => (
            <Col
              xs={24}
              sm={12}
              lg={6}
              className="crypto-card"
              key={crypto.uuid}
            >
              <Link to={`/crypto/${crypto.uuid}`}>
                <Card
                  title={`${crypto.rank}. ${crypto.name}`}
                  extra={<img className="crypto-image" src={crypto.iconUrl} />}
                  hoverable={true}
                >
                  <p>Price: {millify(crypto.price)}</p>
                  <p>Market Cap: {millify(crypto.marketCap)}</p>
                  <p>Daily Change: {millify(crypto.change)}</p>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      }
      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">
          Latest Crypto News
        </Typography.Title>
        <Typography.Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Typography.Title>
      </div>
      <News simplified />
    </>
  );
};

export default HomePage;
