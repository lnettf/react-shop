import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStyle = styled(Link)`
  text-decoration: none;
`;

export const CartStyles = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
`;

export const CounterStyles = styled.span`
  font-size: 20px;
  color: #7f7f7f;
  text-decoration: none;
`;
