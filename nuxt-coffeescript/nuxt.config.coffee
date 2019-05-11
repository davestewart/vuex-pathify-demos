pkg = require './package'
resolve = require('path').resolve

module.exports =
  mode: 'universal'
  head:
    title: pkg.name
    meta:
      [
        {
          charset: 'utf-8'
        }
        {
          name: 'viewport'
          content: 'width=device-width, initial-scale=1'
        }
        {
          hid: 'description'
          name: 'description'
          content: pkg.description
        }
      ]
    link:
      [
        rel: 'icon'
        type: 'image/x-icon'
        href: '/favicon.png'
      ]
  loading:
    {
      color: '#3B8070'
    }
  plugins:
    [
      './store/index.coffee'
    ]
  modules:
    [
      './modules/coffeescript'
    ]
  # axios:
  #   {
  #   }
  # css:
  #   [
  #     '~assets/global.styl'
  #   ]
  # styleResources:
  #   stylus:
  #     [
  #       '~assets/mixins.styl'
  #     ]
  # build:
  #   extend = (config, ctx) ->
  #     pass