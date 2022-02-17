window.onload = function() {
    var segundos = 00;
    var minutos = 00;
    var AnexarMin = document.getElementById('minutos');
    var AnexarSeg = document.getElementById('segundos');
    var comecar = document.getElementById('comecar');
    var parar = document.getElementById('parar');
    var recomecar = document.getElementById('recomecar');
    var intervalo;

    comecar.onclick = function() {
        clearInterval(intervalo);
        intervalo = setInterval(comecarTempo, 10);
    }
    parar.onclick = function() {
        clearInterval(intervalo);
    }
    recomecar.onclick = function() {
        clearInterval(intervalo);
        minutos = '00';
        segundos = '00';
        AnexarMin.innerHTML = minutos;
        AnexarSeg.innerHTML = segundos;
    }

    function comecarTempo() {
        minutos++;
        if(minutos <= 9){
        AnexarMin.innerHTML = '0'+minutos;
        }if(minutos > 9){
            AnexarMin.innerHTML = minutos;
        }
        if (minutos>99){
            console.log('segundos');
            segundos++;
            AnexarSeg.innerHTML = '0' + segundos;
            minutos= 0;
            AnexarMin.innerHTML = '0' +0;
        } if  (segundos > 9){
            AnexarSeg.innerHTML = segundos;
        }
    }

}