/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DATA_MODE: 'mock' | 'live';
  readonly VITE_API_BASE_URL: string;
  readonly VITE_WS_URL: string;
  readonly VITE_SITE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
