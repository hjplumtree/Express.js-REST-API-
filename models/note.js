let notes = [
    {
        id: 1,
        title: 'first note',
        content: 'My first note is here.'
    }
]

exports.list = () => {
    return notes.map(({ id, title }) => ({
        id,
        title
    }))
}