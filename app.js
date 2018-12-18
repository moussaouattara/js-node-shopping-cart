// 1 page d'accueil -> Liste des produits
// 1 page produit -> Infos du produit sur lequel l'utilisateur à cliqué 
// 1 page panier -> Listes des produits ajoutés au panier avec le total et la quantité
// 1 page admin -> Formulaire permettant l'ajout d'un nouveau produit

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine','pug');

app.use(bodyParser.urlencoded({extended:false}));

// Routes
const shopRoutes = require('./routes/shop')
app.use('/', shopRoutes);
const adminRoutes = require('./routes/admin');
app.use('/admin', adminRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Serveur lancé sur le port ${port}.`);
});

