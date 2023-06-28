
const db = require('../db/index.js')




// function authoriseUser(req, res, next) {
//     if (res.locals.user && res.locals.user.id === req.params.id) {
//         return next();
//     } else {
//         req.flash('error', 'Not authorized');
//         res.redirect('/login');
//     }
// }

// function authoriseUser(req, res, next) {
//     if (req.session.userId && res.locals.user.id === req.params.id) {
//         return next();
//     } else {
//         res.redirect('/login');
//     }
// }

function authoriseUser(req, res, next) {
    const postId = req.params.id;
    const userId = req.session.userId;

    const sql = `SELECT * FROM bikes WHERE id = $1 AND user_id = $2;`;

    db.query(sql, [postId, userId], (err, dbRes) => {
        if (err) {
            console.log(err);
        }

        let post = dbRes.rows[0]

        if (!post) {
            console.log('Post not found');
            return res.redirect('/home');
        }

        next();

    })


}


module.exports = authoriseUser

