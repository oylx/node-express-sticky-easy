var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/notes', function(req, res, next) {
    console.log('/notes')
});
router.post('/note/create',function (req, res, next) {
    console.log('/create')
});
router.post('/note/edit',function (req, res, next) {
    console.log('/edit')
})
router.post('/note/delete',function (req, res, next) {
    console.log('/delete')
})

module.exports = router;
