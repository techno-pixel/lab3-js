const {people, person} = require('../controllers/people');

module.exports = router => {
    // GET "http://localhost:4000/people";
    router.get('/people', people);

    // GET "http://localhost:4000/people";
    router.get('/people/:id', person);
};