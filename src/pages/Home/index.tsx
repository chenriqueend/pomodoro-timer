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
import { useState, useRef, useEffect } from "react";
import { usePomodoroHistory } from "../../PomodoroHistoryContext";
import { v4 as uuidv4 } from "uuid";

export function Home() {
  const [isRunning, setIsRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [task, setTask] = useState("");
  const [minutes, setMinutes] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { addTask, finishTask } = usePomodoroHistory();
  const [currentTaskId, setCurrentTaskId] = useState<string | null>(null);

  function handleStart(event: React.FormEvent) {
    event.preventDefault();
    if (!task || minutes < 5) return;
    const id = uuidv4();
    setSecondsLeft(minutes * 60);
    setIsRunning(true);
    setCurrentTaskId(id);
    addTask({
      id,
      name: task,
      minutes,
      start: new Date(),
      status: "open",
    });
  }

  useEffect(() => {
    if (isRunning && secondsLeft > 0) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0 && isRunning) {
      setIsRunning(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (currentTaskId) finishTask(currentTaskId);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, secondsLeft, currentTaskId, addTask, finishTask]);

  function handleTaskChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTask(e.target.value);
  }

  function handleMinutesChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMinutes(Number(e.target.value));
  }

  const minutesDisplay = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const secondsDisplay = String(secondsLeft % 60).padStart(2, "0");

  return (
    <HomeContainer>
      <form action="" onSubmit={handleStart}>
        <FormContainer>
          <label htmlFor="task">Working at </label>
          <TaskInput
            id="task"
            list="task-suggestions"
            type="text"
            placeholder="Name your activity"
            value={task}
            onChange={handleTaskChange}
            disabled={isRunning}
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
            value={minutes}
            onChange={handleMinutesChange}
            disabled={isRunning}
          />
          <span>minutes</span>
        </FormContainer>
        <CountDownContainer>
          <span>{minutesDisplay[0]}</span>
          <span>{minutesDisplay[1]}</span>
          <TwoPoints>:</TwoPoints>
          <span>{secondsDisplay[0]}</span>
          <span>{secondsDisplay[1]}</span>
        </CountDownContainer>
        <StartCountDownButton type="submit" disabled={isRunning || !task || minutes < 5}>
          <Play size={24} />
          Start
        </StartCountDownButton>
      </form>
    </HomeContainer>
  );
}
