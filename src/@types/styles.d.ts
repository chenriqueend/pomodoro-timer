import "styled-components";
import { defaultTheme } from "../styles/themes/default";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  export type defaultTheme = ThemeType;
}

declare module "pomodoro" {
  export interface PomodoroTask {
    id: string;
    name: string;
    minutes: number;
    start: Date;
    status: "finished" | "open";
  }
}
