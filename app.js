function newItem() {
  var item = document.getElementById("input").value;
  var ul = document.getElementById("list");
  var li = document.createElement("li");
	/*for (var i = 0; i < li.length; i++)
	{
			var a = document.createElement("BUTTON");
			var b = document.createTextNode("Delete");
			a.className = "close";
			a.appendChild(b);
			li[i].appendChild(a);
	}*/
  li.appendChild(document.createTextNode(item));
  ul.appendChild(li);
  document.getElementById("input").value = "";
  li.onclick = removeItem;
}

document.body.onkeyup = function(e) {
  if (e.keyCode == 13) {
    newItem();
  }
};
