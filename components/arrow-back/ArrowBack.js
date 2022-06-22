import React from 'react';
import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useRouter } from 'next/router';

const StyledArrowBack = styled.div`
  width: 52px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(245, 245, 245, 1);
  background-blend-mode: luminosity;
  backdrop-filter: blur(81.5485px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;
  margin-right: 20px;

  .arrowIcon {
    font-size: 20px;
  }
`;

const ArrowBack = () => {
  const router = useRouter();

  return (
    <StyledArrowBack onClick={() => router.back()}>
      <ArrowBackIosNewIcon className="arrowIcon" />
    </StyledArrowBack>
  );
};

export default ArrowBack;
