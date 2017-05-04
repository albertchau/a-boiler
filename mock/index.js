var fs = require('fs')
var path_module = require('path')
var module_holder = {}

function LoadModules(path) {
  const stat = fs.lstatSync(path)
  console.log(path)

  if (stat.isDirectory()) {
    // we have a directory: do a tree walk
    const files = fs.readdirSync(path)
    let f, l = files.length
    for (let i = 0; i < l; i++) {
      f = path_module.join(path, files[i])
      LoadModules(f)
    }
  } else {
    // we have a file: load it
    if (path.endsWith('.js')) {
      //console.log(path)

      let require2 = require(path)
      //console.log(require2)
      module_holder = Object.assign(module_holder, require2)
      //console.log(module_holder)

    }
  }
}
var DIR = path_module.join(__dirname, 'apis')
LoadModules(DIR)

console.log(module_holder)

export default module_holder

//const req = require.context('.', true, /\.\/[^\/]+\/[^\/]+\/.*\.js$/)
//export default req.keys().reduce((acc, key) => {
//  return Object.assign(acc, req(key).default)
//}, {})
