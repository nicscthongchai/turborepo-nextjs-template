declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Add more env below
      ENABLE_ROBOTS?: string;
      HOST_NAME?: string;
    }
  }
}

export {};
