"use client";

import styled from "styled-components";

export const ContainerStyle = styled.div`
  max-width: 1000px;
  margin-inline: auto;
  margin-block: 3rem;
  transition: all 300ms ease;
`;

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};
