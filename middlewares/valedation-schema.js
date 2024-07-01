const { body } = require('express-validator');

const validationScrema = () => {
    return [
        body('title')
            .notEmpty()
            .withMessage("title can't be empty")
            .isLength({ min: 2 })
            .withMessage("title length must be more than 2"),
        body('price').notEmpty().withMessage("price can't be")
    ];
};

module.exports = {
    validationScrema
};