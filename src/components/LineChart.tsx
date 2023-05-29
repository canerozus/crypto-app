import React from "react";
import { Col, Row, Typography } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
interface Props {
  coinHistory: any;
  currentPrice: string;
  coinName: string;
}

const Linechart: React.FC<Props> = ({
  coinHistory,
  currentPrice,
  coinName,
}) => {
  // const coinPrice: any = [];
  // const coinTimestamp = [];
  // for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
  //   coinPrice.push(coinHistory?.data?.history[i].price);
  // }

  // for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
  //   coinTimestamp.push(
  //     new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
  //   );
  // }
  // const chartData = coinTimestamp.map((timestamp, index) => ({
  //   label: timestamp,
  //   data: [coinPrice[index]], // coinPrice[index]'i bir diziye dönüştürdük
  // }));

  return (
    <>
      <Row className="chart-header">
        <Col className="price-container">
          <Typography.Title level={5} className="price-change">
            Change: {coinHistory?.data?.change}%
          </Typography.Title>
          <Typography.Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Typography.Title>
        </Col>
      </Row>

    </>
  );
};

export default Linechart;
