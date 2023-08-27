//commonJS, every file is module by default
// Modules - Encapsulated Code (only share minimum)

const names = require('./names');
const names = require('./utils');
const data = require('./alternatives-flavor');
require('./mind-grenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)