import { createMachine } from "xstate";

export const gifMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5RQJYDMCyBDAxgCxQDswA6ABywFdZIBiABQBkBBATQG0AGAXUVDID2sFABcUAwnxAAPRAEYATAHYSANgCsq5ZwAs6hVoUAOADQgAnvM0lO6uZp0BmJXICcO1ascBfb2dSYuATE5AA2WOZEUAzMAKoAygCiXLxIIILCYhJSsgj2OmpGTkruDgq6ZpYIRnIkOkZK6pyqTgquqkqcRr5+IIQCEHBSAdj4RGBSGaLikmm5ALSqlYjz6iSuG5tbWz69I0Hj5FQ0EJNC09lziDoKy9UqmroKN0aO7R06vv7oo8GkZOFIoQoGdMjMcogDKoSEZmgp1EYjC0OuodDo7q5ODZVE8Xm9PEpPj0gA */
  id: "gifMachine",
  schema: {
    events: {} as { type: "PLAY" } | { type: "PAUSE" },
  },
  initial: "paused",
  states: {
    paused: {
      on: {
        PLAY: {
          target: "playing",
        },
      },
    },

    playing: {
      on: {
        PAUSE: {
          target: "paused",
        },
      },
    },
  },
});
