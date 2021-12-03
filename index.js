app.use(express.json())

app.user((err, req, res, next) => {
    res.status(500)

    res.json({
        result: 'fail',
        error: err.message
    })
})