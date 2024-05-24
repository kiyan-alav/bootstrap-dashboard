interface Route {
    path: string;
    view: string;
}

const navigateTo = (url: string) => {
    history.pushState(null, "", url);
    router();
};

const router = async () => {
    const routes: Route[] = [
        { path: "/", view: "home" },
        { path: "/users", view: "users" },
        { path: "/products", view: "products" },
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = await fetch(`/src/pages/${match.route.view}.html`).then(res => res.text());
    document.querySelector("#app")!.innerHTML = view;
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        e.preventDefault();
        const target = e.target as HTMLElement;
        const parentAnchor = target.parentElement?.closest("a");
        if (parentAnchor && parentAnchor.id === "spa-link") {
            navigateTo(parentAnchor.href);
        }
    });

    router();
});