import React, { useEffect, useState } from 'react';
import Notification from '../components/notification/Notification';
import Search from '../components/search/Search';
import styled from 'styled-components';
import LastestNews from '../components/news/latest-news/LastestNews';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Category from '../components/category/Category';
import Articles from '../components/news/articles/Articles';
import Navbar from '../components/navbar/Navbar';
import { CATEGORY } from '../utils/data';
import axios from 'axios';

const StyledMainPage = styled.div`
  padding: 0 15px;
`;

const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .MainPage-search {
    margin-right: 16px;
  }
`;

const StyledNewsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  overflow-x: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledHeaderNews = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledHeaderNewsTitle = styled.div`
  font-family: 'New York Small';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`;

const StyledHeaderNewsSeeAll = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;
  cursor: pointer;
  font-family: 'Nunito';
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;

  color: #0080ff;
  &:hover {
    text-decoration: underline;
  }

  .headerNewss-icon {
    font-size: 14px;
  }
`;

const StyledHeaderNewsSeeAllTitle = styled.div``;

const StyledCategory = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  overflow-x: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
  margin-bottom: 8px;
`;

const StyledArticles = styled.div``;

const StyledNavbar = styled.div`
  position: fixed;
  bottom: 70px;
  left: 43px;
  width: 80%;
`;

function MainPage() {
  const [value, setValue] = useState('');
  const [categoryArr, setCategoryArr] = useState([]);
  const [latestNews, setLastestNews] = useState([]);

  const getAllLastestNews = () => {
    const config = {
      method: 'get',
      url: 'https://newsapi.org/v2/everything?q="everything"&apiKey=7f03d4629f6f4b8ca436d93deaef2358',
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setLastestNews(response.data.articles);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    setCategoryArr(CATEGORY);
    getAllLastestNews();
  }, []);

  return (
    <StyledMainPage>
      <StyledHeaderWrapper>
        <Search value={value} setValue={setValue} className="MainPage-search" />
        <Notification notify={2} />
      </StyledHeaderWrapper>

      <StyledHeaderNews>
        <StyledHeaderNewsTitle>Latest News</StyledHeaderNewsTitle>
        <StyledHeaderNewsSeeAll>
          <StyledHeaderNewsSeeAllTitle>See all</StyledHeaderNewsSeeAllTitle>
          <ArrowForwardIosIcon className="headerNewss-icon" />
        </StyledHeaderNewsSeeAll>
      </StyledHeaderNews>

      <StyledNewsWrapper>
        {latestNews.map((item) => (
          <LastestNews
            author={item.author}
            title={item.title}
            description={item.description}
            url={item.url}
            urlToImage={item.urlToImage}
          />
        ))}
      </StyledNewsWrapper>

      <StyledCategory>
        {categoryArr.map((item) => (
          <Category
            category={item.category}
            isActived={item.isActived}
            setCategory={setCategoryArr}
            id={item.id}
            key={item.id}
          />
        ))}
      </StyledCategory>

      <StyledArticles>
        <Articles
          author="Claudia Assis"
          urlToImage="https://cleantechnica.com/files/2022/05/Red-Mach-E-City-Ford-Press-Photo.png"
          publishedAt="2022-06-14T16:50:21Z"
          title="Ford Issues Stop Sale on Mustang Mach-E, Recalls 50,000"
          url="https://cleantechnica.com/2022/06/14/ford-issues-stop-sale-on-mustang-mach-e-recalls-50000/"
        />
        <Articles
          author="Claudia Assis"
          urlToImage="https://cleantechnica.com/files/2022/05/Red-Mach-E-City-Ford-Press-Photo.png"
          publishedAt="2022-06-14T16:50:21Z"
          title="Ford Issues Stop Sale on Mustang Mach-E, Recalls 50,000"
          url="https://cleantechnica.com/2022/06/14/ford-issues-stop-sale-on-mustang-mach-e-recalls-50000/"
        />
        <Articles
          author="Claudia Assis"
          urlToImage="https://cleantechnica.com/files/2022/05/Red-Mach-E-City-Ford-Press-Photo.png"
          publishedAt="2022-06-14T16:50:21Z"
          title="Ford Issues Stop Sale on Mustang Mach-E, Recalls 50,000"
          url="https://cleantechnica.com/2022/06/14/ford-issues-stop-sale-on-mustang-mach-e-recalls-50000/"
        />
        <Articles
          author="Claudia Assis"
          urlToImage="https://cleantechnica.com/files/2022/05/Red-Mach-E-City-Ford-Press-Photo.png"
          publishedAt="2022-06-14T16:50:21Z"
          title="Ford Issues Stop Sale on Mustang Mach-E, Recalls 50,000"
          url="https://cleantechnica.com/2022/06/14/ford-issues-stop-sale-on-mustang-mach-e-recalls-50000/"
        />
        <Articles
          author="Claudia Assis"
          urlToImage="https://cleantechnica.com/files/2022/05/Red-Mach-E-City-Ford-Press-Photo.png"
          publishedAt="2022-06-14T16:50:21Z"
          title="Ford Issues Stop Sale on Mustang Mach-E, Recalls 50,000"
          url="https://cleantechnica.com/2022/06/14/ford-issues-stop-sale-on-mustang-mach-e-recalls-50000/"
        />
        <Articles
          author="Claudia Assis"
          urlToImage="https://cleantechnica.com/files/2022/05/Red-Mach-E-City-Ford-Press-Photo.png"
          publishedAt="2022-06-14T16:50:21Z"
          title="Ford Issues Stop Sale on Mustang Mach-E, Recalls 50,000"
          url="https://cleantechnica.com/2022/06/14/ford-issues-stop-sale-on-mustang-mach-e-recalls-50000/"
        />
      </StyledArticles>

      <StyledNavbar>
        <Navbar />
      </StyledNavbar>
    </StyledMainPage>
  );
}

export default MainPage;
