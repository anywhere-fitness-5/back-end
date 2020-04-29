const db = require('../data/dbConfig');
const bcrypt = require('bcrypt');

module.exports = {
    add
}

function add(classes){
    const classname = classes.classname;
    const intensity = classes.intensity;

    returndb('classes')
    .insert({
        classname,
        intensity
    })
}