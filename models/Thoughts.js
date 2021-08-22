const {Schema, models} = require('mongoose')

const ThoughtSchema = new Schema ({
    thoughtText: {
        type:String,
        required:true,
        //length between 1-280
    },
    createdAt:{
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username:{
        type:String,
        required: true
    },
    reactions:{ReactionSchema}
},
{
    toJSON:{
        virtuals:true,
        getters:true
    }

}
)
const ReactionSchema = new Schema ({
    reactionId:{
        type:Schema.Types.ObjectId,
        default: () => new types.ObjectId()
    },
    reactionBody:{
        type:String,
        requried:true,
        //max 280 chars
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

ThoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length
})

const Thought = model('Thought', ThoughtSchema)

module.exports = Thought;