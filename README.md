    the package name is Logger, 
and to log some informaton to the remote server
ho to use it

const { Logger } = require('logger');

const logger = Logger({
  projectName: 'Test-app',
  privateKey: '3515a913-643b-4107-81e7-990795b23877'
});


logger.log('for log start up');
logger.info('john for info working fine');


(async () => {
  const res= await logger.getLog();
  console.log(res);
})();
// console.log('Test file executed successfully.');