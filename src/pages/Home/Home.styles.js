import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
`;

const Card = styled.div`
  display: flex;
  height: 300px;
  width: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: solid 1px #f7f7f7;
  padding: 12px 12px;
`;

const CardTitle = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const CardImage = styled.img`
  width: 150px;
  height: 180px;
  object-fit: contain;
`;

const CardOptions = styled.div`
  display: flex;
  gap: 12px;
`;

export const HomeStyles = {
  Container,
  CardImage,
  CardOptions,
  CardTitle,
  Card,
};
