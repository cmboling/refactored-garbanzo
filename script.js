function loadSomeRecords(someList, element) {
	if(someList) {
		var someDisplayedList = document.getElementById(element);
		var nextRecords = someDisplayedList.innerHTML;

		// Alert - Declarations/UnusedVariable.ql
		var size = 1 + 1;

		someList.forEach(item => {
			nextRecords += `<li><a href="#" onclick="logResults('${item}');">${item}</a></li>`
		})

		someDisplayedList.innerHTML = nextRecords;
	}
}

function logResults(name) {
  eval("console.log('This is a result: ' + name)");
}

function f() {
    x = 22;
    let x;
}
