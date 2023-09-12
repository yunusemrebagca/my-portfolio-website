"use client";

import styled from "styled-components";

export const ContainerStyle = styled.div<{ $mt?: string }>`
  max-width: 1000px;
  margin-inline: auto;
  margin-block: 3rem;
  margin-top: ${(props) => props.$mt};
  transition: all 300ms ease;
`;

export const Container = ({
  children,
  mt,
}: {
  children: React.ReactNode;
  mt?: string;
}) => {
  return <ContainerStyle $mt={mt}>{children}</ContainerStyle>;
};
