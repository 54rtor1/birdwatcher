import { useRouter } from 'next/router';
import { Row, Col, Text, Spacer, Card, Image, Link, Button } from "@nextui-org/react";


const CardDetails = () => {
  const router = useRouter();
  const { item } = router.query;
  const selectedItem = JSON.parse(item);

  console.log(selectedItem)


  return (
    <div className="m-5">
      <Row>
        <Col span={4}>
        <Spacer y={1} />
          <Text h1 size="40px" className="p-4" color="hsl(48, 33%, 94%)" weight="light">{selectedItem.title}</Text>
          <Text h3 transform="uppercase" weight="black" className="p-4 vertical-align-bottom" color="hsl(48, 33%, 94%)">BY {selectedItem.author}</Text>
          <Spacer y={1} />
        </Col>
        <Col span={8}>
        <Spacer y={1} />
        <Image
          src={selectedItem.image}
          alt={selectedItem.title}
          objectFit="cover"
          height={400}
          css={{
            borderRadius: "10px",
          }}
          />
          <Spacer y={1} />
        </Col>
      </Row>
      <Spacer y={1} />
      <Row>
        <Col span={12}>
          <Card>
            <Card.Body css={{
            backgroundColor: "hsl(48, 33%, 94%)",
          }}>
              <Text style={{ fontFamily: 'Bitter'}}className="p-6 m-4 text-justify line-height-3">{selectedItem.text}</Text>
              <Link className="p-6 mx-4" isExternal block href={selectedItem.url}>
               Source
               </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Spacer y={1} />
      <Link href='/'>
      <Button color="hsl(48, 33%, 94%)" auto>
          <Text>Return 𓅪</Text>
        </Button>
      </Link>
    </div>
  );
};

export default CardDetails;
