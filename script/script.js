let artist = "";

function changeArtist(newArtist) {
    artist = newArtist;
    const artistCss = "./css/style_" + artist + ".css";
    document.getElementById('dynamic-css').setAttribute("href", artistCss);

    const el = document.querySelector(".yourArtist");
    const artistButton = document.querySelector("." + artist + "_button");
    
    el.style.bottom = (artistButton.offsetTop + artistButton.offsetHeight - 65) + "px";
    el.style.left = (artistButton.offsetLeft + artistButton.offsetWidth / 2 - el.offsetWidth / 2) + "px";

    let show;
    if (artist) {
        show = "pick " + artist;
    }
    document.getElementById("yourArtist").innerHTML = show;
    document.getElementById("yourChoise").innerHTML = "";
    
    const changeGif = document.getElementById("gif");
    changeGif.setAttribute("src", "");
}


function yourArtist() {
    const backHome = document.getElementById("dynamic-css");
    backHome.setAttribute("href","./css/style.css")

    document.getElementById("yourChoise").innerHTML = "you chose " + artist;
    document.getElementById("yourArtist").innerHTML = "";

    const changeGif = document.getElementById("gif");
    if (artist){
      changeGif.setAttribute("src", "./gif/" + artist + ".gif");  
    };
}

function goBack(){
    const backHome = document.getElementById("dynamic-css");
    backHome.setAttribute("href","./css/style.css")

    document.getElementById("yourChoise").innerHTML = "";
    document.getElementById("yourArtist").innerHTML = "";
    
    const changeGif = document.getElementById("gif");
    changeGif.setAttribute("src", "");
}