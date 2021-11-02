const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlantsSchema = new Schema(
    {
        name: { type: String, require: true },
        specie: { type: String, require: true },
        
        image:{ type:String, require:true},
    },
    { timestamps: true }
);

const Plants = mongoose.model("plants", PlantsSchema);
module.exports = Plants;