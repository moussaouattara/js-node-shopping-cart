const Product = require('../models/Product');
const Cart = require('../models/Cart');

const getIndex = (req,res) => {
	Product.findAll(products => {
		res.render('index', {
			title: 'Bienvenue sur votre boutique',
			path: '/',
			products: products
		});
	});
}

const getProductDetails = (req, res) => {
	Product.findById(req.params.id, product => {
		res.render('product-details', {
			title: product.name,
			product: product
		});
	});
}

const getCart = (req,res) => {
	res.render('cart', {
		title: "Panier",
		path: '/panier'
	});
}

const postCart = (req,res) => {
	console.log('post !');
	// Product.findById(req.body.productId, product => {
	// 	Cart.add(req.body.productId, product.price, () => {
	// 		res.redirect('/panier');
	// 	});
	// });
}

module.exports = {
	getIndex: getIndex,
	getProductDetails: getProductDetails,
	getCart: getCart,
	postCart: postCart
}