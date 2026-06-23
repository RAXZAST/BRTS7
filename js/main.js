    // AUDIO FILE UPLOAD FUNCTIONALITY 
// function audioFileUpload() {
// const fileInput = document.querySelector("#upload-file");
// let fileName = document.querySelector("#file-name");
// let fileIcon = document.querySelector("#file-icon");
// let uploadDone = document.querySelector("#upload-done");

// function getFile() {
//     let audioFile = fileInput.value.split("\\").pop();
//     let fileOnly = audioFile.length > 18 ? audioFile.substring(0, 18) + "..." : audioFile
//     fileName.textContent = fileOnly;
//     fileIcon.setAttribute("style", "display: none");
//     uploadDone.setAttribute("style", "display: flex");
// }
// } audioFileUpload()


    // LATEST RELEASES UPDATE AND MUSIC PREVIEW SYSTEM
function latestReleaseUpdate() {
let releaseContainer = document.querySelector(".sec2 .container");

async function loadReleases() {
    const response = await fetch("data/release.json");
    const data = await response.json();

    data.releases.forEach(release => {
        let joinArtist = Array.isArray(release.artist) ? release.artist.join(', ') : String(release.artist || '');
        let splittedArtist = joinArtist.length > 26 ? joinArtist.substring(0, 26) + "..." : joinArtist;
        fetch(`https://open.spotify.com/oembed?url=${encodeURIComponent(release.spotify)}`)
        .then(res => res.json())
        .then(data => {
            let splittedTitle = data.title.length > 12 ? data.title.substring(0, 12) + "..." : data.title;
            const artistName = data.title.split(" - ").pop();
            releaseContainer.innerHTML += `
            <div title="${data.title}" class="album" data-link="${release.spotify}" title="">
                <div class="box">
                    <img src="${data.thumbnail_url}" title="${release.tags}">
                    <div class="info">
                        <h4 id="title">${splittedTitle}</h4>
                        <p id="artist">${splittedArtist}</p>
                    </div>
                </div>
            </div>
        `;
        }); 
    });
}
loadReleases();

let iframe = document.querySelector("iframe");
let previewWindow = document.querySelector(".sec2 .preview")

function convertSpotifyURL(url) {
    const match = url.match(/album\/([a-zA-Z0-9]+)/);
    if (!match) return null;
    const albumID = match[1];
    return `https://open.spotify.com/embed/album/${albumID}?theme=0`;
}

releaseContainer.onclick = function (container) {
    if (container.target.closest(".album")) {
        previewWindow.style = "display: flex";
        body.style = "overflow-y: hidden";
        html.style = "overflow-y: hidden";
    }
    let embeddedLink = container.target.closest(".album").getAttribute("data-link");
    let updateLink = convertSpotifyURL(embeddedLink)
    iframe.setAttribute("src", updateLink);
}

previewWindow.onclick = function (event) {
    if (event.target == previewWindow) {
        previewWindow.style = "display: none";
        iframe.setAttribute("src", ``);
        body.style = "overflow-y: visible";
        html.style = "overflow-y: visible";
    }
}

} latestReleaseUpdate()

    // CONTACT FORM
let alertWindow = document.querySelector(".alert-window");
let errorMessage = document.querySelector(".alert-window .card p");

function openAlertWindow() {
    alertWindow.style = "display: flex";
}

alertWindow.onclick = function (event) {
    if (event.target == alertWindow) {
        alertWindow.style = "display: none";
    }
}

const form = document.querySelector('form');
const driveUrl = document.querySelector("#drive-url");
const captcha = document.querySelector(".h-captcha");

driveUrl.addEventListener("focus", function () {
    captcha.setAttribute("style", "display: flex")
})

form.addEventListener('submit', function(e) {
    const driveError = driveUrl.value.includes(".com" || "drive")
    const hCaptcha = form.querySelector('textarea[name=h-captcha-response]').value;
    if (!driveError) {
        e.preventDefault();
        openAlertWindow();
        errorMessage.textContent = "Please enter a valid drive URL"
        return
    }
    if (!hCaptcha) {
        e.preventDefault();
        openAlertWindow();
        errorMessage.textContent = "Please fill out the hCaptcha filed"
        return
    }
});