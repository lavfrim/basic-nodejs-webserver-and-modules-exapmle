const EventEmitter = require('events');

// const emitter = new EventEmitter();

// emitter.on('anything', (data) => {
//     console.log('ON: anything:', data);
// });

// emitter.emit('anything', { a: 1 });
// emitter.emit('anything', { b: 1 });

// setTimeout(() => {
//     emitter.emit('anything', { c: 3 });
// }, 1000);

class Dispatcher extends EventEmitter {
    subscribe(eventName, callback) {
        console.log('Subscribe...');

        this.on(eventName, callback);
    }

    dispatch(eventName, data) {
        console.log('Dispatching...');

        this.emit(eventName, data);
    }
}

const dispatch = new Dispatcher();

dispatch.dispatch('aa', { aa: 11 });

dispatch.subscribe('aa', (data) => {
    console.log('ON: aa:', data)
});

dispatch.dispatch('aa', { bb: 22 });