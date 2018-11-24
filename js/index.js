function resize() {
	var list1 = document.getElementById("list1");
	var list2 = document.getElementById("list2");
	list1.classList.remove("one", "two", "three");
	list2.classList.remove("one", "two", "four");
	if (window.innerWidth < 540) {
		list1.classList.add("one");
		list2.classList.add("one");
	} else if (window.innerWidth < 992) {
		list1.classList.add("two");
		list2.classList.add("two");
	} else {
		list1.classList.add("three");
		list2.classList.add("four");
	}

	var steps1 = document.getElementById("steps18");
	var steps2 = document.getElementById("steps20");
	steps1.classList.remove("vertical")
	steps2.classList.remove("vertical")
	if (window.innerWidth < 1200) {
		steps1.classList.add("vertical")
		steps2.classList.add("vertical")
	}
}

resize(); // init

function update() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'data.json', false);
	xhr.send(null);
	var data = JSON.parse(xhr.response);

	for (i=0; i<10; i++) {
		var percent = data[i] / data[10] * 100;

		document.getElementById("votes" + (i+7)).innerText = data[i];
		document.getElementById("percent" + (i+7)).innerText = percent.toFixed(2) + "%";

		var bar = document.getElementById("bar" + (i+7));
		bar.style.width = data[i] / data[10] * 200 + "%";
		if (percent < 20)
			bar.classList.add("negative");
		else if (percent < 30)
			bar.parentElement.classList.add("active")
		else
			bar.classList.add("positive")
	}

	document.getElementById("bar").style.width = data[11] / data[12] * 100 + "%";
	document.getElementById("count").innerText = "開票進度：" + data[11] + " / " + data[12] + " (將自動更新)";
}

setInterval(update, 10000);
update();
