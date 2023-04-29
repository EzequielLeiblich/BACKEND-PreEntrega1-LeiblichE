class ProductManager {
    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }

    agregarProduct(title, description, precio, thumbnail, stock) {
    if (
        title == null ||
        description == null ||
        precio == null ||
        thumbnail == null ||
        stock == null
    ) {
        console.log("Debe llenar todos los campos");
        return;
        }

        const product = {
        title,
        precio,
        description,
        thumbnail,
        stock,
        };

    if (this.products.length === 0) {
        product.code = 1;
        } else {
        product.code = this.products[this.products.length - 1].code + 1;
    }

        this.products.push(product);
        console.log("Se almaceno un producto");
        this.renderProductsTable();
    }

    getProductByCode(code) {
        const product = this.products.find((product) => {
        return product.code == code;
    });
    if (!product) {
        return "not found";
    } else {
        return product;
    }
}

    renderProductsTable() {
    const tableBody = document.getElementById("products-table-body");
    tableBody.innerHTML = "";
    this.products.forEach((product) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${product.title}</td>
            <td>${product.description}</td>
            <td>${product.precio}</td>
            <td><img src="${product.thumbnail}" alt="${product.title}"></td>
            <td>${product.code}</td>
            <td>${product.stock}</td>
        `;
        tableBody.appendChild(row);
    });
    }
}

const productManager = new ProductManager();

document
    .getElementById("add-product-form")
    .addEventListener("submit", (event) => {
        event.preventDefault();
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const precio = document.getElementById("price").value;
        const thumbnail = document.getElementById("thumbnail").value;
        const stock = document.getElementById("stock").value;
    
        productManager.agregarProduct(title, description, precio, thumbnail, stock);
        event.target.reset();
    });

productManager.agregarProduct(
    "Agua",
    "Agua en botella",
    "$150",
    "https://static.vecteezy.com/system/resources/previews/003/113/983/original/water-splash-from-a-plastic-bottle-free-photo.jpg",
    150
);

productManager.agregarProduct(
    "Chocolate",
    "Chocolate en barra",
    "$350",
    "https://upload.wikimedia.org/wikipedia/commons/9/95/Cadbury-Bournville.jpg",
    100
);

productManager.agregarProduct(
    "Refresco",
    "Refresco sabor naranja",
    "$250",
    "https://cdn.shopify.com/s/files/1/0305/2031/1947/products/miranda_700x.jpg?v=1593090113",
    100
);