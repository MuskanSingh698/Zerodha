const { model } = require("mongoose")

const {PositonsSchema} = require('../schemas/PositionsSchema')

const PositionsModel = new model("position",PositonsSchema);

module.exports= {PositionsModel};
