import { createContext, useContext, useState } from "react";

interface PomodoroTask {
  id: string;
  name: string;
  minutes: number;
  start: Date;
  status: "finished" | "open";
}

interface PomodoroHistoryContextType {
  tasks: PomodoroTask[];
  addTask: (task: PomodoroTask) => void;
  finishTask: (id: string) => void;
}

const PomodoroHistoryContext = createContext<PomodoroHistoryContextType | undefined>(undefined);

export function PomodoroHistoryProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<PomodoroTask[]>([]);

  function addTask(task: PomodoroTask) {
    setTasks((prev) => [task, ...prev]);
  }

  function finishTask(id: string) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: "finished" } : task
      )
    );
  }

  return (
    <PomodoroHistoryContext.Provider value={{ tasks, addTask, finishTask }}>
      {children}
    </PomodoroHistoryContext.Provider>
  );
}

export function usePomodoroHistory() {
  const context = useContext(PomodoroHistoryContext);
  if (!context) throw new Error("usePomodoroHistory must be used within PomodoroHistoryProvider");
  return context;
} 