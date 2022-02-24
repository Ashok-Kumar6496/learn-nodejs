const express = require('express');
const router = new express.Router;
const User = require('../models/user')
const bcrypt = require('bcrypt')


router.post('/users/login', async (request, response) => {
    try {
        const user = await User.findByCredentials(request.body.email, request.body.password);
        const token = await user.generateJsonWebToken();
        response.send({ user, token });
    } catch (e) {
        response.status(400).send(e.message);
    }
})
router.post('/users', async (request, response) => {
    const user = new User(request.body);

    try {
        if (!user.password) {
            return response.status(400).send('Error: Password is required!!')
        }
        user.password = await bcrypt.hash(user.password, 8);
        await user.save()
        const token = await user.generateJsonWebToken()
        response.send({ user, token })
    } catch (e) {
        response.status(400).send(e)
    }
    //Above lines are using async and await concept which ll improve performance
    // user.save().then(() => {
    //     response.status(201).send(user);
    // }).catch((e) => {
    //     response.status(400).send(e)
    // })
})

router.put('/users/:id', async (request, response) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(request.params.id, request.body, { new: true, runValidators: true })
        if (!updatedUser) {
            response.status(401).send()
        }
        response.send(updatedUser);
    } catch (e) {
        response.status(400).send(e);
    }
})

router.delete('/users/:id', async (request, response) => {
    try {
        const user = await User.findByIdAndDelete(request.params.id)
        if (!user) {
            return response.status(404).send();
        }
        response.send(user);
    } catch (e) {
        response.status(500).send()
    }
})

router.get('/users', async (request, response) => {

    try {
        const users = await User.find();
        const totalCount = await User.countDocuments();
        response.send({ totalCount, users })
    } catch (e) {
        response.status(500).send(e)
    }
    // User.find().then((users) => {
    //     response.send(users);
    // }).catch((error) => {
    //     response.status(500).send(error);
    // })
})

router.get('/users/:id', async (request, response) => {
    const _id = request.params.id;
    try {
        const user = await User.findById(_id);
        if (!user) {
            return response.status(404).send({})
        }
        response.send(user)
    } catch (e) {
        response.status(500).send(e)
    }
    // User.findById(_id).then((user) => {
    //     if (!user) {
    //         return response.status(404).send();
    //     }
    //     response.send(user);
    // }).catch((error) => {
    //     response.status(500).send(error)
    // })
})

module.exports = router