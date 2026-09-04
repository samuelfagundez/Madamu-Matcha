import type { RouteRecord } from "vite-react-ssg";
import App from "./App";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RouteError from "./components/RouteError";

export const routes: RouteRecord[] = [
  {
    path: "/",
    Component: App,
    entry: "src/App.tsx",
    errorElement: <RouteError />,
    children: [
      { index: true, Component: Home, entry: "src/pages/Home.tsx" },
      { path: "*", Component: NotFound, entry: "src/pages/NotFound.tsx" },
    ],
  },
];

export default routes;
