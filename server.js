const path = require('path')
const express = require('express')
const generateUniqueId = require('generate-unique-id')
const app = express()
const PORT = 3001
const { updateJSON, readJSON } = require('./saveJSON')
app.use(express.static('public'))
app.use(express.json()) 

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'))
})

app.get('/api/notes', async (req,res) => {
    JSONNotes = await readJSON()
    res.json(JSONNotes)
})

app.post('/api/notes', async (req,res) => {
    const savedNotes = await readJSON()
    const inNotes = req.body
    inNotes.id = generateUniqueId()
    savedNotes.push(inNotes)
    await updateJSON(savedNotes)
    res.json(savedNotes)
})

app.delete('/api/notes/:id', async (req,res)  => {
    const savedNotes = await readJSON()
    const id = req.params.id
    updatedNotes = savedNotes.filter((obj) => obj.id !== id)
    await updateJSON(updatedNotes)
    res.end()
})

app.listen(PORT, () => {
    console.log(`Server.js is listening on port ${PORT}`)
})