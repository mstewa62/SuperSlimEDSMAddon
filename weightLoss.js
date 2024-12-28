const topBarArea = document.evaluate("//div[@class='container' and div[count(div)=2]]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
topBarArea.remove();

const bottomBarArea = document.evaluate("//div[@class='container' and div/div/div/div[contains(@id,'responsiveAds')]]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
bottomBarArea.remove();

const sideBars = document.querySelectorAll("div[style*='position: fixed; pointer-events: none; inset:']");
let nodeX;
while(nodeX=sideBars.iterateNext()){
	nodeX.remove();
}

const stackedSpans = document.evaluate("//span[contains(@style,'display: inline; position: fixed; left: 0px; bottom: 0px; width: 100%; min-width: 100%; backdrop-filter: none; background-color: rgba(255, 255, 255, 0.83); z-index: 2147483646; text-align: center; font-size: 0px; line-height: 0; pointer-events: none; overflow: clip; overflow-clip-margin: content-box; visibility: visible;')]", document, null, XPathResult.ANY_TYPE, null);
let nodeY;
while(nodeY=stackedSpans.iterateNext()){
	nodeY.remove();
}

let cookieBar = document.querySelector("div[aria-label='cookieconsent']");
cookieBar.remove();

const apiFrames = document.evaluate("//iframe[contains(@id,'ad') or contains(@name,'ad') or contains(@class,'ad') or contains(@src,'ad')]", document, null, XPathResult.ANY_TYPE, null);
let nodeZ;
while(nodeZ=apiFrames.iterateNext()){
	nodeZ.remove();
}