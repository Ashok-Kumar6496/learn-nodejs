import validator from "validator";

import chalk from "chalk";

const log = console.log;

console.log(validator.equals('AK', 'AK'))

console.log(validator.isAlphanumeric('sr-RS@latin'))

console.log(validator.isEmail('fhdskj@jfj.34'))
console.log(validator.blacklist('jd/fhd/', '/'))

console.log(chalk.green("Hey this is green colour.") + chalk.red(" This is in red colour!!"))

log(chalk.bgBlue("Hey i am in BG green"))

log(chalk.green.inverse.bold('Success!! in green colour'))

log(chalk.gray('kfdslfhdsl'))

console.log(chalk.blue(process.argv[2]))


const event = {
    name: "Birthday Party",
    guestList: ["Ashok", "Liki", "Musketeers"],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach(guest => {
            console.log(guest)
        })
    }

}

event.printGuestList();