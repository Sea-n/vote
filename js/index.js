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

	var steps = document.getElementById("steps");
	steps.classList.remove("vertical")
	if (window.innerWidth < 1200) {
		steps.classList.add("vertical")
	}
}

resize(); // init
