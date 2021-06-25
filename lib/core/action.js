const { promisify } = require('util')

const download = promisify(require('download-git-repo'))

const { vueRepo } = require('../config/repo-config')
const commandSpawn = require('../utils/terminal')

// promise 都可以转成 async ... await ...

const creatProjectAction = async (project) => {

  // clone 项目
  await download(vueRepo,project,{clone: true})

  // 执行npm install
  await commandSpawn('npm', 'install', )

  // 执行npm run serve

  // 打开浏览器
}

module.exports = {

  creatProjectAction
}