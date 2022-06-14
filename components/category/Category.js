import React from 'react';
import styled from 'styled-components';

const StyledCategory = styled.div`
  background: #ffffff;
  border: 1px solid #f0f1fa;
  border-radius: 16px;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #2e0505;
  padding: 8px 16px;
  gap: 8px;

  &:hover,
  &:focus,
  &:active {
    background: linear-gradient(119.65deg, #ff3a44 0%, #ff8086 128.41%);
    border: 1px solid #ffb3b6;
    color: #fff;
  }

  &.isActive {
    background: linear-gradient(119.65deg, #ff3a44 0%, #ff8086 128.41%);
    border: 1px solid #ffb3b6;
    color: #fff;
  }
`;

const Category = (props) => {
  const { category, isActive, handleClick } = props;

  return (
    <StyledCategory className={`${isActive ? 'isActive' : ''}`} onClick={() => handleClick()}>
      {category}
    </StyledCategory>
  );
};

export default Category;
