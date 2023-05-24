import React from "react";
import { useGetNewsQuery } from "../store/cryptoNewsApi";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
interface Props {
  simplified: boolean;
}
const News: React.FC<Props> = ({ simplified }) => {
  const count = simplified ? 6 : 15;
  const { data, isFetching } = useGetNewsQuery([count]);
  console.log("🚀 ~ file: News.tsx:10 ~ data:", data);

  return (
    <Row gutter={[24, 24]}>
      {data?.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Typography.Title className="news-title" level={4}>
                  {news.name}
                </Typography.Title>
                <img src={news?.image.thumbnail.contentUrl} alt="news" />
              </div>
              <p>
                {news.description.length > 200
                  ? `${news.description.substring(0, 100)}..`
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={news.provider[0].image.thumbnail.contentUrl}
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
  );
};

export default News;
