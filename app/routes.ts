import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("client-component", "routes/anotherPage.tsx")
] satisfies RouteConfig;
