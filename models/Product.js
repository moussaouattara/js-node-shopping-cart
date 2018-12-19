const fs = require('fs'); 
const path = require('path');

const appDir = path.dirname(require.main.filename);

const p = path.join(appDir, 'data', 'products.json')

class Product {
	constructor(name, description, image, price) {
		this.name = name
		this.description = description
		this.image = image
		this.price = price
	}

	save(callback) {
		// 1 -> Lire le fichier 
		// Option 1 Le fichier existe déjà => Créer un tableau avec le contenu du fichier et ajouter le nouveau produit
		// Option 2 Le fichier n'existe pas => Créer un tableau avec le nouveau produit
		fs.readFile(p, (err, fileContent) => {
			let products = [];
			if(!err) {
				products = JSON.parse(fileContent);
			}

			products.push(this);
			
			fs.writeFile(p, JSON.stringify(products), err => {
				if(err) console.log(err);
				callback();
			});
		});
	}
}

module.exports = Product;