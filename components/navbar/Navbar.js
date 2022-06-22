import React from 'react';
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import Icon from '../icon/Icon';

const StyledNavbarWrapper = styled.div`
  padding: 4px 40px 8px;
  gap: 20px;
  background: #ffffff;
  box-shadow: -2px 4px 4px rgba(140, 140, 140, 0.15);
  border-radius: 32px;
`;

const StyledBar = styled.div`
  width: 32px;
  height: 4px;
  background: #e0e0e0;
  border-radius: 8px;
  margin: 0 auto;
`;

const StyledIconWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navbar = () => {
  return (
    <StyledNavbarWrapper>
      <StyledBar />
      <StyledIconWrapper>
        <Icon icon={<HomeIcon />} title="Home" destination="/" />
        <Icon icon={<FavoriteIcon />} title="Favorite" destination="/favorite" />
        <Icon icon={<PersonIcon />} title="Profile" destination="/profile" />
      </StyledIconWrapper>
    </StyledNavbarWrapper>
  );
};

export default Navbar;
