const express = require('express');
const members = require('../../UserData');

const users = require('../../UserData')

const router = express.Router();



//Getting all users
router.get('/', (req, res) => res.json(users))

//Getting single user
router.get('/:id', (req, res) => {
    res.json(users.filter(user => user.id === parseInt(req.params.id)));
})


//creating User//should use body parser
router.post('/', (req, res) => {

    const newUser = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    users.push(newUser);

    res.json(users);

})


//updating user
router.put('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))
    if (found) {
        users.forEach(user => {
            if (user.id === parseInt(req.params.id)) {
                const upUser = req.body;
                user.name = upUser.name;
                user.email = upUser.email;

                res.json({ msg: "uer updated", user });
            }
        })

    }

})


// Delete User

router.delete('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))
    if (found) {
        res.json({
            msg: "User Deleted",
            user: users.filter(user => user.id !== parseInt(req.params.id))
        })
    }
})


module.exports = router;