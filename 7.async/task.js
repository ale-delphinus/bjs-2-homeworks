class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if(!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        } else if(this.alarmCollection.some((alarm) => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это время');
        }
        this.alarmCollection.push({time, callback, canCall: true});
    }

    removeClock(time) {
        this.alarmCollection.filter((alarm) => alarm.time !== time);
    }

    getCurrentFormattedTime() { // Не понимаю, как расписать этот метод
        return
    }

    start() {
        if(this.intervalId) {
            return;
        }
        this.intervalId = setInterval(() => this.alarmCollection.forEach((alarm) => {
            if(alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
                alarm.canCall = false;
                alarm.callback();
            }
        }), 1000)
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((alarm) => (alarm.canCall = true))
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}