chrome.storage.local.get("siteData", (result) => {

    let data = result.siteData || {};
    let output = "";

    for (let site in data) {

        let time = data[site];

        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        output += `<p>${site}: ${minutes} min ${seconds} sec</p>`;
    }

    document.body.innerHTML = output;
});