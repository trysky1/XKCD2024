var maxcomic
var currentComic


window.onload = function(){
    //hämta senaste comic
    getComic('latest');
    //sätter funktionalitet för nav knappar

}

function getComic(which){
    //Hämta(fetch) data från xkcd api
    fetch('https://xkcd.vercel.app/?comic='+which)
        .then(function(response){
            //kolla om svaret är ok(200)
            if(response.status === 200){
                return response.json();
            } else {
                //kastar ett felmeddelande om status inte är ok
                throw new Error('Failed to load comic');
            }
        })
        .then(function(data){
            //Uppdatera maxComic värde 
            if(maxcomic < data.num){
                maxComic=data.num;
            }
            //skicka json data för behandling till DOM
            console.log(data);
            appendComic(data);
        })
        .catch(function(error){
            //logga eventuella errors
            console.log('Error', error);
        })

}

function appendComic(data){}