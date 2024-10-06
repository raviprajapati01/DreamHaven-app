const { CreateBooking } = require("../controllers/booking")

const router = require("express").Router()


/* CREATE BOOKING */
router.post("/create", CreateBooking)

module.exports = router



// const router = require("express").Router();
// const Booking = require("../models/Booking");

// /* CREATE BOOKING */
// router.post("/create", async (req, res) => {
//   try {
//     const { customerId, hostId, listingId, startDate, endDate, totalPrice } = req.body;

//     // Validate that all required fields are present
//     if (!customerId || !hostId || !listingId || !startDate || !endDate || !totalPrice) {
//       return res.status(400).json({ message: "All fields are required!" });
//     }

//     // Create a new booking
//     const newBooking = new Booking({
//       customerId,
//       hostId,
//       listingId,
//       startDate,
//       endDate,
//       totalPrice,
//     });

//     console.log("newBooking is: ", newBooking);

//     // Save the booking to the database
//     await newBooking.save();

//     // Respond with the created booking
//     res.status(200).json(newBooking);
//   } catch (err) {
//     console.log("Error creating booking:", err);
//     res.status(400).json({
//       message: "Failed to create a new booking!",
//       error: err.message,
//     });
//   }
// });

// module.exports = router;
