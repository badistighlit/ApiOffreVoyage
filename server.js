const express = require('express');
const FakeRepository = require('./FakeRepository');

const app = express();
const port = process.env.PORT || 4000;


const repo = new FakeRepository();

app.get('/offres', (req, res) => {
    const offres = repo.getAllOffres();
    res.json(offres);  
});


app.get('/offres/:id', (req, res) => {
    const offreId = parseInt(req.params.id, 10);
    const offre = repo.getOffreById(offreId);

    if (offre) {
        res.json(offre); 
    } else {
        res.status(404).json({ message: `Offre avec l'ID ${offreId} non trouvée` }); 
    }})
    app.get('/', (req, res) => {

    return "Hello, l'api est up:"
    }
        )
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
  });