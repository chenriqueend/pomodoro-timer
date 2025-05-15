import { HistoryContainer, HistoryList } from "./styles";
import { usePomodoroHistory } from "../../PomodoroHistoryContext";

export function History() {
  const { tasks } = usePomodoroHistory();

  return (
    <HistoryContainer>
      <h1>My historic</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length === 0 ? (
              <tr>
                <td colSpan={4} style={{ textAlign: "center" }}>No tasks yet</td>
              </tr>
            ) : (
              tasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.name}</td>
                  <td>{task.minutes} minutes</td>
                  <td>{new Date(task.start).toLocaleString()}</td>
                  <td>{task.status === "finished" ? "Finished" : "Open"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
