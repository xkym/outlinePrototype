chrome.action.onClicked.addListener(async (tab) => {
    chrome.scripting.insertCSS({
        target: {tabId: tab.id},
        files: ['./css/content.css']
    });
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['./js/content.js']
    });

});