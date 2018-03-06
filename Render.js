class Render {
    constructor(data) {
        this.data = data;

        this.renderDiv = document.querySelector('.renderDiv');
        this.inputDate = document.querySelector('.inputDate');       //  add elements
        this.inputTime = document.querySelector('.inputTime');       //
        this.errorMessDiv = document.querySelector('.errorMess');    //

        this.month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];    // add moth array
    }

   removeErrorMess() {
       this.errorMessDiv.textContent = '';
   }


    cleanInputs() {                        // add method
        this.inputDate.value = '';         //
        this.inputTime.value = '';         //
    }                                      //

    errorMess() {
        this.errorMessDiv.textContent = 'error: incorrect date';
    }

    renderAlarmClock() {
        let month = this.data.alarmDate.getMonth();              //
        let itemMonth = this.month[month];                      // add itemMonth

        let day = this.data.alarmDate.getDate();
        day < 10 ? day = '0' + day : day;

        let hours = this.data.alarmDate.getHours();
        hours < 10 ? hours = '0' + hours : hours;

        let minutes = this.data.alarmDate.getMinutes();
        minutes < 10 ? minutes = '0' + minutes : minutes;

        let template = `<div data-timeAlarm="${this.data.alarmDate}" class='alarmClock'><div class="firstDiv" contenteditable="true">Input some here...</div><span> ${day} ${itemMonth}, Время события ${hours} : ${minutes}</span><button class="showNotes green-sea-flat-button" onclick="this.parentNode.children[0].classList.toggle('inputNotes');">Notes</button><button onClick="this.parentNode.remove()" class="deleteBtn green-sea-flat-button">Delete</button>`;
        this.renderDiv.insertAdjacentHTML('beforeend', template);
    }
}

export default Render;
