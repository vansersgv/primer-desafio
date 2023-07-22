class ProductManager {
    constructor() {
        this.products = [];
        this.productIdCounter = 1;
    }

    addProduct(product) {
        if (!this.validateProduct(product)) {
            console.error('Error: Datos del producto no válidos.');
            return;
        }

        if (this.isCodeRepeated(product.code)) {
            console.error('Error: El código del producto ya existe.');
            return;
        }

        product.id = this.productIdCounter++;
        this.products.push(product);
    }

    validateProduct(product) {
        return (
            product.title &&
            product.description &&
            product.price &&
            product.thumbnail &&
            product.code &&
            product.stock >= 0
        );
    }

    isCodeRepeated(code) {
        return this.products.some((product) => product.code === code);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((product) => product.id === id);
        if (!product) {
            console.error('Error: Producto no encontrado.');
        }
        return product;
    }
}

// Ejemplo de uso:
const productManager = new ProductManager();

const product1 = {
    title: 'Producto 1',
    description: 'Remera manga Larga',
    price: 2500,
    thumbnail: 'image1.jpg',
    code: 'PROD001',
    stock: 10,
};

const product2 = {
    title: 'Producto 2',
    description: 'Buzo capucha',
    price: 6500,
    thumbnail: 'image2.jpg',
    code: 'PROD002',
    stock: 5,
};

const product3 = {
    title: 'Producto 3',
    description: 'Campera pluma',
    price: 29900,
    thumbnail: 'image3.jpg',
    code: 'PROD003',
    stock: 20,
};

productManager.addProduct(product1);
productManager.addProduct(product2);
productManager.addProduct(product3);

console.log(productManager.getProducts());
console.log(productManager.getProductById(2));
console.log(productManager.getProductById(4)); 

