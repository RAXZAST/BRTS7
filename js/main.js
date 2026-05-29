    // AUDIO FILE UPLOAD FUNCTIONALITY 
let fileInput = document.querySelector("#upload-file");
let fileName = document.querySelector("#file-name");
let fileIcon = document.querySelector("#file-icon");
let uploadDone = document.querySelector("#upload-done");

function getfile() {
    let audioFile = fileInput.value.split("\\").pop();
    let fileOnly = audioFile.length > 18 ? audioFile.substring(0, 18) + "..." : audioFile
    fileName.textContent = fileOnly;
    fileIcon.setAttribute("style", "display: none");
    uploadDone.setAttribute("style", "display: flex");
}

    // LATEST RELEASES UPDATE AND MUSIC PREVIEW SYSTEM
let sec2album = document.querySelectorAll(".sec2 .album");

/*
async function loadData() {
    try {
        const response = await fetch('data/release.json'); // Path to your file
        const data = await response.json();        // Parse JSON into JS object
        // console.log(data);
    } catch (error) {
        console.error("Could not load JSON:", error);
    }
}
loadData();*/

sec2album.forEach(function(album) {
    let img = album.querySelector("img")
    let title = album.querySelector("h4")
    let artist = album.querySelector("p")

    img.setAttribute("src", "media/cover-art/nervy-funk.png");
    let titleText = "NERVY FUNK";
    let artistText = "SATURAST, DJ ALGUS";

    title.innerText = titleText.length > 14 ? titleText.substring(0, 14) + "..." : titleText;
    artist.innerText = artistText.length > 25 ? artistText.substring(0, 25) + "..." : artistText;

});

let iframe = document.querySelector("iframe");
let releaseContainer = document.querySelector(".sec2 .container");
let previewWindow = document.querySelector(".sec2 .preview")

function convertSpotifyURL(url) {
    const match = url.match(/album\/([a-zA-Z0-9]+)/);
    if (!match) return null;
    const albumID = match[1];
    return `https://open.spotify.com/embed/album/${albumID}?theme=0`;
}

releaseContainer.onclick = function (container) {
    previewWindow.style = "display: flex";
    body.style = "overflow-y: none";
    html.style = "overflow-y: none";
    
    let embeddedLink = container.target.closest(".album").getAttribute("data-link");
    let updateLink = convertSpotifyURL(embeddedLink)
    iframe.setAttribute("src", updateLink);
    console.log(updateLink);
}

previewWindow.onclick = function (event) {
    if (event.target == previewWindow) {
        previewWindow.style = "display: none";
        iframe.setAttribute("src", ``);
        body.style = "overflow-y: visible";
        html.style = "overflow-y: visible";
    }
}

