const Plants = require("../models/plants");
const HTTPSTATUSCODE = require("../../../app/utils/httpStatusCode");


const createPlants = async (req, res, next) => {
    try {
        const newPlants = new Plants();
        newPlants.name = req.body.name;
        newPlants.specie = req.body.specie;  
        newPlants.image = req.body.image;
        const PlantsDb = await newPlants.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { plants: PlantsDb.name }
        })
    } catch (error) {
        return next(error);
    }
}

const getAllCharacter = async (req, res, next) => {
    try {
        // Si no pasais paginación por query params quitar el if
        if (req.query.page) {
            const page = parseInt(req.query.page);
            const skip = (page - 1) * 20;
            const plants = await Plants.find().skip(skip).limit(20);
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { Plants: plants }
            });
        } else {
            const plants = await Plants.find();
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { Plants: plants }
            });
        }
    } catch (error) {
        return next(error)
    }
}

const getPlantsById = async (req, res, next) => {
    try {
        const { PlantsId } = req.params;
        const PlantsById = await Plants.findById(PlantsId);
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { Plants: PlantsById }
        })
    } catch (error) {
        return next(error)
    }
}

module.exports = { createPlants, getAllCharacter, getPlantsById };