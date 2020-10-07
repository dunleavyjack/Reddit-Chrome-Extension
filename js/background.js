function searchRedditForUrl(url) {
    const searchQuery = 'url:' + url;
    const redditSearchUrl = 'https://www.reddit.com/search?q=' + encodeURIComponent(searchQuery);
    console.log("Opening Reddit search URL: " + redditSearchUrl);
    chrome.tabs.create({ url: redditSearchUrl });
}

function handleContextMenuClick(info, tab) {
    const linkUrl = info["linkUrl"];
    console.log("User used context menu on link with URL: " + linkUrl);
    searchRedditForUrl(linkUrl);
}

chrome.contextMenus.create({
    "title": "Title",
    "contexts": ["link"],
    "onclick": handleContextMenuClick
});

/*var contextMenuItem = {
    "id": "contextMenu",
    "title": "hi",
    "contexts": ["selection"]
}

chrome.contextMenus.create(contextMenuItem)
chrome.contextMenus.onClicked.addListener(function(clicked){
    var text = clicked.selectionText
    console.log(text)
})


chrome.contextMenus.onClicked.addListener(function(clickData){
    var text = clickdata.selectionText
    if (clickData.menuItemId == "contextMenu"){
        chrome.tabs.create()
    }
})*/
