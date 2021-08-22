const {Schema, model} = require('mongoose')

const UsersSchema = new Schema ({
    username: {
        type: String,
        required: true,
        trimmed: true,
        unique:true
    },
    email:{
        type: String,
        required:true,
        unique: true,
        //validate email
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
    return this.friends.reduce(
        (total) => total 
    )
})

const Users = model('Users', UsersSchema)

module.exports = Users