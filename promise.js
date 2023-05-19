const urlApi = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

function fishingServer() {
    fetch(urlApi+"ArianaGrande")
    .then((res) => {
        return res.json();
    })

    .then((res) => {
        createHTML(res.data);
    })

    .catch((err) => {
        console.log(err + "Riprova più tardi!");
    })
}

function createHTML(songs) {
    const myHTMLSong = document.getElementById("mySong");
    // console.log(songs);
    for (const song of songs) {
         const songDiv = document.createElement('div');
         const cardBody = document.createElement('div');
         
         cardBody.innerText = song.title;
         cardBody.classList.add('card-body');
         songDiv.appendChild(cardBody);

         songDiv.classList.add('img');
         songDiv.classList.add('card');
         songDiv.classList.add('col-3');
         songDiv.classList.add('mx-2');
         songDiv.classList.add('d-flex');
         songDiv.classList.add('gap-2');
         songDiv.classList.add('mb-2');

         myHTMLSong.appendChild(songDiv);
    }
}

fishingServer();