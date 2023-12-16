let artist = "";

function changeArtist(newArtist) {
    artist = newArtist;
    const artistCss = "./css/style_" + artist + ".css";
    document.getElementById('dynamic-css').setAttribute("href", artistCss);

    let show;
    if (artist) {
        show = "pick " + artist;
    }

    document.querySelectorAll('[class^="pick"]').forEach(button => {
        if (button.classList.contains("pick" + artist)) {
            button.innerHTML = show;
        } else {
            button.innerHTML = "";
        }
    });

    document.getElementById("yourChoise").innerHTML = "";
    
    const changeGif = document.getElementById("gif");
    changeGif.setAttribute("src", "");
}



function yourArtist() {
    const backHome = document.getElementById("dynamic-css");
    backHome.setAttribute("href","./css/style.css")

    document.getElementById("yourChoise").innerHTML = "you chose " + artist;
    document.querySelector(".pick" + artist).innerHTML = "";

    const changeGif = document.getElementById("gif");
    if (artist){
      changeGif.setAttribute("src", "./gif/" + artist + ".gif");  
    };
}

function goBack(){
    const backHome = document.getElementById("dynamic-css");
    backHome.setAttribute("href","./css/style.css")

    document.getElementById("yourChoise").innerHTML = "";
    document.querySelector(".pick" + artist).innerHTML = "";
    
    const changeGif = document.getElementById("gif");
    changeGif.setAttribute("src", "");
}