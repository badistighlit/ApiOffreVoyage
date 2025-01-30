const Offfre = require('./OffreModel');

class FakeRepository {
    constructor() {
        this.offres = this.generateFakeOffres(); 
    }

    
    generateFakeOffres() {
        const offres = [];
    
        const destinations = ['New York', 'Tokyo', 'Londres', 'Rome', 'Barcelone', 'Bangkok', 'Sydney', 'Berlin', 'Lisbonne', 'Milan'];
        const compagniesAirlines = ['Air France', 'Delta', 'Lufthansa', 'Iberia', 'Emirates', 'Qatar Airways', 'Singapore Airlines', 'British Airways', 'American Airlines', 'Turkish Airlines'];
    
        const ethToUSD = 3123;  
    
        for (let i = 1; i <= 40; i++) {
            const id = i;
    
            const priceInUSD = Math.random() * (3500 - 300) + 300;  
            const priceInETH = (priceInUSD / ethToUSD).toFixed(4);  
    
            const type = i % 2 === 0 ? 'vol+hotel' : 'vol seul';
            const depart = 'Paris';
    
            const destination = destinations[Math.floor(Math.random() * destinations.length)];
    
            const hotel = type === 'vol+hotel' ? {
                name: `Hotel ${destination}`,
                numberOfNights: Math.floor(Math.random() * 8) + 3 
            } : null;
    
            const compagnyAirLine = compagniesAirlines[Math.floor(Math.random() * compagniesAirlines.length)];
    
            const dateDepart = new Date(Date.now() + Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000);
            const dateArrivee = new Date(dateDepart.getTime() + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000);
    
            offres.push(Offfre.createOffre(id, priceInETH, type, depart, destination, hotel, compagnyAirLine, dateArrivee, dateDepart));
        }
    
        return offres;
    }
    

    getAllOffres() {
        return this.offres;
    }

   
    getOffreById(id) {
        return this.offres.find(offre => offre.id === id);
    }
}

module.exports = FakeRepository;
