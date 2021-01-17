var datakomen = [

];
function showkomen(){
	var listkomen = document.getElementById("list-komen");
	// clear list komen
	listkomen.innerHTML = "";
	
	// cetak semua komen
	for(let i = 0; i < datakomen.length; i++){
		var btnEdit = "<a href='#' onclick='editkomen("+i+")'>Edit</a>";
		var btnHapus = "<a href='#' onclick='deletekomen("+i+")'>Hapus</a>";

		listkomen.innerHTML += datakomen[i] + " ["+btnEdit + " | "+ btnHapus +"]";
	}
}
function addkomen(){
	var input = document.querySelector("input[name=komen]");
	datakomen.push(input.value);
	showkomen();
}
function editkomen(id){
	var newkomen = prompt("Nama baru", datakomen[id]);
	datakomen[id] = newkomen;
	showkomen();
}
function deletekomen(id){
	datakomen.splice(id, 1);
	showkomen();
}
showkomen();