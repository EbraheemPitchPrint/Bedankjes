const apiSchema = new Schema({
    apiKey: String,
});

const apiModel = mongoose.model('Api', apiSchema);