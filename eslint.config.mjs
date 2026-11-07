import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig([
  ...nextVitals,
  {
    rules: {
      // As 3 fotos já são WebP no tamanho final, com width/height e preload do hero.
      // next/image mudaria o carregamento e o CSS das seções estiliza o <img> direto (ver DECISIONS.md).
      '@next/next/no-img-element': 'off',
    },
  },
  globalIgnores(['.next/**', 'out/**', 'node_modules/**']),
]);
