const express = require('express');
const cors = require('cors');
const app = express();
const port = 9000;

app.use(cors());

const menuData = {
  drinks: [
    { name: 'Lycheetini', price: 14, description: 'Citrus vodka, lychee juice, fresh lime juice' },
    { name: 'Dragonfruit Tini', price: 14, description: 'Titos, dragon fruit liqueur, Cointreau, fresh lemon juice, simple' },
    { name: 'Hibiscus Rita', price: 16, description: 'Casmigos Blanco, orange liqueur, hibiscus liqueur, dried hibiscus, fresh lime juice' },
    { name: 'Atlas', price: 18, description: 'Hendricks, Ancho, strawberry, lime, agave, club soda, strawberry candy string' },
    { name: 'Smoked Peach Old Fashion', price: 18, description: 'Angels Envy, creme de peach, bitters, cedarwood plank charred peaches, orange essence' },
    { name: 'The 6th Man', price: 15, description: 'Bourbon, cointreau, lemon juice, blueberry puree' },
    { name: 'Sweet Heat', price: 16, description: 'Terramana Reposado, muddled jalapeno, fresh lime juice, Agave' },
    { name: 'Smokey Loma', price: 16, description: 'Mezcal, fresh grapefruit juice, agave, soda' },
    { name: 'Purple Rain', price: 14, description: 'Empress Indigo gin, elderflower liqueur, lavender essence, fresh lemon juice, eggwhite' },
    { name: 'Peach Tea', price: 16, description: 'Uruos, peach puree, house made tea' },
  ],
  brunch: [
    { name: 'Cinnamon Toast Crunch', price: 16, description: 'Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon' },
    { name: 'Moet Spritz', price: 20, description: 'Aperol, St Germain, botanical liquor, fresh lime juice, mini brut Moet topper' },
    { name: 'Bar 42 Mary', price: 14, description: 'Titos, tomato juice, worcestershire, celery salt, black pepper, tabasco, fully loaded' },
  ],
  hookah: ['Orange Mint', 'Blue Mist', 'Mighty Freeze', 'Luv 66', 'Peach', 'Watermelon']
};

app.get('/menu', (req, res) => {
  res.json(menuData);
});

app.listen(port, () => {
  console.log("Server is running on http://localhost:9000");
});