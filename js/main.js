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
                <img src="${data.thumbnail_url}" title="${release.tags}">
                <div class="info">
                    <h4 id="title">${splittedTitle}</h4>
                    <p id="artist">${splittedArtist}</p>
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

    // CONTACT FORM FULL PART
// function contactFormFullPart() {

// const form = document.querySelector("form")
// const name = document.querySelector("form #name");
// const artistName = document.querySelector("form #artist-name");
// const trackTitle = document.querySelector("form #track-title");
// const email = document.querySelector("form #email");
// const socialUrl = document.querySelector("form #social-url");
// const message = document.querySelector("form textarea");
// const releaseDate = document.querySelector("form #release-date");
// fileInput;
// const driveUrl = document.querySelector("form #drive-url");
// const submit = document.querySelector("form #submit");

// ////////////////
// let nameData;
// let artistNameData;
// let trackTitleData;
// let emailData;
// let socialUrlData;
// let messageData;
// let releaseDateData;
// let fileData;
// let driveUrlData;
// let isReleasedTrack = false;

// let messageSuccessHint = false;

//     // ACTION AFTER SUBMIT
// // form.addEventListener('submit', function(event) {
// //     event.preventDefault();
// //     checkIcon.classList.contains("hidden") ? isReleasedTrack = "Already Released" : isReleasedTrack = "Not Released Yet"
// //     // isReleasedTrack = checkIcon.classList.contains("hidden");
// //     if (messageSuccessHint == false) {
// //         let emailContain = email.value.includes("@" && ".");
// //         if (userName.value == "" || email.value == "" || serviceType.value == "" || message.value == "" || message.value.length < 20 || !message.value.trim() || emailContain == false) {
// //             if (userName.value == "") {
// //                 userName.classList.add("wrong")
// //             }if (email.value == "" || emailContain == false) {
// //                 email.classList.add("wrong")
// //             }if (serviceType.value == "") {
// //                 serviceType.classList.add("wrong")
// //             }if (message.value == "") {
// //                 message.classList.add("wrong")
// //             }
// //         } else {
// //                 // ALL FORM DATA FOR BACKEND
// //             nameData = name.value.trim();
// //             artistNameData = artistName.value.trim();
// //             trackTitleData = trackTitle.value.trim();
// //             emailData = message.value.trim();
// //             socialUrlData = message.value.trim();
// //             messageData = message.value.trim();
// //             releaseDateData = releaseDate.value;
// //             fileData = fileInput.files[0];
// //             driveUrlData = driveUrl.value.trim();
// //             isReleasedTrack
// //         }
// //     }
// // });
    
// }
// contactFormFullPart()