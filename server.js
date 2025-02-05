const express = require('express');
const FakeRepository = require('./FakeRepository');
const cors = require('cors'); 
const app = express();
const port = process.env.PORT || 4000;


app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
  }));

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

    res.status(200).json({ message: `API EST UP` }); 
    }
        )



app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
  });