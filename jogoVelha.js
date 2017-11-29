
var array = [["", "", ""], ["", "", ""], ["", "", ""]];
var simb = "", cont = 0;

//Função pra trocar o simbolo do label e indicar qual jogador joga 
function trocaSimb() {
	simb = $("#jogador").text();
	if (simb == 'X') {
		$("#jogador").text('O');
	} else {
		$("#jogador").text('X');
	}
}

function checaHorizontal() {
	for (var lin = 0; lin < 3; lin++) {
		var combinacao = "";
		for (var col = 0; col < 3; col++) {
			combinacao += array[lin][col];
		}
		if (combinacao == "XXX" || combinacao == "OOO") {
			setTimeout(function () {
				alert("O Jogador " + simb + " Ganhou!");
			}, 1);
			cont = 0;
		}
		return;
	}
}

function checaVertical() {
	for (var lin = 0; lin < 3; lin++) {
		var combinacao = "";
		for (var col = 0; col < 3; col++) {
			combinacao += array[col][lin]
		}
		if (combinacao == "XXX" || combinacao == "OOO") {
			setTimeout(function () {
				alert("O Jogador " + simb + " Ganhou!");
			}, 1);
			cont = 0;
		}
		return;

	}
}

function checaDiagonalP() {
	var combinacao = "";
	combinacao += array[0][0]
	combinacao += array[1][1]
	combinacao += array[2][2]

	if (combinacao == "XXX" || combinacao == "OOO") {
		setTimeout(function () {
			alert("O Jogador " + simb + " Ganhou!");
		}, 1);
		cont = 0;
	}
	return;
}

function checaDiagonalS() {
	combinacao = "";
	combinacao += array[0][2]
	combinacao += array[1][1]
	combinacao += array[2][0]

	if (combinacao == "XXX" || combinacao == "OOO") {
		setTimeout(function () {
			alert("O Jogador " + simb + " Ganhou!");
		}, 1);
		cont = 0;
	}

	return;
}

function deuVelha() {
	if (cont == 9) {
		setTimeout(function () {
			alert("Deu Velha!");
		}, 1);
	}
}

$("button[name^='b']").click(function() {
	simb = $("#jogador").text();
	$(this).text(simb);
	var posB1 = $(this).val().split('-');
	// posição do array split
	array[posB1[0]][posB1[1]] = simb;
	cont += 1;
	$(this).prop("disabled", true);
	trocaSimb();
	checaHorizontal();
	checaVertical();
	checaDiagonalP();
	checaDiagonalS();
	deuVelha();
	
});

$("#novoJ").on("click",function(){
	location.reload();
});
