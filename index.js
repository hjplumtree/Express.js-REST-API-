app.use(express.json())

app.user((err, req, res, next) => {
    res.status(500)

    res.json({
        result: 'fail',
        error: err.message
    })
})

app.use((req, res, next) => {
    res.status(404)
    res.send({
        result: 'fail',
        error: `Page not found ${req.path}`
    })
})