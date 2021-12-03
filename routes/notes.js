const {Router} = require('express')
const Note = require('../models/note')

const router = Router()

router.get('/', (req, res, next) => {
    const notes = Note.list()
    res.json(notes)
})