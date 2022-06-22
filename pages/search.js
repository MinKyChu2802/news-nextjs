import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import SearchMQ from '../components/search/Search';
import { CATEGORY, SORT_BY } from '../utils/data';
import Category from '../components/category/Category';
import Articles from '../components/news/articles/Articles';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ArrowBack from '../components/arrow-back/ArrowBack';
import DeleteIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Chip from '@mui/material/Chip';

const StyledSearchWrapper = styled.div`
  padding: 15px;
`;

const StyledHeaderSearch = styled.div`
  display: flex;
  align-items: center;
`;

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

const StyledResults = styled.div`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #041e2f;
  margin-top: 16px;
  margin-bottom: 16px;
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

const StyledSwipperDrawer = styled.div`
  background: #ffffff;
  backdrop-filter: blur(54.3656px);
  /* Note: backdrop-filter has minimal browser support */

  padding: 8px 15px 48px;
`;

const StyledBar = styled.div`
  width: 72px;
  height: 5px;
  background: #c5c5c5;
  border-radius: 100px;
  transform: matrix(1, 0, 0, -1, 0, 0);
  margin: 0 auto;
`;

const StyledSwipper = styled(SwipeableDrawer)`
  .MuiPaper-root {
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
  }
`;

const StyledFilter = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledResetButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #041e2f;
  border-radius: 16px;
  padding: 8px 16px;
  gap: 8px;
  cursor: pointer;

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;

    /* Font/Black */

    color: #041e2f;
  }

  .iconRemove {
    font-size: 18px;
    color: #041e2f;
  }
`;

const StyledSortWrapper = styled.div`
  margin-top: 20px;
`;

const StyledWrapperChip = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 8px;
`;

const StyledButton = styled.div`
  margin-top: 24px;
  background: linear-gradient(119.65deg, #ff3a44 0%, #ff8086 128.41%);
  border: 1px solid #ffb3b6;
  border-radius: 24px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  padding: 13px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Search() {
  const router = useRouter();

  const { query } = router;

  const [value, setValue] = useState('');
  const [categoryArr, setCategoryArr] = useState([]);
  const [open, setOpen] = useState(false);
  const [sorts, setSorts] = useState([]);

  useEffect(() => {
    setCategoryArr([{ category: 'Filter', id: 0, isActived: false }, ...CATEGORY]);
    setSorts(SORT_BY);
  }, []);

  return (
    <StyledSearchWrapper>
      <StyledSwipper
        anchor="bottom"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledSwipperDrawer>
          <StyledBar />

          <StyledFilter>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#041e2f' }}>Filter</div>

            <StyledResetButton>
              <DeleteIcon className="iconRemove" /> <span>Reset</span>
            </StyledResetButton>
          </StyledFilter>
          <StyledSortWrapper>
            <div styled={{ color: '#041E2F', fontSize: 16, fontWeight: 600 }}>Sort By</div>
            <StyledWrapperChip>
              {sorts.map((sort) => (
                <Chip label={sort.value} variant="outlined" key={sort.id} />
              ))}
            </StyledWrapperChip>
          </StyledSortWrapper>

          <StyledButton>Save</StyledButton>
        </StyledSwipperDrawer>
      </StyledSwipper>

      <StyledHeaderSearch>
        <ArrowBack />
        <SearchMQ value={value} setValue={setValue} isSearch />
      </StyledHeaderSearch>

      <StyledCategory>
        {categoryArr
          .filter((item) => item.id === 0)
          .map((item) => (
            <Category
              category={item.category}
              isActived={item.isActived}
              setCategory={setCategoryArr}
              id={item.id}
              key={item.id}
              isFilter
              openModal={() => setOpen(true)}
            >
              <FilterAltOutlinedIcon style={{ fontSize: 16 }} />
            </Category>
          ))}
        {categoryArr
          .filter((item) => item.id > 0)
          .map((item) => (
            <Category
              category={item.category}
              isActived={item.isActived}
              setCategory={setCategoryArr}
              id={item.id}
              key={item.id}
            />
          ))}
      </StyledCategory>

      <StyledResults>
        About 11,130,000 results for <span style={{ fontWeight: 600 }}>COVID New Variant.</span>
      </StyledResults>

      <div>
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
      </div>
    </StyledSearchWrapper>
  );
}

export default Search;
