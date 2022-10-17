import Card from "./components/Card";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container
      style={{ background: "yellow" }}
      className="text-center mt-4 p-4 rounded-5"
    >
      <Header />
      <Card />
    </Container>
  );
}

export default App;
