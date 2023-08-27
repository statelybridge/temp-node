const EventEmitter = require('events');

const customEmitter = new EventEmitter()

//ORDER OF THE LOGIC MATTER HERE
// LISTEN FOR RESPONSE THEN EMIT

customEmitter.on('response',(name,id)=>{
    console.log(`Data received from user ${name} & ${id}`);
})

customEmitter.on('response',()=>{
    console.log(`some other logic here`);
})

customEmitter.emit('response','JOHN',34)
