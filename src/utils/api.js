async function getTopSites(callback) {
  
  // Get From Chrome API
  return chrome.topSites.get(function(results) {

    // Make urls cleaner to read
    for( var i = 0; i < results.length; i++ ) {
      results[i].urlData = new URL(results[i].url);
    }

    callback(results.slice(0, 9))
  });

};

export default {
  getTopSites: getTopSites
}


      // chrome.topSites.get(function(results) {

      //   var sites = {

      //   };

      //   // Make urls cleaner to read
      //   for( var i = 0; i < results.length; i++ ) {
      //     results[i].urlData = new URL(results[i].url);
      //     console.log(results[i].urlData);
      //   }

      //   // TODO: Apply filters, and custom sites
      //   this.state.sites = results.slice(0, 9);

      // }.bind(this));