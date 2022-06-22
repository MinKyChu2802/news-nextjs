import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const StyledIconWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.active {
  }
`;

const StyledIcon = styled.div`
  color: #a6a6a6;
  border-radius: 0.5px;
  &.active {
    color: #ff8086;
  }
`;

const StyledTitle = styled.div`
  color: #a6a6a6;

  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  &.active {
    color: #2e0505;
  }
`;

const Icon = (props) => {
  const { icon, title, destination } = props;

  const router = useRouter();

  return (
    <Link href={destination}>
      <StyledIconWraper>
        <StyledIcon className={`${router.pathname === destination ? 'active' : ''} `}>{icon}</StyledIcon>
        <StyledTitle className={`${router.pathname === destination ? 'active' : ''} `}>{title}</StyledTitle>
      </StyledIconWraper>
    </Link>
  );
};

export default Icon;
