const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rolesSchema = new Schema({
    id: String,
    name: String,
    description: String
});

const rolesModel = mongoose.model("roles", rolesSchema);

module.exports = rolesModel;