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
  const { category, isActived, setCategory,id } = props;

  const handleClick = (e) => {
    e.preventDefault();
    setCategory((prev)=>{
      let newCategory = [...prev];
      let index = newCategory.findIndex((item) => item.id === id);
      newCategory[index].isActived = !isActived;
      return [...newCategory]
    })
    
  }

  return (
    <StyledCategory className={`${isActived ? 'isActive' : ''}`} onClick={(e) => handleClick(e)}>
      {category}
    </StyledCategory>
  );
};

export default Category;
