import { ThemeProvider } from "styled-components";
import "./App.css";
import { Button } from "./assets/components/Button/Button";
import { defaultTheme } from "./assets/styles/themes/default";
import { GlobalStyle } from "./assets/styles/global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="greenItaly">Hello, Friend</Button>
      <Button variant="redItaly">Hello, Friend</Button>
      <Button variant="whiteItaly" colorText="black">
        Hello, Friend
      </Button>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
