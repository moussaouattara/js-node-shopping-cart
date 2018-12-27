const fs = require('fs'); // File Systeme
const path = require('path');

const uuidv1 = require('uuid/v1');

const appDir = path.dirname(require.main.filename);

const p = path.join(appDir, 'data', 'products.json') // Chemin vers le fichier products.json

const getProductFromFile = (callback) => {
	fs.readFile(p, (err, fileContent) => {
		if(err) {
			callback([]);
		} else {
			callback(JSON.parse(fileContent));
		}
	});
}

class Product {
	constructor(name, description, image, price) {
		this.name = name
		this.description = description
		this.image = image
		this.price = price
	}

	save(callback) {
		// 1 -> Lire le fichier 
		// Option 1 Le fichier existe déjà => Créer un tableau avec le contenu du fichier et ajouter le nouveau produit.
		// Option 2 Le fichier n'existe pas => Créer un tableau avec le nouveau produit.
		this.id = uuidv1();

		getProductFromFile(products => {
			products.push(this);
			fs.writeFile(p, JSON.stringify(products), err => {
				if (err) console.log(err);
				callback();
			});
		});
	}

	static findAll(callback) { // static permet d'appeler la méthode sans faire une instance de la class
		getProductFromFile(products => {
			callback(products)
		});
	}

	static findById(id, callback) { // static permet d'appeler la méthode sans faire une instance de la class
		getProductFromFile(products => {
			const product = products.find(prod => prod.id === id);
			callback(product);
		});
	}
}

module.exports = Product;