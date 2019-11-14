const requestHandler = (req, res) => {
  const { code, data } = res.locals;

  res.status(code).json({ data });
};

module.exports = requestHandler;
