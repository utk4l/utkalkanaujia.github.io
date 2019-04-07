

function initChangeText()
	{
	var time = 10;
	setInterval('changeText();',time*1000);
	}
function changeText()
	{
	var divs_ = document.getElementsByTagName("div")
	for (var i = 0;i<divs_.length;i++)
		if (divs_[i].className == "change")
			changeULText(divs_[i]);

	}
function changeULText(obj)
	{
	var ul = obj.getElementsByTagName("ul")[0];
	var li = obj.getElementsByTagName("li");
	for (var i=0;i<li.length;i++)
		{
		if (li[i].className == "show")
			{
			li[i].className = "";
			li[(i+1)%li.length].className = "show";
			return ;
			}
		}
	}
window.onload = initChangeText;
