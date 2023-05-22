import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { useGetCryptoByNameQuery } from "../store/cryptoApi";
interface Props {
  response?: Array<any>;
}
const HomePage: React.FC<Props> = ({ response }) => {
  const { data, isFetching } = useGetCryptoByNameQuery();
  const res = data?.data;
  console.log(res);
  return (
    <>
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
              value={res?.stats.totalMarketCap}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total 24h Volume"
              value={res?.stats.total24hVolume}
            />
          </Col>
          <Col span={12}>
            <Statistic title="Total Markets" value={res?.stats.totalMarkets} />
          </Col>
        </Row>
      </Typography.Title>
    </>
  );
};

export default HomePage;
