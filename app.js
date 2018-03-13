const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')

const files = require('./lib/files')

clear()
console.log(
  chalk.yellow(
    figlet.textSync('github-cli', { horizontalLayout: 'full' })
  )
)

const inquirer  = require('./lib/inquire')

const run = async () => {
  const credentials = await inquirer.askGithubCredentials()
  console.log(credentials)
}

run()
