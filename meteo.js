function showCity() {
    // recuperer le nom de la ville
    let nomVilleSelectionnee = document.getElementById("container").value;



    //recuperer la liste des villes disponibles 
    let cities = document.getElementsByClassName("city");

    document.getElementById("ville").innerHTML='';
  
    //  parcourir la liste des villes
    for (i=0; i<3; i++) {

        //si la ville choisie corespond 
        if (cities[i].id == nomVilleSelectionnee) {
           
            cities[i].style.display= "block";
            document.getElementById("ville").innerHTML=nomVilleSelectionnee;

        //si la ville choisie ne corespond pas    
        } else {
	        cities[i].style.display= "none";
        }


    
    }
     // Clé de l'API
    const apiKey = "eea8693d59ca665a1613694a7748a55e";

     //URL API avec variable "nom de la ville" et "clé API"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${nomVilleSelectionnee}&appid=${apiKey}&units=metric&lang=fr`;
    
    //appel de l'API avec la fonction fetch
    fetch(url).then(response => response.json()).then(data => {
        const { main, name, sys, weather } = data;
	    
    //affichage des resultats sous forme d'une alerte vu qu'on a pas de temps pour améliorer le code comme souhaité alors on a utilisé une alert pour ça
    alert (`${(data.name)} , ${Math.round(main.temp)} , ${weather[0]["description"]}`);
    });
}
