import { Card, Col, Row } from "antd";
import React, { useState } from "react";
import { useGetCryptoByNameQuery } from "../store/cryptoApi";
import { Link } from "react-router-dom";
import millify from "millify";

const CryptoCurrencies = ({ simplified: unusedProp }) => {
  const { data, isFetching } = useGetCryptoByNameQuery();
  const [cryptos, setCryptos] = useState(data?.data.coins);
  console.log(cryptos);
  return (
    <>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((crypto) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={crypto.uuid}>
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
    </>
  );
};

export default CryptoCurrencies;
