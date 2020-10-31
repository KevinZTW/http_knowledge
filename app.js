const express = require('express')
const app = express()
let { PythonShell } = require('python-shell')

app.listen(3000, () => {
  console.log('server running on port 3000')
})

app.get('/call/python', pythonProcess)

function pythonProcess(req, res) {
  let options = {
    args:
      [
        req.query.name,
        req.query.from
      ]
  }

  PythonShell.run('./process.py', options, (err, data) => {
    if (err) res.send(err)
    const parsedString = JSON.parse(data)
    console.log(`name: ${parsedString.Name}, from: ${parsedString.From}`)
    res.json(parsedString)
  })
}
