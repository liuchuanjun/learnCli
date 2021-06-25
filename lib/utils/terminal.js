const { spawn } = require('child_process')

const commandSpawn = (...args) => {

  // 子进程
  const childProcess = spawn(...args)

  // 子进程的流通过管道赋值给 process
  childProcess.stdout.pipe(process.stdout)
  childProcess.stderr.pipe(process.stderr)

  childProcess.on('close',()=>{

    console.log('close')
  })
}


module.exports = {

  commandSpawn
}