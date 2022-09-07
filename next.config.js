const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
module.exports = withNextra({
  images: {
    domains: [
      'asoguardianes.com', 
      'juandjara.github.io',
      'freetunes.fuken.xyz',
      'dibujitos.fuken.xyz',
      'palomitas.fuken.xyz'
    ],
  },
})
