import { useRouter } from 'next/router';
import { Row, Col, Text, Spacer, Card } from "@nextui-org/react";
import { NewsContext } from '../../contexts/NewsContext';
import React, { useContext } from 'react';



const CardDetails = () => {
  const router = useRouter();
  const { newsData } = useContext(NewsContext);
  const { id } = router.query;

  console.log(newsData);

  // Find the item with the matching id
  const item = newsData.find(item => item.id === id);

  if (!item) {
    // Handle case when item is not found
    return <div>Item not found</div>;
  }

  return (
    <div>
      <h1>Card Details</h1>
      <Row>
        <Col span={6}>
          <Text h2>{item.title}</Text>
        </Col>
        <Col span={6}>
          <img src={item.image} alt={item.title} />
        </Col>
      </Row>
      <Spacer y={1} />
      <Row>
        <Col span={12}>
          <Card>
            <Card.Body>
              <Text>{item.text}</Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CardDetails;
