//this file is like a hub to make all the route files work together
const express = retuire('express');
const router = express.Router();

router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes')); 
router.use(require('./voterRoutes')); 

module.exports = router;
