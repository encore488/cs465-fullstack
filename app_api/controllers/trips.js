const mongoose = require('mongoose');
const model = mongoose.model('trips');

// GET /trips
const tripsList = async (req, res) => {
    model
        .find()
        .exec((err, trips) => {
            if (!trips) {
                return res
                    .status(404)
                    .json({ "message": "trips not found" });
                return;
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trips);
            }
        });
    };

// GET /trips/:tripCode
const tripsFindCode = async (req, res) => {
    model
        .find({ tripCode: req.params.tripCode })
        .exec((err, trip) => {
            if (!trip) {
                return res
                    .status(404)
                    .json({ "message": "trip not found" });
                return;
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trip);
            }
        });
}

module.exports = {
    tripsList,
    tripsFindCode
};