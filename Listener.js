class Listener {
    constructor(data, render) {
        this.data = data;
        this.render = render;

        this.createAlarmClock = document.querySelector('.createAlarmClock');
        this.inputDate = document.querySelector('.inputDate');
        this.inputTime = document.querySelector('.inputTime');

        this.interval = setInterval(()=>{
            this.alarmWatcher();
        }, 2000);
    }

    alarmWatcher() {
        let dateNow = new Date();

        let allAlarmCounter = document.querySelectorAll('.alarmClock');
        let arrAlarmCounter = [...allAlarmCounter];

        if (arrAlarmCounter.length > 0) {
            arrAlarmCounter.forEach((elem)=>{
                let dateAlarm = new Date(elem.getAttribute('data-timeAlarm'));

                if (dateNow > dateAlarm){
                    alert(`${elem.children[0].textContent.trim()}`);
                    elem.remove();
                }
            });
        }
    }

    initApp() {
        this.createAlarmClock.addEventListener('click', () => {
            this.vereficateMess();
        });

        this.inputDate.addEventListener('focus', () => {              // add remove error mess
            this.render.removeErrorMess();                            //
        });                                                          //
                                                                    //
        this.inputTime.addEventListener('focus', () => {           //
            this.render.removeErrorMess();                         //
        });                                                       //
    }

    vereficateMess() {
        let date = this.inputDate.value;
        let time = this.inputTime.value;

        let dateNow = new Date();
        let alarmDate = new Date(date);
        let timeParse = time.split(':');

        alarmDate.setHours(timeParse[0]);
        alarmDate.setMinutes(timeParse[1]);

        if (alarmDate > dateNow) {
            this.data.alarmDate = alarmDate;

            this.render.renderAlarmClock();
        } else {
            this.render.errorMess();
        }

        this.render.cleanInputs();                  //  add
    }
}

export default Listener;
