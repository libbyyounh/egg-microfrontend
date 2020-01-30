/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1560769167941_9725'

  // add your middleware config here
  // config.middleware = ['proxy']

  config.view = {
    mapping: { '.html': 'ejs' }
  }

  // add your user config here
  const userConfig = {}

  return {
    ...config,
    ...userConfig
  }
}
