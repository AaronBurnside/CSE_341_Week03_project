const validator = require('../helpers/validate')
const saveItem = (req, res, next) => {
    const validationRule = {
        ItemName: 'required|string',
        Department: 'required|string',
        Store: 'required|string',
        City: 'required|string',
        Stock: 'required|int',
        Price: 'required|float',
        Aisle: 'required|int'
    };
    validator(req.body, validationRule, {}, (err,status)=>{
        if (!status){
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else{
            next();
        }
    });
};

module.exports = {
    saveItem
};


