window.onload = () => {
	document.getElementById("countdown").innerHTML = Math.ceil((1543003200000 - new Date().getTime()) / 1000 / 60 / 60 / 24);
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
	opinions.classList.remove("one", "two", "three");
	if (window.innerWidth < 540)
		opinions.classList.add("one");
	else if (window.innerWidth < 992)
		opinions.classList.add("two");
	else
		opinions.classList.add("three");
}

resize(); // init
