import { getAllProducts } from "../services/products";
import { getAllUsers } from "../services/users";
import { Products } from "../types/product.types";
import { User } from "../types/user.types";

export default function home() {
  const pageHtml = `
    <div class="container-fluid">
    <div class="row">
      <div class="col-lg-2 d-none d-lg-block p-0">
        <div class="shadow sidebar px-4 py-5 position-fixed h-100">
          <div class="sidebar_logo-container">
            <a href="/" id="spa-link" class="d-block bg-white rounded-2 p-4">
              <img src="/images/logo.png" alt="logo" class="w-100 h-100" />
            </a>
          </div>
          <div class="sidebar_menu mt-5 px-3">
            <ul class="d-flex flex-column gap-3 m-0 p-0">
              <li>
                <a href="/" id="spa-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-house-door-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"
                    />
                  </svg>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="/products" id="spa-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-basket3-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z"
                    />
                  </svg>
                  <span>Products</span>
                </a>
              </li>
              <li>
                <a href="/users" id="spa-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-people-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
                    />
                  </svg>
                  <span>Users</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-10">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid p-3">
            <a class="navbar-brand" href="#">Bootstrap Dashboard</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="offcanvas offcanvas-start d-lg-none w-75"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div class="shadow sidebar px-4 py-5 position-fixed h-100">
                <div class="sidebar_logo-container">
                  <a
                    href="/"
                    id="spa-link"
                    class="d-block bg-white rounded-2 p-4"
                  >
                    <img
                      src="/images/logo.png"
                      alt="logo"
                      class="w-100 h-100"
                    />
                  </a>
                </div>
                <div class="sidebar_menu mt-5 px-3">
                  <ul class="d-flex flex-column gap-3 m-0 p-0">
                    <li>
                      <a href="/" id="spa-link">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-house-door-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"
                          />
                        </svg>
                        <span>Home</span>
                      </a>
                    </li>
                    <li>
                      <a href="/products" id="spa-link">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-basket3-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z"
                          />
                        </svg>
                        <span>Products</span>
                      </a>
                    </li>
                    <li>
                      <a href="/users" id="spa-link">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-people-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
                          />
                        </svg>
                        <span>Users</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main class="container-fluid p-3 main">
          <div class="row g-3">
            <div class="col-12 col-md-6">
              <div
                class="shadow-sm shadow-lg p-3 rounded-3 d-flex flex-column align-items-center gap-3 bg-primary text-white"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-basket"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"
                    />
                  </svg>
                </div>
                <h3 class="fs-5 m-0">Count Of Products</h3>
                <h4 class="total-products">-</h4>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div
                class="shadow-sm shadow-lg p-3 rounded-3 d-flex flex-column align-items-center gap-3 bg-success text-white"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-people-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
                    />
                  </svg>
                </div>
                <h3 class="fs-5 m-0">Count Of Users</h3>
                <h4 class="total-users">-</h4>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div
                class="table-responsive shadow-sm shadow-lg bg-info p-3 rounded-3"
              >
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Title</th>
                      <th scope="col">Category</th>
                      <th scope="col">Price ($)</th>
                    </tr>
                  </thead>
                  <tbody id="product-content">
                    
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div
                class="table-responsive shadow-sm shadow-lg bg-danger p-3 rounded-3"
              >
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Full Name</th>
                      <th scope="col">Username</th>
                      <th scope="col">Email</th>
                    </tr>
                  </thead>
                  <tbody id="user-content">
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
    `;

  getAllProducts()
    .then((products) => {
      const productCountElem = document.querySelector(
        ".total-products"
      ) as HTMLElement;
      const productContentElem = document.querySelector(
        "#product-content"
      ) as HTMLElement;

      if (productCountElem && productContentElem) {
        productCountElem.textContent = products.length.toString();
        renderProducts(products, productContentElem);
      } else {
        console.error("Product elements not found.");
      }
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });

  getAllUsers().then((users) => {
    const userCountElem = document.querySelector(".total-users");
    const userContentElem = document.querySelector(
      "#user-content"
    ) as HTMLElement;
    if (userCountElem && userContentElem) {
      userCountElem.textContent = users.length.toString();
      renderUsers(users, userContentElem);
    }
  });

  return pageHtml;
}

function renderProducts(products: Products[], container: HTMLElement) {
  products.forEach((product) => {
    const template = `
      <tr>
        <th scope="row">${product.id}</th>
        <td>${product.title}</td>
        <td>${product.category}</td>
        <td>${product.price}</td>
      </tr>
    `;
    container.insertAdjacentHTML("beforeend", template);
  });
}

function renderUsers(users: User[], container: HTMLElement) {
  users.forEach((user) => {
    const template = `
      <tr>
        <th scope="row">${user.id}</th>
        <td>${user.name.firstname} ${user.name.lastname}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
      </tr>
    `;
    container.insertAdjacentHTML("beforeend", template);
  });
}
