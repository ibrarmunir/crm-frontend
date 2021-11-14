import { lazy } from "react";
import { screens } from "config/screens/screens";

const importComp = (filePath) => {
  return lazy(() => import(`../containers/${filePath}`));
};

const useRoutes = () => {
  const routes = [];
  screens.forEach((screen) => {
    routes.push({
      key: screen.key,
      path: screen.path,
      component: importComp(screen.filePath),
      exact: screen.exact,
      isPrivate: screen.isPrivate,
    });
  });

  return routes;
};

export default useRoutes;
