//Funktion för felmeddelanden.
function myErrorMsg(text) {
    const myError=document.createElement("p");
    myError.textContent=text;
    errorMsg.appendChild(myError);
} 

//Funktion för att tömma lyricsfältet på eventuella barn. 
function clearLyrics() {
lyrics.querySelectorAll('p').forEach(n => n.remove());          //Gamla felmeddelanden
lyrics.querySelectorAll('textarea').forEach(n => n.remove());   //Gamla lyrics 
lyrics.querySelectorAll('h2').forEach(n => n.remove());         //Gamla lyrics övertexter
}


// Funktion som kollar om inputfälten är tomma, och därefter styr knappens disabled attribut. 
function checkInputFields(){
    if(myArtist.value==="" || myTitle.value==="") {
        clearLyrics();
        myErrorMsg("You have to enter both an artist and a song title for this to work.");
    }
    else{
        clearLyrics();
        searchBtn.removeAttribute("disabled");
    }
    

}