/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    'simli-widget': {
      token?: string;
      agentid?: string;
      position?: string;
      customimage?: string;
      customtext?: string;
    };
  }
}
