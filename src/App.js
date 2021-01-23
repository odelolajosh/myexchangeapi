import { useEffect, useReducer, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import ErrorPage from './components/ErrorPage';
import LoadingPage from './components/LoadingPage';
import RecordList from './components/RecordList';
import usePagination from './hooks/usePagination';
import useSearch from './hooks/useSearch';

const RECORD_PER_PAGE = 20,
API_REQUEST_URL = 'https://api.enye.tech/v1/challenge/records';

const initialState = {
  loading: false,
  error: false,
  data: []
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'PagePending': return { ...state, loading: true, error: false }
    case 'PageError': return{ ...state, loading: false, error: true }
    case 'PageLoaded': return { ...state, loading: false, data: action.payload }
    default: return initialState
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [searchTerm, setSearchTerm] = useState('');
  const [data] = useSearch(state.data.profiles, searchTerm);
  const [page, setPage] = useState(1);
  const [pageData, pageNumbers] = usePagination(data, page, RECORD_PER_PAGE);
  

  const fetchData = async () => {
    try {
      dispatch({ type: 'PagePending' })
      const response = await fetch(API_REQUEST_URL);
      const data = await response.json();
      dispatch({ type: 'PageLoaded', payload: data.records })
    } catch (err) {
      dispatch({ type: 'PageError' })
    }
  }

  useEffect(() => {
    // fetch data
    fetchData();
  }, []);

  useEffect(() => {
    if (pageData.length === 0) {
      setPage(1)
    }
  }, [data])

  return (
    <AppWrapper>
      {
        state.error ? (
          <ErrorPage />
        ) : state.loading ? <LoadingPage /> : <RecordList data={pageData} page={page} pageNumbers={pageNumbers} navigateToPage={(num) => setPage(parseInt(num))} onSearch={(event) => setSearchTerm(event.target.value.trim())} />
      }
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
`

export default App;
