const mongoose = require('mongoose')

let transactionSchema = mongoose.Schema({
    historyVoucherTopup :{
        gameName:{
            type: String,
            require:[true, 'nama game harus diisi']
        },
        category:{
            type: String,
            require:[true, 'kategori harus diisi']
        },
        thumbnail:{
            type: String,
        },
        coinName:{
            type: String,
            require:[true, 'koin harus diisi']
        },
        coinQuantity:{
            type: String,
            require:[true, 'jumlah koin harus diisi']
        },
        price:{
            type: Number,
        },
    },
    historyPayment :{
        name:{
            type: String,
            require:[true, 'nama harus diisi']
        },
        type:{
            type: String,
            require:[true, 'tipe pembayaran harus diisi']
        },
        bankName:{
            type: String,
            require:[true, 'bank pembayaran harus diisi']
        },
        noRekening:{
            type: String,
            require:[true, 'rekening pembayaran harus diisi']
        },
    },
    name:{
        type: String,
        require:[true, 'akun harus diisi'],
        maxlength:[225, 'panjang nama harus antara 3 - 225 karakter'],
        minlength:[3, 'panjang nama harus antara 3 - 225 karakter'],
    },
    accountUser:{
        type: String,
        require:[true, 'nama harus diisi'],
        maxlength:[225, 'panjang nama harus antara 3 - 225 karakter'],
        minlength:[3, 'panjang nama harus antara 3 - 225 karakter'],
    },
    tax:{
        type: Number,
        default:0,
    },
    value:{
        type: Number,
        default:0,
    },

    status : {
        type: String,
        enum : ['pending', 'success', 'failed'],
        default : 'pending'
    },
    player:{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Player' 
    },

    historyUser:{
        name:{
            type: String,
            require:[true, 'user harus diisi']
        },
        phoneNumber:{
            type: Number,
            require:[true, 'akun harus diisi'],
            maxlength:[13, 'panjang nama harus antara 9 - 13 karakter'],
            minlength:[9, 'panjang nama harus antara 9 - 13 karakter'],
        },
    },
    category:{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Player' 
    },
    user:{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Player' 
    },
    
},{timestamp : true})

module.exports = mongoose.model('Transaction', transactionSchema)