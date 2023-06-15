import { useRouter } from 'next/router';
import { Row, Col, Text, Spacer, Card } from "@nextui-org/react";



const CardDetails = () => {
  const router = useRouter();
  const { item } = router.query;
  const selectedItem = JSON.parse(item);

  console.log(selectedItem)


  return (
    <div>
      <h1>Card Details</h1>
      {/* <Row>
        <Col span={6}>
          <Text h2>{selectedItem.title}</Text>
        </Col>
        <Col span={6}>
          <img src={selectedItem.image} alt={selectedItem.title} />
        </Col>
      </Row>
      <Spacer y={1} />
      <Row>
        <Col span={12}>
          <Card>
            <Card.Body>
              <Text>{selectedItem.text}</Text>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}
    </div>
  );
};

export default CardDetails;
