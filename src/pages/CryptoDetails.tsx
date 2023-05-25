import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Select, Typography } from "antd";
import { useGetCryptoByIdQuery } from "../store/cryptoApi";
const CryptoDetails = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetCryptoByIdQuery([id!]);
  const [timePeriod, setTimePeriod] = useState("7d");
  return <div>CurrencyId : {id} </div>;
};

export default CryptoDetails;
