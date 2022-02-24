const express = require('express');
const router = new express.Router;
const Task = require('../models/task')

router.post('/tasks', async (request, response) => {
    const task = new Task(request.body);
    try {
        response.send(await task.save())
    } catch (e) {
        response.status(400).send()
    }
    // task.save().then(() => {
    //     response.send(task);
    // }).catch((error) => {
    //     console.log(error);
    //     response.status(400).send(error);
    // })
})

router.get('/tasks', async (request, response) => {
    try {
        response.send(await Task.find())
    } catch (e) {
        response.status(500).send(e)
    }
    // Task.find().then((users) => {
    //     response.send(users)
    // }).catch((error) => {
    //     response.status(500).send(error);
    // })
})

router.get('/tasks/:id', async (request, response) => {
    const _id = request.params.id;
    try {
        const task = await Task.findById(_id)
        if (!task) {
            return response.status(404).send({});
        }
        response.send(task)
    } catch (e) {
        response.status(500).send(e)
    }
})

module.exports = router