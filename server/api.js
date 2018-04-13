const bodyParser = require('body-parser');
import {checkJwt} from './jwtValidation'

export const configure = (app) => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }))

  app.get('/api/hello', (req, res) => {
    res.send({express: 'Hello From Express'})
  })

  app.post('/api/submitData', checkJwt, (req, res) => {
    const data = req.body
    res.send({express: 'Submitted Data: ' + JSON.stringify(data)})
  })
}