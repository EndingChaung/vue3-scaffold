// generateComponent.js`
const chalk = require('chalk')
const path = require('path')
const fs = require('fs')
const resolve = (...file) => path.resolve(__dirname, ...file)
const log = message => console.log(chalk.green(`${message}`))
const successLog = message => console.log(chalk.blue(`${message}`))
const errorLog = error => console.log(chalk.red(`${error}`))
const { vueTemplate, routeTemplate } = require('./template')

const generateFile = (path, data) => {
  if (fs.existsSync(path)) {
    errorLog(`${path}文件已存在`)
    return
  }
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf8', err => {
      if (err) {
        errorLog(err.message)
        reject(err)
      } else {
        resolve(true)
      }
    })
  })
}
log('请输入要生成的页面名称')
let viewName = ''
process.stdin.on('data', async chunk => {
  const inputName = String(chunk).trim().toString()
  /**
   * 组件目录路径
   */
  const viewDirectory = resolve('../src/views', inputName)

  /**
   * vue组件路径
   */
  const viewVueName = resolve(viewDirectory, `${inputName}.vue`)
  /**
   * 入口文件路径
   */
  const entryViewName = resolve(viewDirectory, 'index.js')
  
  const hasViewDirectory = fs.existsSync(viewDirectory)
  if (hasViewDirectory) {
    errorLog(`${inputName}页面目录已存在，请重新输入`)
    return
  } else {
    log(`正在生成 view 目录 ${viewDirectory}`)
    await dotExistDirectoryCreate(viewDirectory)
    // fs.mkdirSync(viewDirectory);
  }
  try {
    if (inputName.includes('/')) {
      const inputArr = inputName.split('/')
      viewName = inputArr[inputArr.length - 1]
    } else {
      viewName = inputName
    }
    log(`正在生成 vue 文件 ${viewVueName}`)
    await generateFile(viewVueName, vueTemplate(viewName))
    log(`正在生成 route 文件 ${entryViewName}`)
    await generateFile(entryViewName, routeTemplate(viewName))
    successLog('生成成功')
  } catch (e) {
    errorLog(e.message)
  }

  process.stdin.emit('end')
})
process.stdin.on('end', () => {
  log('exit')
  process.exit()
})
function dotExistDirectoryCreate (directory) {
  return new Promise((resolve) => {
    mkdirs(directory, function () {
      resolve(true)
    })
  })
}

// 递归创建目录
function mkdirs (directory, callback) {
  var exists = fs.existsSync(directory)
  if (exists) {
    callback()
  } else {
    mkdirs(path.dirname(directory), function () {
      fs.mkdirSync(directory)
      callback()
    })
  }
}
