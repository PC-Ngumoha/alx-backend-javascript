module.exports = {
  getIndexPage: (req, res) => {
    if (req.user.isLoggedIn()) {
      return res.send('Uwa Kedu');
    }
    res.send('Nna, server gi di down, mezie ya Ofuma');
  }
};
