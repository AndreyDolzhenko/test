// СЕКУНДОМЕР
//Функция запрашивает время в секундах, преобразует секунды в часы, минуты, секунды и запускает секундомер с выводом в div id="timeScroll".
function timer(timeTest){
    
    setInterval(() => {
        timeTest-=1;
        if (timeTest>0) {                
            timeScroll.innerHTML=`${Math.trunc(timeTest/3600)} ч. ${Math.trunc(timeTest/60)} м. ${timeTest>59?timeTest%60:timeTest} сек.`;
            console.log(timeTest);
        }else{
            timeScroll.innerHTML='Время вышло!';
            button[0].setAttribute('disabled', 'disabled');
            button[1].setAttribute('disabled', 'disabled');
            button[2].setAttribute('disabled', 'disabled');
            if (timeTest%2==0) {
                timeScroll.style.color='red';
            }else{
                timeScroll.style.color='green';
            }
            //console.log(timeTest);
        }
    }, 1000);

}
