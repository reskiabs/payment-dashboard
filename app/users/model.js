const mongoose = require('mongoose')

let userSchema = mongoose.Schema({
    type : {
        type: String,
        require:[true, 'Email harus diisi']
    }, 
    name : {
        type: String,
        require:[true, 'Nama harus diisi']
    }, 
    password : {
        type: String,
        require:[true, 'password harus diisi']
    }, 
    status : {
        type: String,
        enum : ['admin', 'user'],
        default : 'admin'
    },
    status : {
        type: String,
        enum : ['Y', 'N'],
        default : 'Y'
    },
    phoneNumber : {
        type: String,
        require:[true, 'Nomor telpon harus diisi']
    }, 
    
},{timestamp : true})

module.exports = mongoose.model('User', userSchema)