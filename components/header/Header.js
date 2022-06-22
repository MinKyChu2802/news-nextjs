import React, { useEffect } from 'react';
import styled from 'styled-components';
import MQ from '../../assets/MQ-logo.jpeg';
import Image from 'next/image';
import { useRouter } from 'next/router';

const StyledHeader = styled.div`
  background: #000;
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 9999999999;
  min-width: 100vw;
  width: 100%;
  margin-bottom: 2rem;
`;

function Header() {
  const router = useRouter();

  return (
    <StyledHeader onClick={() => router.push('/')}>
      <Image src={MQ} alt="" width={80} height={80} />
    </StyledHeader>
  );
}

export default Header;
