//Программисту 0 лет

setInterval(
	function()
	{
		const bg = $("#img").css("background-image");
		if(bg.indexOf("images/1.jpg") > 0)
		{
			$("#img").css("background-image", "url(images/2.jpg)");
		}
		else if(bg.indexOf("media/2.jpg") > 0)
		{
			$("#img").css("background-image", "url(images/3.jpeg)");
		}
		else
		{
			$("#img").css("background-image", "url(images/1.jpg)");
		}
	}
	,5000);

var price_output = document.getElementById("price_output");

function getPrice()
{
	price_output.innerHTML = "Цена изделия: " + $("#products").val() + " руб.";
}