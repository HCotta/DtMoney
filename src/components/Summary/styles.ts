import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7rem;
`;

export const Content = styled.div`
  background-color: var(--shape);
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: var(--text-title);

  header {
    display:flex;
    align-items: center;
    justify-content: space-between;      

  }
  
  &.temp {
    background-color: var(--green);
    color: #fff;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
  }

  
`;