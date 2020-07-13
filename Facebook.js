function next() {
	let date = document.getElementById("date");
	let month = document.getElementById("Month");
	let year = document.getElementById("Year");
	let today = new Date();
	let date1 = new Date(year.value,month.value,date.value);
	let diff = Math.abs(today.getTime() - date1.getTime());
	let age = (diff/(1000*3600*24*365.25));
	//document.write(String(age));
	document.getElementById("replace").style.color = "red";
	if (age<13)
	{
		document.getElementById("replace").innerHTML = "<br>You are inelligible to create an account";
	}
	
}