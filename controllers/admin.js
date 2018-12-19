const getIndex = (req,res) => {
	res.render('admin', {
		title: 'Administration des produits',
		admin: true
	});
}

module.exports = {
	getIndex: getIndex
}