import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body-color);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    tr {
      border-radius: 0.25rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background-color: var(--shape);
      color: var(--text-body);
      

      &:first-child {
        color: var(--text-title);
      }

      &.withdraw {
        color: var(--red);
      }
      &.deposit {
        color: var(--green);
      }

      button {
        border: 0;
        background-color: transparent;
        float: right;
        position: relative;
        top: 0.25rem;
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.5);
        }
      }
    }

    @media(max-width: 769px) {
      th {
        display: none;        
      }

      td {
        display: block;
        width: 100%;   
      &:before {
        content: attr(data-title);
        text-transform: uppercase;
        color: var(--text-body);
        margin-right: 0.5rem;
      }
        button {
          bottom: 1rem;
          left: 1rem;
          top: auto;
        }
      }
    }
  }
`;