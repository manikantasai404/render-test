export default {
  logger: {
    level: 'debug',
    transport: ['file', 'console'],
    exceptionFile: 'logs/exception.log',
    logFile: 'logs/console.log',
  },
  middlewares: {
    pre: [
      { ids: 'hrefstart' },
      { __ssdGlobalMiddlewares__: 'sd_7EmxxOk703exD5hF' },
      { __ssdGlobalMiddlewares__: 'cors' },
    ],
    post: [],
    sequences: { IDSAuthroizedAPIs: { pre: [{ ids: 'Authorize' }], post: [] } },
  },
  ids: {
    client_id: 'GSAssKhgBe81dcJTD8bbw',
    client_secret:
      'mUJN-MUFawp76n1HQNe8sgmLmdVOoPE77ru1sOKFxXzloKc7CrFMVqLmWV5PQq8V4AOSiGRCCB79sm67CnDOlA',
    issuerURL: 'https://ids.neutrinos.co',
    enabled: true,
  },
};
