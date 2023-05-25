import React, { useState } from "react";
import { useGetNewsQuery } from "../store/cryptoNewsApi";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoByNameQuery } from "../store/cryptoApi";
interface Props {
  simplified: boolean;
}
const News: React.FC<Props> = ({ simplified }) => {
  const count = simplified ? 6 : 30;
  const { data: Crypto } = useGetCryptoByNameQuery([100]);
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data, isFetching } = useGetNewsQuery({ count, newsCategory });
  const defaultImage =
    "https://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

  return (
    <>
      {isFetching ? (
        "Loading..."
      ) : (
        <Row gutter={[24, 24]}>
          {!simplified && (
            <Col span={24}>
              <Select
                showSearch
                className="select-news"
                placeholder="Select a Crypto"
                optionFilterProp="children"
                onChange={(value) => setNewsCategory(value)}
                filterOption={(input, option) => {
                  const label = option?.label;
                  if (typeof label === "string") {
                    return label.toLowerCase().includes(input.toLowerCase());
                  }
                  return false;
                }}
              >
                <Select.Option value="Cryptocurency">
                  Cryptocurrency
                </Select.Option>
                {Crypto?.data?.coins?.map((currency: any) => (
                  <Select.Option value={currency.name}>
                    {currency.name}
                  </Select.Option>
                ))}
              </Select>
            </Col>
          )}
          {data?.value.map((news, i) => (
            <Col xs={24} sm={12} lg={8} key={i}>
              <Card hoverable className="news-card">
                <a href={news.url} target="_blank" rel="noreferrer">
                  <div className="news-image-container">
                    <Typography.Title className="news-title" level={4}>
                      {news.name}
                    </Typography.Title>
                    <img
                      style={{ maxHeight: "100px", maxWidth: "100px" }}
                      src={news?.image?.thumbnail?.contentUrl || defaultImage}
                      alt="news"
                    />
                  </div>
                  <p>
                    {news.description.length > 200
                      ? `${news.description.substring(0, 100)}..`
                      : news.description}
                  </p>
                  <div className="provider-container">
                    <div>
                      <Avatar
                        src={
                          news?.provider[0]?.image?.thumbnail?.contentUrl ||
                          "clientsrcassetsimages.png"
                        }
                        alt="news"
                      />
                      <Typography.Text className="provider-name">
                        {news.provider[0].name}
                      </Typography.Text>
                    </div>
                    <Typography.Text>
                      {moment(news.datePublished).startOf("seconds").fromNow()}
                    </Typography.Text>
                  </div>
                </a>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default News;
