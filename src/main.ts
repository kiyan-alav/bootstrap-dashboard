// css
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.scss";
// scripts
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./scripts/router";
import home from "./views/home.ts";
import products from "./views/products.ts";
import users from "./views/users.ts";

document.addEventListener('DOMContentLoaded', () => {
    home();
    products()
    users()
});
