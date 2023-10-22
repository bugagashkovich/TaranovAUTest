declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: number;
      REDIS_URL: string;
      REDIS_USERNAME: string;
      REDIS_PASSWORD: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
