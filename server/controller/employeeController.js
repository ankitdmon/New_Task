const Review = require("../models/Review");

// Get performance reviews
exports.getPerformanceReviews = async (req, res) => {
  try {
    const { userName } = req.body;
    const performanceReviews = await Review.find({
      "employee.userName": userName,
    });
    console.log(performanceReviews);
    res.json(performanceReviews);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Submit feedback for a performance review
exports.submitFeedback = async (req, res) => {
  try {
    const { userName, otherUserName, feedback } = req.body;
    const addReview = await Review.create({
      reviewer: { userName, fullName },
      employee: { userName: otherUserName, fullName: otherFullName },
      feedback,
    });

    console.log(res.json({ addReview }));
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
};
