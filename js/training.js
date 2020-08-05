var trainingInstitution = new Array("Seleccione", "Fundación Proydesa", "Asociación Club de Programadores", "Pragma Consultores", "Capacitarte - UBA - CECE", "TestingBAires", "EducaciónIT");

window.addEventListener('load', function(){
	function search() {
		var trainingSelector = document.getElementById('training');
		var selected = trainingSelector.selectedIndex;
		var training = trainingSelector.options[selected].value;
		var resultHTML = '';
		var numTrainings = trainingInstitution.lenght;
		document.getElementById('result').value = trainingInstitution[trainingSelector.options[selected].value];
	}
    searchBtn.addEventListener('click', search);
});