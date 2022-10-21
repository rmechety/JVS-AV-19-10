export function changevaluewithid(id, value) {
	document.getElementById(id).innerHTML = value;
	// $("#" + id).html(value);
}

export function changedisplaywithid(id, value) {
	document.getElementById(id).style.display = value;
}
