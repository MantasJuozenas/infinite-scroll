import React, { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { Container } from './MainPage.styled';
import { getApiCall } from '../../api/getPexels';

function MainPage() {
  const [pexelsData, setPexelsData] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getApi = async (page, per_page) => {
    setLoading(true);
    const data = await getApiCall(page, per_page);
    if (pexelsData.photos) {
      const newData = Object.assign({}, pexelsData);
      newData?.photos?.push(...data.photos);
      setPexelsData(newData);
      setLoading(false);
    } else {
      setPexelsData(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getApi(page, page !== 1 ? 9 : 12);
  }, [page]);

  const handleScroll = () => {
    if (document.documentElement.scrollHeight - (window.innerHeight + window.pageYOffset) <= 0)
      setPage(page + 1);
  };

  useEffect(() => {
    if (!loading) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  console.log(pexelsData);

  return (
    <Container data-testid="MainPage">
      <ItemList data={pexelsData} loading={loading} />
    </Container>
  );
}

export default MainPage;
