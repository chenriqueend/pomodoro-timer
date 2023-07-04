import { styled } from "styled-components";

export const HistoryContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme["white"]};

  h1 {
    padding-left: 1rem;
    font-size: 1.5rem;
    color: ${(props) => props.theme["secondary"]};
  }
`;
export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;
  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    th {
      background-color: ${(props) => props.theme["rufuous"]};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme["white"]};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }
    td {
      background-color: ${(props) => props.theme["khaki"]};
      border-top: 4px solid ${(props) => props.theme["linen"]};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;
    }
  }
`;
