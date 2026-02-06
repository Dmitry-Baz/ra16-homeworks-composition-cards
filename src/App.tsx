import Card from "./components/Card";

const App = () => {
  return (
    <>
      {/* Карточка 1: Special title treatment */}
      <Card special>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Content>
          With supporting text below as a natural lead-in to additional content.
        </Card.Content>
        <Card.Button href="#">Go somewhere</Card.Button>
      </Card>

      {/* Карточка 2: с "Image cap" */}
      <Card>
        <Card.Image alt="Image cap" />
        <Card.Title>Card title</Card.Title>
        <Card.Content>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Content>
        <Card.Button href="#">Go somewhere</Card.Button>
      </Card>
    </>
  );
};

export default App;
