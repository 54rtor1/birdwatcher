import React from 'react';
import { DataView } from 'primereact/dataview';
import Link from 'next/link';
import styles from './CardGrid.module.css';
import { Card, Col, Row, Button, Text, Spacer } from "@nextui-org/react";



const CardGrid = ({ news }) => {
  const itemTemplate = (item) => {
    return (
      <div className={`${styles.cardGridWrapper} p-col-12 p-sm-6 p-md-4 p-lg-3 p-3` }>
        <Card css={{ w: "100%", h: "300px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
        {item.author}
        </Text>
        <Text h3 color="white">
          {item.title}
        </Text>
        </Col>
     </Card.Header>
    <Card.Body css={{ p: 0, bg: "black"}} >
      <Card.Image
        src={`${item.image}`}
        objectFit="cover"
        width="100%"
        height="100%"
        alt={item.title}
        style={{ opacity: 0.8 }}
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
            <Col span={3}>
              <Card.Image
                src="https://nextui.org/images/breathing-app-icon.jpeg"
                css={{ bg: "black", br: "50%" }}
                height={40}
                width={40}
                alt="Breathing app icon"
              />
            </Col>
            <Col>
              <Text className="pt-1" color="#d1d1d1" size={12}>
                {item.publish_date}
              </Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Link href="/[id]" as={`/${item.id}`} passHref>
            <Button
              flat
              auto
              rounded
              css={{ color: "#94f9f0", bg: "#94f9f026" }}
            >
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Read story
              </Text>
            </Button>
        </Link>
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
      <Spacer y={1} />
      <div className="title-container">
        <Text h2   size={20}
        > 𓆝 𓆟 𓆞  The best cat news around the globe! /ᐠ - ˕ -マ</Text>
      </div>
      <Spacer y={1} />
      <div className="grid-container-wrapper">
        <div className="grid-container">
          <DataView value={news} itemTemplate={itemTemplate} layout="grid" rows={8} paginator />
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
