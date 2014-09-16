var Calculadora = {

	errMsg: 'No negativos',
	hasError: false, 

	getNumber : function (number){
		var result=0;
		if (number != '')
			result = parseInt(number);
		if (result < 0) {
			Calculadora.errMsg += ' ' + number;
			Calculadora.hasError = true;
		}
		return number==""?0:parseInt(number);
	},

	add : function (numbers){

		//var res = numbers.match("/()()/");

		var result = 0;
		var delimiter = "";
		if (numbers.indexOf("//")!=-1){
			delimiter = numbers.substring(2,3);
			numbers = numbers.substring(3, numbers.length);
		}

console.log(delimiter);
		var regExp = "[,\\n" + delimiter + "]";
console.log(regExp);
		var myregexp = new RegExp(regExp);
		var array = numbers.split(myregexp);

		for (i=0; i<array.length; i++){
			result += Calculadora.getNumber(array[i]);
		}

		if (Calculadora.hasError){
			throw Calculadora.errMsg;
		}

		return result;
	}
}