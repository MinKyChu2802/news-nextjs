import React, { useEffect, useState } from 'react';
import Notification from '../components/notification/Notification';
import Search from '../components/search/Search';
import styled from 'styled-components';
import LastestNews from '../components/news/latest-news/LastestNews';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Category from '../components/category/Category';
import Articles from '../components/news/articles/Articles';

const StyledMainPage = styled.div`
  padding: 0 15px;
`;

const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
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

const StyledArticles = styled.div`

`

const categorys = [
  { category: 'Healthy', id: 1, isActived: false },
  { category: 'Technology', id: 2, isActived: false },
  { category: 'Finance', id: 3, isActived: false },
  { category: 'Arts', id: 4, isActived: false },
  { category: 'Sports', id: 5, isActived: false },
  { category: 'Society', id: 6, isActived: false },
  { category: 'Bank', id: 7, isActived: false },
  { category: 'Bitcoin', id: 8, isActived: false },
];

function MainPage() {
  const [value, setValue] = useState('');
  const [categoryArr, setCategoryArr] = useState([]);

  useEffect(() => {
    setCategoryArr(categorys);
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
        <LastestNews
          author="Jon Fingas"
          title="Sony would love if you bought its $3,700 Walkman for over-the-top audiophiles"
          urlToImage="https://s.yimg.com/os/creatr-uploaded-images/2022-06/f3e19fc0-eb4a-11ec-93b4-82f077703ebd"
          description="Are you the sort of music listener who'll happily pay more for a set of earphones than you would on a nice computer? If so, Sony has the MP3 players for you. The company has released two ultra-high-end Walkman MP3 players aimed squarely at audiophiles. The he…"
          url="https://www.engadget.com/sony-3700-walkman-mp3-players-200619566.html"
        />
        <LastestNews
          author="Jon Fingas"
          title="Sony would love if you bought its $3,700 Walkman for over-the-top audiophiles"
          urlToImage="https://s.yimg.com/os/creatr-uploaded-images/2022-06/f3e19fc0-eb4a-11ec-93b4-82f077703ebd"
          url="https://www.engadget.com/sony-3700-walkman-mp3-players-200619566.html"
          description="Are you the sort of music listener who'll happily pay more for a set of earphones than you would on a nice computer? If so, Sony has the MP3 players for you. The company has released two ultra-high-end Walkman MP3 players aimed squarely at audiophiles. The he…"
        />
        <LastestNews
          author="Jon Fingas"
          title="Sony would love if you bought its $3,700 Walkman for over-the-top audiophiles"
          urlToImage="https://s.yimg.com/os/creatr-uploaded-images/2022-06/f3e19fc0-eb4a-11ec-93b4-82f077703ebd"
          url="https://www.engadget.com/sony-3700-walkman-mp3-players-200619566.html"
          description="Are you the sort of music listener who'll happily pay more for a set of earphones than you would on a nice computer? If so, Sony has the MP3 players for you. The company has released two ultra-high-end Walkman MP3 players aimed squarely at audiophiles. The he…"
        />
        <LastestNews
          author="Jon Fingas"
          title="Sony would love if you bought its $3,700 Walkman for over-the-top audiophiles"
          urlToImage="https://s.yimg.com/os/creatr-uploaded-images/2022-06/f3e19fc0-eb4a-11ec-93b4-82f077703ebd"
          url="https://www.engadget.com/sony-3700-walkman-mp3-players-200619566.html"
          description="Are you the sort of music listener who'll happily pay more for a set of earphones than you would on a nice computer? If so, Sony has the MP3 players for you. The company has released two ultra-high-end Walkman MP3 players aimed squarely at audiophiles. The he…"
        />
        <LastestNews
          author="Jon Fingas"
          title="Sony would love if you bought its $3,700 Walkman for over-the-top audiophiles"
          urlToImage="https://s.yimg.com/os/creatr-uploaded-images/2022-06/f3e19fc0-eb4a-11ec-93b4-82f077703ebd"
          url="https://www.engadget.com/sony-3700-walkman-mp3-players-200619566.html"
          description="Are you the sort of music listener who'll happily pay more for a set of earphones than you would on a nice computer? If so, Sony has the MP3 players for you. The company has released two ultra-high-end Walkman MP3 players aimed squarely at audiophiles. The he…"
        />
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
        <Articles author="Claudia Assis" urlToImage="https://cleantechnica.com/files/2022/05/Red-Mach-E-City-Ford-Press-Photo.png"  publishedAt="2022-06-14T16:50:21Z" title="Ford Issues Stop Sale on Mustang Mach-E, Recalls 50,000" url="https://cleantechnica.com/2022/06/14/ford-issues-stop-sale-on-mustang-mach-e-recalls-50000/" />
        <Articles author="Claudia Assis" urlToImage="https://cleantechnica.com/files/2022/05/Red-Mach-E-City-Ford-Press-Photo.png"  publishedAt="2022-06-14T16:50:21Z" title="Ford Issues Stop Sale on Mustang Mach-E, Recalls 50,000" url="https://cleantechnica.com/2022/06/14/ford-issues-stop-sale-on-mustang-mach-e-recalls-50000/" />
        <Articles author="Claudia Assis" urlToImage="https://cleantechnica.com/files/2022/05/Red-Mach-E-City-Ford-Press-Photo.png"  publishedAt="2022-06-14T16:50:21Z" title="Ford Issues Stop Sale on Mustang Mach-E, Recalls 50,000" url="https://cleantechnica.com/2022/06/14/ford-issues-stop-sale-on-mustang-mach-e-recalls-50000/" />
        <Articles author="Claudia Assis" urlToImage="https://cleantechnica.com/files/2022/05/Red-Mach-E-City-Ford-Press-Photo.png"  publishedAt="2022-06-14T16:50:21Z" title="Ford Issues Stop Sale on Mustang Mach-E, Recalls 50,000" url="https://cleantechnica.com/2022/06/14/ford-issues-stop-sale-on-mustang-mach-e-recalls-50000/" />
        <Articles author="Claudia Assis" urlToImage="https://cleantechnica.com/files/2022/05/Red-Mach-E-City-Ford-Press-Photo.png"  publishedAt="2022-06-14T16:50:21Z" title="Ford Issues Stop Sale on Mustang Mach-E, Recalls 50,000" url="https://cleantechnica.com/2022/06/14/ford-issues-stop-sale-on-mustang-mach-e-recalls-50000/" />
        <Articles author="Claudia Assis" urlToImage="https://cleantechnica.com/files/2022/05/Red-Mach-E-City-Ford-Press-Photo.png"  publishedAt="2022-06-14T16:50:21Z" title="Ford Issues Stop Sale on Mustang Mach-E, Recalls 50,000" url="https://cleantechnica.com/2022/06/14/ford-issues-stop-sale-on-mustang-mach-e-recalls-50000/" />
      </StyledArticles>
    </StyledMainPage>
  );
}

export default MainPage;
