const monthNames = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December',
  ];

module.exports = {
    index,
};

function index(req, res) {
    // calander system
    let year = parseInt(req.query.year);
    let month = parseInt(req.query.month);

    // convert to switch
    if (month === -1) {
        year--;
        month = 11;
    } else if (month === 12) {
        year ++;
        month = 0;
    }

    // default to current day and year of none is specified
    if (!year) {
        const today = new Date();
        year = today.getFullYear();
        month = today.getMonth();
    }

    const daysInMon = new Date(year, month + 1, 0).getDate();
    const dow = new Date(year, month, 1).getDate() + 1;
    res.render('calendar', { title: 'Calendar', year, monthNames, month, daysInMon, dow })
}