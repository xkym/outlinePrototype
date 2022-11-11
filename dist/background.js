chrome.action.onClicked.addListener(async (tab) => {
    console.log('已经注入');
    chrome.scripting.insertCSS({
        target: {tabId: tab.id},
        files: ['./css/outline.css','./css/container.css']
    });
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['./main.js']
    });

});