var count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');


function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
    if(count > 9){
        count = 9;
        //após tentativa com stopEventListener, que não deu certo porque ele desabilita de vez o botão, forcei o contador para o número máximo que desejo.
    }
    
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
    if(count < 1){
        count = 1;
        //após tentativa com stopEventListener, que não deu certo porque ele desabilita de vez o botão, forcei o contador para o número mínimo que desejo.
    }
}

subtrair.addEventListener('click', decrement);
somar.addEventListener('click', increment);
