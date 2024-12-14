// Part 1: Setting Up Classes
class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    getTotalValue() {
        return this.price * this.quantity;
    }
    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }

    static applyDiscount(products, discount) {              // -> Part 3: Static Methods and Properties
        products.forEach(product => {
            product.price -= product.price * discount;
        });
    }

}

// Part 2: Adding Inheritance
class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }

}

// Part 4: Store Management
class Store {
    constructor() {
        this.inventory = [];
    }
    addProduct(product) {
        this.inventory.push(product);
    }
    getInventoryValue() {
        return this.inventory.reduce((total, product) => total + product.getTotalValue(), 0);
    }
    findProductByName(name) {
        return this.inventory.find(product => product.name === name) || null;
    }
}

// Part 5: Testing the System
const store = new Store();

// Create products:
const apple = new ProductProperties('Apple', 2.50, 50);
const orange = new ProductProperties('Orange', 1.75, 30);
const cheese = new ProductProperties('Cheese', 5.00, 15);

// Create perishable product products:
const milk = new PerishableProductProperties('Milk', 1.50, 10, '2024-12-31');
const bread = new PerishableProductProperties('Bread', 2.00, 20, '2025-01-15');

// Add products to the store:
store.addProduct(apple);
store.addProduct(orange);
store.addProduct(milk);
store.addProduct(bread);
store.addProduct(cheese);

// Print total inventory value before 15% discount:
console.log("Total Inventory Value before discount: $" + store.getInventoryValue().toFixed(2));