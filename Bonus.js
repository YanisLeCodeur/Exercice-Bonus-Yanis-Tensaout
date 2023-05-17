class voiture {
    constructor (marque, modele, annee, couleur) {
        this.marque = marque ;
        this.modele = modele ;
        this.annee = annee ;
        this.couleur= couleur ;
    }
afficherDetails() {
    console.log(this.marque+this.modele+this.annee+this.couleur); 
}
}
class garage {
    constructor (listvoiture) {
        this.listvoiture=listevoiture;
    }
    afficherannee(annee){
        this.listvoiture.forEach(element => {
            if(element.annee==annee) {
                element.afficherDetails();
            }
        });
    }
    affichermarque(marque){
        this.listvoiture.forEach(element => {
            if(element.marque==marque) {
                element.afficherDetails();
            }
        });
    }
    afficherlettre(lettre1,lettre2,lettre3){
        this.listvoiture.forEach(element => {
            if(element.marque.includes(lettre1)&& element.marque.includes(lettre2) && element.marque.includes(lettre3) ) {
                element.afficherDetails();
            }
        });
    }
}

