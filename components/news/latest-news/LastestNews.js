import React from 'react';
import styled from 'styled-components';

const StyledNews = styled.div`
  background: linear-gradient(180deg, rgba(98, 98, 98, 0.35) 50%, #000000 100%), url(${(props) => props.urlToImage});
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 321px;
  height: 224px;
  border-radius: 8px;
  padding: 80px 8px 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-right: 8px;
  cursor: pointer;
`;

const StyledTitleWrapperr = styled.div``;

const StyledAuthor = styled.div`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 800;
  font-size: 10px;
  line-height: 14px;
  color: #ffffff;
`;

const StyledTitle = styled.div`
  font-family: 'New York Small';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;
`;

const StyledDescription = styled.div`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: #ffffff;
`;

const LastestNews = (props) => {
  const { title, urlToImage, description, author, url } = props;

  return (
    <StyledNews
      urlToImage={urlToImage}
      onClick={() =>
        window.open(
          url,
          '_blank' // <- This is what makes it open in a new window.
        )
      }
    >
      <StyledTitleWrapperr>
        <StyledAuthor>by {author}</StyledAuthor>
        <StyledTitle>{title}</StyledTitle>
      </StyledTitleWrapperr>
      <StyledDescription>{description}</StyledDescription>
    </StyledNews>
  );
};

export default LastestNews;
