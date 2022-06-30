function main(args) {
    let name = args.name || 'stranger'
    let greeting = `Hello ${name} ! ${process.env.DB_HOSTNAME}`
    console.log(greeting)
    return {body: greeting}
  }

module.exports.main = main;