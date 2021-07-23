import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { FlagNum, FlagStat, StatDiv, RowDiv} from "../Stats/stats.styles";

export default function Stats({ stats }) {
  const listItems = stats.map((flag) => (
    <StatDiv>
      <FlagNum>{flag[0]}</FlagNum>
      <FlagStat>{flag[1]}</FlagStat>
    </StatDiv>
  ));
  return (
    <RowDiv>
      {listItems}
    </RowDiv>
  );
}
