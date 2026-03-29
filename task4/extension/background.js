let startTime = Date.now();
let currentSite = "";
let siteData = {};

chrome.tabs.onActivated.addListener(async (activeInfo) => {

    let tab = await chrome.tabs.get(activeInfo.tabId);

    if (!tab.url || tab.url.startsWith("chrome://")) return;

    let url = new URL(tab.url);
    let domain = url.hostname;

    // calculate previous site time
    if (currentSite !== "") {
        let timeSpent = Math.floor((Date.now() - startTime) / 1000); // convert to seconds

        if (siteData[currentSite]) {
            siteData[currentSite] += timeSpent;
        } else {
            siteData[currentSite] = timeSpent;
        }
    }

    // switch to new site
    currentSite = domain;
    startTime = Date.now();

    // save data
    chrome.storage.local.set({ siteData });
});