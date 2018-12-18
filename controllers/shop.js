const getIndex = (req,res) => {
	res.render('index');
}

const getCart = (req,res) => {
	res.render('cart');
}

module.exports = {
	getIndex: getIndex,
	getCart: getCart
}