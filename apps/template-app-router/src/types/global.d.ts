declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Add more env below
      ENABLE_ROBOTS?: string;
      NEXT_PUBLIC_HOST_NAME?: string;
    }
  }
}

export {};
