import { getAllProducts } from "../services/products";
import { getProductData, setProductsData } from "../store/productStore";
import { Products } from "../types/product.types";

export default function products() {
  const pageHtml = `
    <div class="container-fluid">
    <div class="row" id="test">
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
            <a class="navbar-brand" href="#">Product Page</a>
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
        <!-- End Sidebar Mobile -->
        <main class="container-fluid p-3">
          <div class="form-floating w-75 mx-auto">
            <input
              type="search"
              class="form-control search-product"
              id="floatingInput"
              placeholder="Search..."
            />
            <label for="floatingInput">Search</label>
          </div>
          <div class="container mt-4">
            <div class="row  g-3" id="product-container">
            
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
    `;

  getAllProducts()
    .then((products) => {
      setProductsData(products);
      const productContainer = document.querySelector(
        "#product-container"
      ) as HTMLElement;

      if (productContainer) {
        renderProducts(products, productContainer);
        addSearchEventListener();
      } else {
        console.error("Product elements not found.");
      }
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });

  return pageHtml;
}

function renderProducts(products: Products[], container: HTMLElement) {
  container.innerHTML = "";
  products.forEach((product) => {
    const template = `
    <div class="col-12 col-md-4">
      <div class="shadow-sm rounded-3 product-container_box h-100">
        <div class="product-banner_img">
          <img
            src=${product.image}
            class="w-100 h-100 d-block"
            alt=""
          />
        </div>
        <p class="m-0 my-auto">${product.title}</p>
        <div
          class="d-flex align-items-center justify-content-between w-100"
        >
          <span>${product.price}$</span>
          <span>${product.rating.rate}/5</span>
        </div>
      </div>
  </div>
    `;

    container.insertAdjacentHTML("beforeend", template);
  });
}

function addSearchEventListener() {
  const searchInput = document.querySelector(
    ".search-product"
  ) as HTMLInputElement;
  searchInput.addEventListener("input", (e: Event) => {
    console.log("Hi");
    const searchTerm = (e.target as HTMLInputElement).value;
    const filteredProducts = getProductData().filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const productContainer = document.querySelector(
      "#product-container"
    ) as HTMLElement;
    if (productContainer) {
      renderProducts(filteredProducts, productContainer);
    }
  });
}