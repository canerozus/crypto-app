import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Select, Typography } from "antd";

const CryptoDetails = () => {
  const [timePeriod, setTimePeriod] = useState('7d');
  const { id } = useParams();
  console.log(id);
  return <div>CurrencyId : {id} </div>;
};

export default CryptoDetails;
