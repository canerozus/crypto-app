import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Select, Typography } from "antd";
import {
  useGetCryptoByIdQuery,
  useGetCryptoHistoryQuery,
} from "../store/cryptoApi";
import {
  CheckOutlined,
  DollarCircleOutlined,
  ExclamationCircleOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  NumberOutlined,
  StopOutlined,
  ThunderboltOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import Linechart from "../components/LineChart";

const CryptoDetails = () => {
  const [timePeriod, setTimePeriod] = useState("7d");
  const { id } = useParams();
  const { data, isFetching } = useGetCryptoByIdQuery([id!]);
  const { data: coinHistory } = useGetCryptoHistoryQuery([id!]);
  console.log("🚀 ~ file: CryptoDetails.tsx:29 ~ CryptoDetails ~ coinHistory:", coinHistory)
  const cryptoDetails = data?.data?.coin;

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    {
      title: "24h Volume",
      value: `$ ${
        cryptoDetails &&
        cryptoDetails["24hVolume"] &&
        millify(cryptoDetails["24hVolume"])
      }`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  return (
    <Col className="coin-detail-container">
      <Col className="coin-heading-container">
        <Typography.Title level={2} className="coin-name">
          {cryptoDetails?.name} ({cryptoDetails?.symbol}) Price
        </Typography.Title>
        <p>
          {cryptoDetails?.name} live price in USD. View value statistics, market
          cap and supply.
        </p>
      </Col>
      
      <Linechart
        coinHistory={coinHistory}
        currentPrice={millify(cryptoDetails?.price)}
        coinName={cryptoDetails?.name}
      />
      <Col className="stats-container">
        <Col className="coin-value-statistics">
          <Col className="coin-value-statistics-heading">
            <Typography.Title level={3} className="coin-details-heading">
              {cryptoDetails?.name} Value Statistics
            </Typography.Title>
            <p>An overview showing the stats of {cryptoDetails?.name}</p>
          </Col>
          {stats.map((obj) => (
            <Col className="coin-stats">
              <Col className="coin-stats-name">
                <Typography.Text>{obj.icon}</Typography.Text>
                <Typography.Text>{obj.title}</Typography.Text>
              </Col>
              <Typography.Text className="stats">{obj.value}</Typography.Text>
            </Col>
          ))}
        </Col>
        <Col className="coin-value-statistics">
          <Col className="coin-value-statistics-heading">
            <Typography.Title
              level={3}
              className="coin-details-heading"
              style={{ textAlign: "center" }}
            >
              Other Statistics
            </Typography.Title>
            <p>An overview showing the stats of all cryptocurrencies</p>
          </Col>
          {genericStats.map((obj) => (
            <Col className="coin-stats">
              <Col className="coin-stats-name">
                <Typography.Text>{obj.icon}</Typography.Text>
                <Typography.Text>{obj.title}</Typography.Text>
              </Col>
              <Typography.Text className="stats">{obj.value}</Typography.Text>
            </Col>
          ))}
        </Col>
      </Col>
      <Col className="coin-desc-link">
        <Row className="coin-desc">
          <Typography.Title level={3} className="coin-details-heading">
            What is {cryptoDetails?.name} <br />
            <br />
          </Typography.Title>
          <Typography.Title level={4}>
            {cryptoDetails?.description &&
              HTMLReactParser(cryptoDetails.description)}
          </Typography.Title>
        </Row>
        <Col className="coin-links">
          <Typography.Title level={3} className="coin-details-heading">
            {cryptoDetails?.name} Links
          </Typography.Title>
          {cryptoDetails?.links.map((link: any) => (
            <Row className="coin-link" key={link.name}>
              <Typography.Title level={5} className="link-name">
                {link.type}
              </Typography.Title>
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.name}
              </a>
            </Row>
          ))}
        </Col>
      </Col>
    </Col>
  );
};

export default CryptoDetails;
