function showCity() {
    // recuperer le nom de la ville
    let nomVilleSelectionnee = document.getElementById("container").value;



    //recuperer la liste des villes disponible 
    let cities = document.getElementsByClassName("city");

    document.getElementById("ville").innerHTML='';
  
    //  parcourir la liste des villes
    for (i=0; i<3; i++) {

        //si la ville choisi corespond 
        if (cities[i].id == nomVilleSelectionnee) {
           
            cities[i].style.display= "block";
            document.getElementById("ville").innerHTML=nomVilleSelectionnee;

        //si la ville choisi corespond pas    
        } else {
	        cities[i].style.display= "none";
        }


    
    }
     // Clé de l'API
    const apiKey = "eea8693d59ca665a1613694a7748a55e";

     //URL API avec variable "nom de la ville" et "clé API"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${nomVilleSelectionnee}&appid=${apiKey}&units=metric`;
    
    //appel de l'API avec la fonction fetch
    fetch(url).then(response => response.json()).then(data => {
        const { main, name, sys, weather } = data;
    //affichage des resultats sous forme d'une alerte 
    alert (`${Math.round(main.temp)}  ${weather[0]["description"]}`);
    });
}
