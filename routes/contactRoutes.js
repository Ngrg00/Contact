const express = require("express");
const validateToken = require("../middleware/validateToken.js");
const router = express.Router();

const {
    getContacts, 
    getContact,
    createContact,
    updateContact,
    deleteContact
} = require("../controllers/contactController.js");

router.use(validateToken);

router.route('/').get(getContacts);
router.route('/:id').get(getContact);
router.route('/').post(createContact);
router.route('/:id').put(updateContact);
router.route('/:id').delete(deleteContact);

module.exports = router;