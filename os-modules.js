const os = require('os')

//info about current user
const user = os.userInfo();
console.log(user);

//method returns the system up time in secnds
console.log(os.uptime())

const currentOs = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
    platform : os.platform()
}

console.log(currentOs);