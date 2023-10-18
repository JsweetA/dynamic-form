declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
}
declare global {
  import "@arco-design/web-vue/es/components";
}

declare module "@dynamic-form/utils";
declare module "@dynamic-form/components";
declare module "@rollup/plugin-terser";
