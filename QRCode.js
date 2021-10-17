var qrcode = new QRCode(document.getElementById("qrcode-2"), {
	text: "https://webisora.com",
	width: 128,
	height: 128,
	colorDark : "#5868bf",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H
});