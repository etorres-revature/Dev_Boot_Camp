const express = require("express");
const {
  getBootcamps,
  getBootcamp,
  creaetBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");
const router = express.Router();

router
    .route("/")
    .get(getBootcamps)
    .post(creaetBootcamp);

router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
