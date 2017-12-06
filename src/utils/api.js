import ChromePromise from 'chrome-promise';

// Parses the top sites from the chrome result, and saves them to our data format
function parseTopSites(sites) {
  
  var siteList = [];
  for (var site of sites) {
    siteList.push({
      title: site.title,
      character: site.title.substring(0, 1),
      url: site.url,
      color: '#eeeeee'
    })
  }

  return siteList;
}

async function getTopSites() {

  // Check if they have the data in storage
  return new ChromePromise().storage.sync.get('whymt-topSites').then((results) => {

    // If they are not existing in storage, then pull the new items
    if (Object.keys(results).length == 0) {
      return new ChromePromise().topSites.get().then((results) => {

        // Parse sitelist into our data format
        const siteList = parseTopSites(results.slice(0, 9));

        // Save them into chrome storage
        saveTopSites(siteList);

        // Return them to load the site
        return siteList;
      });
    } else {
      return results['whymt-topSites'];
    }
  });
};

async function saveTopSites(siteList) {
  new ChromePromise().storage.sync.set({'whymt-topSites': siteList});
}

export default {
  getTopSites: getTopSites,
  saveTopSites: saveTopSites
}