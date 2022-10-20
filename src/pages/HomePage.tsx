import React, { useEffect } from "react";
import DetailsPreview from "../components/home";
import { useGlobalState } from "../hooks/useGlobalState";
import styled from "styled-components";

const HomeWrapper = styled.div``;

export const HomePage: React.FC = () => {
  const [, setLoading] = useGlobalState("loading");

  useEffect(() => setLoading(false));
  return (
    <HomeWrapper>
      <DetailsPreview />
    </HomeWrapper>
  );
};
