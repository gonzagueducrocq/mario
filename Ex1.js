
      function Personne(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;

        this.getNom = function() {
        return this.prenom + " " + this.nom;
        }


      }

      function Client(nom, prenom) {
        Personne.call(this, nom, prenom);
      }

      var tabClients = [];

for(var i = 0 ; i < 5 ; i++) {
  tabClients.push(new Client("Dupont", "Moretti", "Derulo", "Lalanne", "Elmaleh"));
}

      tabClients.forEach(afficher);

      function afficher(client) {
        console.log(client.getNom());
      }
