function errorHandler(err, req, res, next) {
  console.error(err);
  // Handle different errors here
  res.status(500).send({ error: err.message });
}

module.exports = errorHandler;
