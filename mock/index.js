import fs from 'fs'
import path_module from 'path'

const DIR = path_module.join(__dirname, 'apis')
const test = (path) => {
  const stat = fs.lstatSync(path)
  if (stat.isDirectory()) {
    return fs.readdirSync(path).reduce((prev, file) => ({ ...test(path_module.join(path, file)), ...prev }), {});
  } else {
    return path.endsWith('.js') ? require(path) : {}
  }
}

export default test(DIR)
