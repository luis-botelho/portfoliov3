import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'

export default defineConfig([
  ...nextVitals,
  globalIgnores(['.next/**', 'next-env.d.ts', 'luis-botelho-certificados-portfolio-v1/**', 'playwright-report/**', 'test-results/**']),
])
