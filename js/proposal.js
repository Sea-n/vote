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

function resize() {
	var opinions = document.getElementById("opinions");
	opinions.classList.add("one");
	return;

	opinions.classList.remove("one", "two", "three");
	if (window.innerWidth < 540)
		opinions.classList.add("one");
	else if (window.innerWidth < 992)
		opinions.classList.add("two");
	else
		opinions.classList.add("three");
}

resize(); // init

if (document.referrer.match(/https:\/\/sean\.cat\/vote\/(\?.*)?/)) {
	document.getElementById("home").onclick = () => {
		history.back();
		return false;
	}
}
