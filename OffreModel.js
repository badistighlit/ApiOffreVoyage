class Offfre{
    constructor (id,price,type,depart,destination,hotel,compagnyAirLine,dateArrivee,dateDepart){
     this.id = id;
     this.price = price;
     this.type = type;
     this.depart = depart;
     this.destination=destination;
     this.dateArrivee = dateArrivee;
     this.dateDepart = dateDepart;
     this.hotel = hotel;
     this.compagnyAirLine = compagnyAirLine


    }

    static createOffre (id,price,type,depart,destination,hotel,compagnyAirLine,dateArrivee,dateDepart)
    {return new Offfre(id,price,type,depart,destination,hotel,compagnyAirLine,dateArrivee,dateDepart);}



}module.exports = Offfre;