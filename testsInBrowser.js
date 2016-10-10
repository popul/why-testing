var context = require.context('./src', true, /.+\.test\.js$/)

console.log(context);

context.keys().forEach(context)

module.exports = context