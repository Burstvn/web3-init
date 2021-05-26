import React from "react";
import { Collapse, Row, Col, Card, Button, Input } from "antd";
import styled from "styled-components";
const { Panel } = Collapse;

export default function FarmCard({ farm, index }) {
  const Header = () => {
    return (
      <Row align="center">
        <Col span={12} align="left" style={{ paddingLeft: "50px" }}>
          <img src="/assets/farm/pig.png" alt="logo" width="50px" />
          <b>BTC - PIG</b>
        </Col>
        <Col
          span={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <b style={{ marginRight: "20px" }}>EARN : 122,324 PIG</b>
          <b>APY : 124 %</b>
        </Col>
      </Row>
    );
  };
  return (
    <StyleCardHeader>
      <Collapse>
        <Panel header={<Header />} showArrow={false}>
          <Row justify="center">
            <Card
              size="small"
              style={{
                width: 300,
                margin: "10px",
                padding: "20px"
              }}
            >
              <div className="harvest">
                <h4>PIG EARNED</h4>
                <b>10</b>
              </div>
              <Button type="primary">Harvest</Button>
            </Card>
            <Card size="small" style={{ width: 300, margin: "10px", padding: "20px"}}>
              <Row>
                <Col>
                  <Input />
                  <Button type="primary">Deposit</Button>
                  <Button>Approve</Button>
                </Col>
              </Row>
            </Card>
          </Row>
          <Row justify="center" style={{ width: "100%", margin: "40px 0 0" }}>
            <Col span={8} align="left" style={{ paddingRight: "40px" }}>
              <b>Multiplier</b>
            </Col>
            <Col span={8} align="right" style={{ paddingLeft: "40px" }}>
              <b>X10</b>
            </Col>
          </Row>
          <Row justify="center" style={{ width: "100%", margin: "40px 0 0" }}>
            <Col span={8} align="left" style={{ paddingRight: "40px" }}>
              <b>Liquidity</b>
            </Col>
            <Col span={8} align="right" style={{ paddingLeft: "40px" }}>
              <b>$123,456.34</b>
            </Col>
          </Row>
        </Panel>
      </Collapse>
    </StyleCardHeader>
  );
}

const StyleCardHeader = styled.div`
  .ant-card-body {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
