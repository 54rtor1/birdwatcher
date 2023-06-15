import { DataView } from 'primereact/dataview';
import Link from 'next/link';
import styles from './CardGrid.module.css';
import { Card, Col, Row, Button, Text, Spacer } from "@nextui-org/react";
import React, { useContext, useState } from 'react';
import { NewsContext } from '../contexts/NewsContext';
import { useRouter } from 'next/router';




const CardGrid = () => {
  const { newsData } = useContext(NewsContext);
  const [selectedItem, setSelectedItem] = useState(null);
  const router = useRouter();

  const handleItemClick = (item) => {
    setSelectedItem(item);
    router.push({
      pathname: `/CardDetails/${item.id}`,
      query: { item: JSON.stringify(item) },
    });
  };

  const itemTemplate = (item) => {
    return (
      <div className={`${styles.cardGridWrapper} p-col-12 p-sm-6 p-md-4 p-lg-3 p-3` }>
        <Card isHoverable variant="flat" css={{ w: "100%", h: "300px" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
                {item.author}
              </Text>
              <Text h3 css={{ fontFamily: 'Nunito, sans-serif', color: 'hsl(48, 33%, 94%)' }}>
                {item.title}
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0, bg: "light-grey"}} >
            <Card.Image
              src={`${item.image}`}
              objectFit="cover"
              width="100%"
              height="100%"
              alt={item.title}
              style={{ opacity: 0.9 }}
            />
          </Card.Body>
          <div className={styles.cardTitle}>{item.title}</div>
          <div className={styles.cardContent}>{item.content}</div>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#0f111466",
              borderTop: "$borderWeights$light solid $gray800",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Row>
                  <Col align="start">
                    <Text className="pt-1" color="#d1d1d1" size={12}>
                      posted on:
                    </Text>
                    <Text className="pt-1" color="#d1d1d1" size={12}>
                      {item.publish_date}
                    </Text>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row justify="flex-end">
                    <Button
                      flat
                      auto
                      rounded
                      css={{ color: "#94f9f0", bg: "#94f9f026" }}
                      key={item.id}
                      onClick={() => handleItemClick(item)}
                    >
                      <Text
                        className="text-center"
                        css={{
                          textGradient: "45deg, $yellow600 -20%, #F21B3F",
                        }}
                        size={12}
                        weight="bold"
                        transform="uppercase"
                      >
                        Read story
                      </Text>
                    </Button>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </div>
    );
  };


  return (
    <div className={styles.cardGridContainer}>
      <Spacer y={2} />
      <div className="title-container">
        <Text
          h1
          className="text-center"
          css={{
            textGradient: "45deg, $yellow600 -20%, #F21B3F",
          }}
          size={27}
        >
          The latest news on the bird world 🪶
        </Text>
      </div>
      <Spacer y={2} />
      <div className="grid-container-wrapper">
        <div className="grid-container">
          <DataView value={newsData} itemTemplate={itemTemplate} layout="grid" rows={8} paginator />
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
