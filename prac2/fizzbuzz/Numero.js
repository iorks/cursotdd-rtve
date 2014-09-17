function Numero() {
}

Numero.prototype.esDivisiblePor3 = function(numero) {
	if (numero % 3 == 0)
		return true;
	else
		return false;
}