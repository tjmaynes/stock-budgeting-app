import React, { useState } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

interface Stock {
  ticker: string;
  price: number;
  percentage: number;
}

const TopStockRow = () => (
  <Row>
    <Col>Stock Ticker</Col>
    <Col>Stock Price</Col>
    <Col>Percentage of Porfolio</Col>
  </Row>
)

const StockRow: React.FunctionComponent<{ stock: Stock }> = ({ stock: { ticker, price, percentage } }) => (
  <Row>
    <Col>{ticker}</Col>
    <Col>{price}</Col>
    <Col>{percentage}</Col>
  </Row>
)

const EMPTY_STOCK_ROW: Stock = { ticker: "", price: 0.00, percentage: 0.0 };

const StockTable: React.FunctionComponent = () => {
  const [stocks, setStocks] = useState([EMPTY_STOCK_ROW]);
  const onAddRowClick = () => setStocks(prevStocks => [...prevStocks, EMPTY_STOCK_ROW]);
  // const onTickerNameGiven = (tickerName: String) => setStocks(prevStocks => );

  return (
    <Container>
      <TopStockRow />
      {stocks.map((stock, index) => <StockRow key={index} stock={stock} />)}
      <Row><Button onClick={onAddRowClick}>Add Row</Button></Row>
    </Container>
  )
}

const App = () => (
  <Container fluid>
    <header>
      Stock Budgeting App
    </header>

    <StockTable />

    <Stack gap={2} className="col-md-5 mx-auto">
      <Button variant="secondary">Save changes</Button>
      <Button variant="outline-secondary">Cancel</Button>
    </Stack>
  </Container>
);

export default App;
