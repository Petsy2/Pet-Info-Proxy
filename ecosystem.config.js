module.exports = {
  apps: [{
    name: 'proxy',
    script: './server/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-223-252-165.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/petsy.pem',
      ref: 'origin/master',
      repo: 'git@github.com:Petsy2/Pet-Info-Proxy.git',
      path: '/home/ubuntu/proxy',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}