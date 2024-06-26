import home from "./views/home";
import users from "./views/users";
import products from "./views/products";

interface Route {
  path: string;
  view: string;
  title: string;
}

const navigateTo = (url: string) => {
  history.pushState(null, "", url);
  router();
};

const router = async () => {
  const routes: Route[] = [
    { path: "/", view: home(), title: "Home" },
    { path: "/users", view: users(), title: "Users" },
    { path: "/products", view: products(), title: "Products" },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  const view = await match.route.view;
  document.querySelector("#app")!.innerHTML = view;
  document.title = match.route.title;
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    const parentAnchor = target.parentElement?.closest("a");
    if (parentAnchor && parentAnchor.id === "spa-link") {
      navigateTo(parentAnchor.href);
    }
  });

  router();
});
