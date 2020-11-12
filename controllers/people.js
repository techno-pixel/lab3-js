// requires array of people from models/data
const persons = require ('../models/data');

// controller for people route
exports.people = (req, res, next) => {
    try {
        // returns entire array of people
        res.status(200).json(persons);
    } catch (error) {
        next(error);
    }
};

// controller for person route
exports.person = (req, res, next) => {
    try {
        // create variable that stores parameter id
        let id = req.params.id;
        // create variable that matches parameter id with person id
        let personFound = persons.find((person) => {
            return id == person.id;
        });
        // returns single object of person in response to matching id
        res.status(200).json(personFound);
    } catch (error) {
        next(error);
    }
};