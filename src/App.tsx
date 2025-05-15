import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { PomodoroHistoryProvider } from "./PomodoroHistoryContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PomodoroHistoryProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PomodoroHistoryProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
