import { styled } from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;
export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme["ebony"]};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`;
const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme["darkGreen"]};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme["darkGreen"]};

  &:focus {
    background: transparent;
    outline: none;
    border-bottom: 2px solid ${(props) => props.theme["darkGreen"]};
  }
  &::placeholder {
    color: ${(props) => props.theme["darkGreen"]};
  }
  &:hover {
    border-bottom: 2px solid ${(props) => props.theme["rufuous"]};
  }
`;
export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesAmount = styled(BaseInput)`
  width: 4rem;

  &::-webkit-inner-spin-button,
  -webkit-outer-spin-button {
    background-color: ${(props) => props.theme["darkGreen"]};
  }
`;

export const CountDownContainer = styled.div`
  display: flex;
  gap: 1rem;
  font-family: "Roboto Mono", monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme["white"]};
  span {
    background: ${(props) => props.theme["darkGreen"]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`;

export const TwoPoints = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme["ebony"]};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const StartCountDownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 0.5rem;
  cursor: pointer;
  background: ${(props) => props.theme["sinopia"]};
  color: ${(props) => props.theme["white"]};
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background: ${(props) => props.theme["rufuous"]};
  }
`;
