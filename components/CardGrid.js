import { Grid } from 'primereact/grid';
import { Card } from 'primereact/card';

const CardGrid = () => {

  const cardData = [
    { id: 1, title: 'Card 1', content: 'This is the content of Card 1' },
    { id: 2, title: 'Card 2', content: 'This is the content of Card 2' },
    { id: 3, title: 'Card 3', content: 'This is the content of Card 3' },
    // Add more card data as needed
  ];
  return (
    <Grid container>
      {cardData.map((card) => (
        <Grid item key={card.id} xs={12} sm={6} md={4} lg={3}>
          <Card title={card.title}>
            {card.content}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
