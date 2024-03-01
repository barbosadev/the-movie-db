import { Home } from "./pages/home";
import { Program } from "./pages/program";
import { SearchPage } from "./pages/search";
import { NotFound } from "./pages/notFound";

export const routes = [
  {
    path: "*",
    component: <NotFound />,
  },
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/movie/:programId",
    component: <Program />,
  },
  {
    path: "/tv/:programId",
    component: <Program />,
  },
  {
    path: "/search-page/:query",
    component: <SearchPage />,
  },
];
