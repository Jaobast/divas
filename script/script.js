let artist = "";

function changeArtist(newArtist) {
    artist = newArtist;
    const artistCss = "./css/style_" + artist + ".css";
    console.log(artistCss);

    const link = document.getElementById('dynamic-css');
    link.setAttribute("href", artistCss);

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