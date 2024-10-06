const router = require("express").Router()
const { getTripList, addWishList, getPropertyList, getReservationList } = require("../controllers/user")

/* GET TRIP LIST */
router.get("/:userId/trips", getTripList)

/* ADD LISTING TO WISHLIST */
router.patch("/:userId/:listingId", addWishList)

/* GET PROPERTY LIST */
router.get("/:userId/properties", getPropertyList)

/* GET RESERVATION LIST */
router.get("/:userId/reservations", getReservationList)


module.exports = router