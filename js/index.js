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
