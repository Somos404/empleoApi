const router = require('express').Router()
const { Sliders } = require('../../db')
router.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "user-token", "Origin", "Content-Type", "Accept"
  );
  next();
});

router.get('/', async (req, res) => {

	const response = await Sliders.findAll()
    res.status(200).send({
		ok: true,
		res: response,
	});
})


module.exports = router