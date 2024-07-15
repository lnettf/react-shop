import styled from "styled-components";

export const ProductDetailStyles = styled.div`
  display: flex;
`;

export const ProductDetailLeftStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
`;
export const ProductDetailDescriptionStyles = styled.div`
  width: 100%;
`;

export const ProductDetailRightStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  padding-left: 10%;
  padding-right: 10%;
  width: 50%;
  gap: 20px;
  h1,
  p,
  h3 {
    margin: 0px;
  }
`;
