import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define the spin keyframe animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled components
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: grey;
  height: 100vh;
  font-family: Arial, sans-serif;
  font-size: 18px;
  color: #333;
`;

const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 2s linear infinite;
`;

const Loading = () => {
  return (
    <LoaderContainer>
      <Spinner />
      <p>Loading...</p>
    </LoaderContainer>
  );
};

export default Loading;
