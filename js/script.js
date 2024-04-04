function calculate() {
    try {
        let weightInput = document.getElementById('weight-input');
        console.log(weightInput.value);
            var heightInput = document.getElementById('height-input');
            console.log(heightInput.value);
                 var resultElement = document.getElementById('result-input');
                 let result = +weightInput.value/(+heightInput.value*+heightInput.value);
                 resultElement.innerHTML = result;
                      if (result <18.5) {
                      console.log('Kekurangan Berat badan');
                      } else if (result >=18.5 && result <24.9) {
                        console.log('normal');
                      } else if (result >=25.0 && result <29.9) {
                        console.log('Kelebihan berat badan');
                      } else if (result >=30.0) {
                        console.log('Kegemukan(Obesitas)');
                      }
        if (weightInput.value === ''||heightInput.value === '') {
            console.log('fail');
            alert('weight/height an not be Empty');
        } else {
            console.log('succeed');
        }
    } catch (error) {
        console.log(error);
    }
}