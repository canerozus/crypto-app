import { Card, Col, Input, Row } from "antd";
import React, { useState, useEffect } from "react";
import { useGetCryptoByNameQuery } from "../store/cryptoApi";
import { Link } from "react-router-dom";
import millify from "millify";
interface Props {
  simplified: boolean;
}
const CryptoCurrencies: React.FC<Props> = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data, isFetching } = useGetCryptoByNameQuery([count]);
  const cryptos = data?.data.coins;
  const [searchCrypto, setSearchCrypto] = useState(cryptos);
  const [searchTerms, setSearchTerms] = useState("");

  useEffect(() => {
    const filteredData = cryptos?.filter((coin: any) =>
      coin.name.toLowerCase().includes(searchTerms.toLowerCase())
    );
    setSearchCrypto(filteredData);
  }, [cryptos, searchTerms]);

  return (
    <>
      {isFetching ? (
        "Loading"
      ) : (
        <div>
          {!simplified && (
            <div className="search-crypto">
              <Input
                placeholder="Search Cryptocurrency"
                onChange={(e) => setSearchTerms(e.target.value)}
              />
            </div>
          )}
          <Row gutter={[32, 32]} className="crypto-card-container">
            {searchCrypto?.map((crypto) => (
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
                    extra={
                      <img className="crypto-image" src={crypto.iconUrl} />
                    }
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
        </div>
      )}
    </>
  );
};

export default CryptoCurrencies;
