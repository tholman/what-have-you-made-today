// Parses the top sites from the chrome result, and saves them to our data format
function parseTopSites(sites) {
  var siteList = [];
  for (var site of sites) {
    if (!site.title) {
      site.title = "Configure Me";
    }

    if (!site.url) {
      site.url = "http://configure-me";
    }

    siteList.push({
      title: site.title,
      character: site.title.substring(0, 1),
      url: site.url,
      color: "#eeeeee",
    });
  }

  return siteList;
}

function ensureValidData(sites) {
  let checkedSites = sites;

  for (var i = 0; i < 9; i++) {
    if (!sites[i]) {
      sites.push({
        title: "Configure Me",
        character: "A",
        url: "http://configure-me",
        color: "#eeeeee",
      });
    } else if (!sites[i].title) {
      sites[i].title = "Configure Me";
      sites[i].character = "A";
    }
  }

  return checkedSites;
}

function getTopSites(resolve) {
  // Check if they have the data in storage
  chrome.storage.sync.get(["whymt-topSites"], (results) => {
    if (Object.keys(results).length == 0) {
      chrome.topSites.get((results) => {
        const siteList = ensureValidData(parseTopSites(results.slice(0, 9)));
        saveTopSites(siteList);
        resolve(siteList);
      });
    } else {
      resolve(ensureValidData(results["whymt-topSites"]));
    }
  });
}

function saveTopSites(siteList) {
  chrome.storage.sync.set({ "whymt-topSites": siteList });
}

export default {
  getTopSites: getTopSites,
  saveTopSites: saveTopSites,
};
