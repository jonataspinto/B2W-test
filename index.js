let unirest = require("unirest");
const cheerio = require("cheerio")

function getProduct(url){

  let req = unirest("GET", url);

  req.headers({
    "cache-control": "no-cache",
    "Connection": "keep-alive",
    "accept-encoding": "gzip, deflate",
    "cookie": "MobileOptOut=1; b2wDevice=eyJvcyI6IiIsIm9zVmVyc2lvbiI6IiIsInZlbmRvciI6IiIsInR5cGUiOiJkZXNrdG9wIiwibWt0TmFtZSI6IiIsIm1vZGVsIjoiIiwibW9iaWxlT3B0T3V0IjoiZmFsc2UifQ==; b2wDeviceType=desktop; b2wChannel=ACOM; B2W-IU=false",
    "Host": "www.americanas.com.br",
    "Postman-Token": "e93d4cb1-91a6-4277-a13f-f55e2b48cfc5,b17a2b7b-36d7-4924-903c-c2b9b5b657f3",
    "Cache-Control": "no-cache",
    "Accept": "*/*",
    "User-Agent": "PostmanRuntime/7.15.0"
});

req.end(res => {
  if (res.error) throw new Error(res.error);
  const $=cheerio.load(res.body)
	
 	//Obter seletores do produto
	let name = $("h1.product-name").text()
	let id = $("span.product-id").text()
	let price = $("p.sales-price").text()
	let seller = $("div.seller-name-container span strong").text()
	let img = $(".gallery-product a").attr("href")
	
	let breadcrumb = []	
	const breadcrumbItens = $(".product-breadcrumb > div")
	
 	//percorre e insere itens no array do breadcrumb
	for(let i=0; i < breadcrumbItens.length; i++)
	{
		breadcrumb.push($(breadcrumbItens[i]).text())
	}
	
 	//Trata dados dos seletores
	id = id.substring(5,id.length -1)
	id = parseInt(id)
	price = price.substring(3)
	price = price.replace(".","")
	price = price.replace(",",".")
	price = parseFloat(price)
	
 	//gera objeto para impressão
	const product = 
	{
		id,
		breadcrumb,
		name,		
		img,
		seller,		
		price
	}
	
	console.log(product)
});
}


getProduct("https://www.americanas.com.br/produto/133718358/smart-tv-led-50-lg-50uk6510-ultra-hd-4k-com-conversor-digital-4-hdmi-2-usb-wi-fi-thinq-ai-webos-4-0-60hz-inteligencia-artificial-prata/")

// // module.exports = getProduct

