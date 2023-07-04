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
          <TaskInput
            id="task"
            list="task-suggestions"
            type="text"
            placeholder="Name your activity"
          />
          <datalist id="task-suggestions">
            <option value="task 01"></option>
            <option value="task 02"></option>
            <option value="task 03"></option>
            <option value="task 04"></option>
          </datalist>
          <label htmlFor="minutesAmount">for</label>
          <MinutesAmount
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />
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
