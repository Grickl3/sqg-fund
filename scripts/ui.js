

function openBox(trigger,box) {
	console.log("clicked");
	box.classList.toggle('post__closed');
	trigger.classList.toggle('post__trigger-rotated');
}