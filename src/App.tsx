import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

interface Stock {
  ticker: string;
  price: number;
  percentage: number;
}

const TopStockRow = () => (
  <Row>
    <Col>Stock Ticker</Col>
    <Col>Price</Col>
    <Col>Percentage</Col>
  </Row>
)

const StockRow: React.FunctionComponent<{stock: Stock}> = ({stock: {ticker, price, percentage}}) => (
  <Row>
    <Col>{ticker}</Col>
    <Col>{price}</Col>
    <Col>{percentage}</Col>
  </Row>
)

const StockTable: React.FunctionComponent<{ stocks: Stock[]}> = ({ stocks }) => (
  <Container>
    <TopStockRow />
    {stocks.map((stock, index) => <StockRow stock={stock} /> )}
  </Container>
)

const App = () => (
  <Container fluid>
    <header>
      Stock Budgeting App
    </header>
    <StockTable stocks={[
      { ticker: "TSLA", price: 800.00, percentage: 100.00 }
    ]} />
  </Container>
);

export default App;
