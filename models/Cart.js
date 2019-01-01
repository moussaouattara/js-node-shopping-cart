const fs = require('fs'); // File Systeme
const path = require('path');

const appDir = path.dirname(require.main.filename);

const p = path.join(appDir, 'data', 'cart.json') // Chemin vers le fichier products.json

class Cart {
	/*
		cart.json
		{ products: [{id: 123, qty: 1}, {}, {},],totalPrice: 0}
	*/
	static add(id, productPrice, callback) {
		let cart = { products: [], totalPrice: 0 };
		let product = {id: id, qty: 1};

		cart.products.push(product);
		cart.totalPrice = cart.totalPrice + productPrice;

		fs.writeFile(p, JSON.stringify(cart), err => {
			if (err) console.log(err);
			callback();
		})

	}
}


module.exports = Cart;