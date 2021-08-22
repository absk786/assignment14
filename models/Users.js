const {Schema, model} = require('mongoose')

const UsersSchema = new Schema ({
    username: {
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    email:{
        type: String,
        required:true,
        unique: true,
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: 'Email address is required',
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        }
    },
    thoughts:[
        {
            type:Schema.Types.ObjectId,
            ref:'Thought'
        }
    ],
    friends: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }
]
},
{
    toJSON:{
        virtuals:true,
        getters:true
    }
}
)


UsersSchema.virtual('friendCount').get(function () {
    console.log(this.friends.length)
    return this.friends.length
})

const Users = model('Users', UsersSchema)

module.exports = Users