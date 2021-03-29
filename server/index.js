const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { table, getBorderCharacters } = require("table");
const chalk = require('chalk');
const ProblemRouter = require('./Routes/ProblemRouter')
const path = require('path')

const db = require('./db');
const DeveloperRouter = require('./Routes/DeveloperRouter');
const CompanyRouter = require('./Routes/CompanyRouter');
const ContestRouter = require('./Routes/ContestRouter');
const SubmitRouter = require('./Routes/SubmitRouter');
const RankRouter = require('./Routes/RankRouter');

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static(path.join(__dirname, "public")))

const port = process.env.PORT || 4000

db()

app.use('/problem', ProblemRouter)
app.use('/user', DeveloperRouter)
app.use('/admin', CompanyRouter)
app.use('/contest', ContestRouter)
app.use('/submit', SubmitRouter)
app.use('/rank', RankRouter)

app.get('/', (req, res) => {
  res.send('health full')
})

app.listen(port, () => {

  let config,
    data;

  data = [
    [chalk.magentaBright('PORT'), process.env.PORT],
    [chalk.magentaBright('MONGO_URL'), process.env.MONGO_URL],
    [chalk.magentaBright('REDIS_URL'), process.env.REDIS_URL],
    [chalk.magentaBright('REDIS_DB'), process.env.REDIS_DB],
    [chalk.magentaBright('REDIS_PASSWORD'), process.env.REDIS_PASSWORD],
    [chalk.magentaBright('AUTH_PASS_KEY'), process.env.AUTH_PASS_KEY]
  ];

  config = {
    border: getBorderCharacters(`honeywell`),
    columns: {
      0: {
        width: 10
      },
      1: {
        width: 88
      }
    }
  };

  console.log(`Portal Opened at:${chalk.blue(`http://localhost:${port}`)} \nEnvironmental Variables: \n${chalk.cyan(table(data, config))}`);

})