var mongoose =  require('mongoose');
var Schema =  mongoose.Schema;

var paragraphSchema = new Schema({
    id: Schema.Types.ObjectId,
    numberChapter:  Schema.Types.Number,
    theme: Schema.Types.String,
    numberParagraph: Schema.Types.Number,
    subTheme: Schema.Types.String,
    wordDefinition: Schema.Types.String,
    lines: [
        {
            text: Schema.Types.String
        }
    ]
},
{
    collection: 'Chapter_1'
});

var paragraphModel = mongoose.model('paragraph', paragraphSchema);

module.exports = paragraphModel;