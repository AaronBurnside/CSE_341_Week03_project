const express = require('express');
const router = express.Router();
const C1Controller = require('../controller/C1');
const validation = require('../middleware/validate');

router.get('/', C1Controller.getAll);
router.get('/:id', C1Controller.getSingle);


router.post('/', validation.saveItem, C1Controller.createItem);
router.put('/:id',validation.saveItem, C1Controller.updateItem);
router.delete('/:id', C1Controller.deleteItem);


module.exports = router;