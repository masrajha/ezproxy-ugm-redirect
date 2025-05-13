// background.js
const proxyMap = {
  // Format: original-domain: proxy-domain
  'ieeexplore.ieee.org': 'ieeexplore-ieee-org.ezproxy.ugm.ac.id',
  'www.sciencedirect.com': 'www-sciencedirect-com.ezproxy.ugm.ac.id'
};

// Membuat menu konteks
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "ugm-redirect",
    title: "UGM Proxy Access",
    contexts: ["page"],
    documentUrlPatterns: Object.keys(proxyMap).map(domain => `*://${domain}/*`)
  });
});

// Handle klik menu
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "ugm-redirect") {
    const originalUrl = new URL(tab.url);
    const originalHost = originalUrl.hostname;
    
    if (proxyMap[originalHost]) {
      const newHost = proxyMap[originalHost];
      const newUrl = tab.url.replace(
        new RegExp(originalHost, 'g'),
        newHost
      );
      
      chrome.tabs.update(tab.id, { url: newUrl });
    }
  }
});