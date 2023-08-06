/// <reference types="react-scripts" />
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_MSW_MOCK: "mock" | "realApi";
      REACT_APP_BASE_BACKEND_URL: string; // This is url https//mydomain.api.com
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
