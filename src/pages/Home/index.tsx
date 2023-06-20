import { Play } from "phosphor-react";
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmount,
  StartCountDownButton,
  TaskInput,
  TwoPoints,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Working at </label>
          <TaskInput id="task" type="text" placeholder="Name your activity" />
          <label htmlFor="minutesAmount">for</label>
          <MinutesAmount type="number" id="minutesAmount" placeholder="00" />
          <span>minutes</span>
        </FormContainer>
        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <TwoPoints>:</TwoPoints>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>
        <StartCountDownButton type="submit">
          <Play size={24} />
          Start
        </StartCountDownButton>
      </form>
    </HomeContainer>
  );
}
