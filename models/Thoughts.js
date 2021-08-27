const {Schema, model} = require('mongoose')
const moment =  require('moment')

const ReactionSchema = new Schema ({
   
    reactionBody:{
        type:String,
        requried:true,
        maxLength:280
    },
    username:{
        type:String,
        requried:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    }
},
{
    toJSON:{
        getters:true
    }
}
)



const ThoughtSchema = new Schema ({
    thoughtText: {
        type:String,
        required:true,
        maxLength: 280
    },
    createdAt:{
        type: Date,
        default: Date.now,
        get:  dateFormat
    },
    username:{
        type:String,
        required: true
    },
    reactions:[ReactionSchema]
},
{
    toJSON:{
        virtuals:true,
        getters:true
    }
}
)


function dateFormat (createdAt) {
    console.log(createdAt)
  return moment(createdAt).format('MM/DD/YYYY')
}

ReactionSchema.virtual('reactionId').get(function() { return this._id; });

ThoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length
})

const Thought = model('Thought', ThoughtSchema)

module.exports = Thought;