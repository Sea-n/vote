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


window.addEventListener("scroll", function () {
    var nav = document.getElementsByTagName("nav")[0];
    var body = document.getElementsByTagName("body")[0];
    if (window.scrollY > 200) {
        nav.classList.add("fixed");
        body.style.top = "40px";
    }
    if (window.scrollY < 20) {
        nav.classList.remove("fixed");
        body.style.top = "0px";
    }
});

window.onload = () => {
	var cd = document.getElementById("countdown");
	var end = new Date("Nov 24, 2019 16:00:00 UTC+8").getTime();
	setInterval(() => {
		var now = new Date().getTime();
		var dist = (end - now) / 1000;
		var hr = Math.floor((dist % (60 * 60 * 24)) / (60 * 60));
		var min = Math.floor((dist % (60 * 60) / 60));
		var sec = Math.floor(dist % 60);
		cd.innerHTML = hr + ":" + min + ":" + sec;
	}, 500);
}
