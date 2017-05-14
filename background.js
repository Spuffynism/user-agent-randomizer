// Random user-agent array index
var randomUserAgentIndex;

var onBeforeSendHeadersListener = function(details) {
	details.requestHeaders.forEach(function(header) {
		if(header.name === 'User-Agent') {
			randomUserAgentIndex = Math.round(Math.random() * userAgents.length);
			header.value = userAgents[randomUserAgentIndex];
			return;
		}
	});
	
	return {
		requestHeaders: details.requestHeaders
	};
};

chrome.webRequest.onBeforeSendHeaders.addListener(
	onBeforeSendHeadersListener,
	{
		urls: ['<all_urls>']
	},
	['blocking', 'requestHeaders']
);