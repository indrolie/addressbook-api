const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/', controller.get);
router.get('/:id', controller.getbyId);
router.post('/', controller.add);
router.put('/:id', controller.updatebyId);
router.delete('/:id', controller.deletebyId);
router.delete('/', controller.delete);

module.exports = router;
