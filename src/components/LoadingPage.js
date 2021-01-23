import styled from "styled-components";


const LoadingPage = () => (
    <LoadingWrapper>
        Loading...
    </LoadingWrapper>
);

const LoadingWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(3vmin + 10px)
`

export default LoadingPage;