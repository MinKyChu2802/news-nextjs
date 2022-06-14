import React from 'react'
import styled from 'styled-components';
import moment from 'moment';


const StyledArticlesWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
padding: 8px;
gap: 10px;
min-width: 345px;
min-height: 128px;
background: linear-gradient(180deg, rgba(98, 98, 98, 0.35) 50%, #000000 100%), url(${(props) => props.url});
background-repeat: no-repeat;
background-size: cover;
min-width: 321px;
border-radius: 8px;
margin-top:8px;
cursor: pointer;
`

const StyledArticlesTitle = styled.div`
font-family: 'New York Small';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 21px;
color: #FFFFFF;`

const StyledArticlesContent = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;

`

const StyledAuthor = styled.div`
font-family: 'Nunito';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 21px;
color: #fff;
`

const StyledPublicDate = styled.div`
font-family: 'Nunito';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 21px;
/* identical to box height, or 173% */

text-align: right;

color: #FFFFFF;
`

const Articles = (props) => {
    const { author, title, publishedAt, urlToImage,url } = props

    return (
        <StyledArticlesWrapper url={urlToImage} onClick={() =>
            window.open(
              url,
              '_blank' // <- This is what makes it open in a new window.
            )
          }>
            <StyledArticlesTitle>{title}</StyledArticlesTitle>
            <StyledArticlesContent>
                <StyledAuthor>{author}</StyledAuthor>
                <StyledPublicDate>{ moment(publishedAt).format('dddd, DD MMM YYYY') }</StyledPublicDate>

            </StyledArticlesContent>
        </StyledArticlesWrapper>
    )
}

export default Articles