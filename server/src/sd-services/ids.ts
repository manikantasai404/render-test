let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import * as sd_4yTDjxurfzGOePnu from './idsutil'; //_splitter_
//append_imports_end
export class ids {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'ids';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new ids(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_ids_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ids');

    let mw_hrefstart: Middleware = new Middleware(
      this.serviceName,
      'hrefstart',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          bh = await this.sd_MGGiz129gBjjvZQh(bh);
          //appendnew_next_sd_kcgL345uN0YZbqoI
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_kcgL345uN0YZbqoI');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['hrefstart'] = mw_hrefstart;
    let mw_Authorize: Middleware = new Middleware(
      this.serviceName,
      'Authorize',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          bh = await this.sd_hkklHT7vwNsPFRzO(bh);
          //appendnew_next_sd_UcDym8HZi0cwh1Ay
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_UcDym8HZi0cwh1Ay');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['Authorize'] = mw_Authorize;
    //appendnew_flow_ids_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: ids');

    if (!this.swaggerDocument['paths']['/login']) {
      this.swaggerDocument['paths']['/login'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/login']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/login`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_1p4o3Mr7bUlY3YWA(bh);
          //appendnew_next_sd_KalAt6kUzqtzv4tt
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_KalAt6kUzqtzv4tt');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/login/cb']) {
      this.swaggerDocument['paths']['/login/cb'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/login/cb']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/login/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_XmHizmaiLtejT7pM(bh);
          //appendnew_next_sd_Fw2myIxbcAUmwa76
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Fw2myIxbcAUmwa76');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/user/info']) {
      this.swaggerDocument['paths']['/user/info'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/user/info']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/user/info`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_DlDkoXTkorCQfNMa(bh);
          //appendnew_next_sd_7HEUtz77hpSHT4P4
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_7HEUtz77hpSHT4P4');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/logout']) {
      this.swaggerDocument['paths']['/logout'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/logout']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/logout`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_WZF88OIxqey5n1B3(bh);
          //appendnew_next_sd_v59HtWKbU9xH9yks
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_v59HtWKbU9xH9yks');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/logout/cb']) {
      this.swaggerDocument['paths']['/logout/cb'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/logout/cb']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/logout/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_QnnC5L2SgvVqpbTS(bh);
          //appendnew_next_sd_gv81GeDEZhq0mPgZ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_gv81GeDEZhq0mPgZ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ids_HttpIn
  }
  //   service flows_ids

  //appendnew_flow_ids_start

  async sd_1p4o3Mr7bUlY3YWA(bh) {
    try {
      bh.local.idsConfigured = false;
      if (
        settings.default.hasOwnProperty('ids') &&
        settings.default['ids'].hasOwnProperty('client_id') &&
        settings.default['ids'].hasOwnProperty('client_secret')
      ) {
        bh.local.idsConfigured = true;
      }
      bh = await this.sd_UQ7HT4hAbHQmPHwg(bh);
      //appendnew_next_sd_1p4o3Mr7bUlY3YWA
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1p4o3Mr7bUlY3YWA');
    }
  }

  async sd_UQ7HT4hAbHQmPHwg(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.idsConfigured,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_HPafbAjJCVzaZlOv(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_L2Xa5BILyJpOySQe(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UQ7HT4hAbHQmPHwg');
    }
  }

  async sd_HPafbAjJCVzaZlOv(bh) {
    try {
      bh.local.reqParams = {
        state: crypto.randomBytes(16).toString('hex'),
        nonce: crypto.randomBytes(16).toString('hex'),
        isMobile: bh.input.query.isMobile,
        redirectTo: bh.input.query.redirectTo,
      };
      bh = await this.sd_3VnxZfbdG1GasLbd(bh);
      //appendnew_next_sd_HPafbAjJCVzaZlOv
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HPafbAjJCVzaZlOv');
    }
  }

  async sd_3VnxZfbdG1GasLbd(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      bh = await this.sd_n0ducXQgoe3dGZsN(bh);
      //appendnew_next_sd_3VnxZfbdG1GasLbd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3VnxZfbdG1GasLbd');
    }
  }

  async sd_n0ducXQgoe3dGZsN(bh) {
    try {
      const sd_4yTDjxurfzGOePnuInstance: sd_4yTDjxurfzGOePnu.idsutil = sd_4yTDjxurfzGOePnu.idsutil.getInstance();
      let outputVariables = await sd_4yTDjxurfzGOePnuInstance.getIDSClientInstance(
        null
      );
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_xDMmtNZHyglso9wn(bh);
      //appendnew_next_sd_n0ducXQgoe3dGZsN
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_n0ducXQgoe3dGZsN');
    }
  }

  async sd_xDMmtNZHyglso9wn(bh) {
    try {
      const sd_4yTDjxurfzGOePnuInstance: sd_4yTDjxurfzGOePnu.idsutil = sd_4yTDjxurfzGOePnu.idsutil.getInstance();
      let outputVariables = await sd_4yTDjxurfzGOePnuInstance.getAuthorizationParams(
        null
      );
      bh.input.authParams = outputVariables.input.authParams;

      bh = await this.sd_tLECbBdDS4LVDtxr(bh);
      //appendnew_next_sd_xDMmtNZHyglso9wn
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xDMmtNZHyglso9wn');
    }
  }

  async sd_tLECbBdDS4LVDtxr(bh) {
    try {
      const authorizationRequest = Object.assign(
        {
          redirect_uri: url.resolve(bh.web.req.href, '/api/login/cb'),
          scope: 'openid profile email address phone user',
          state: bh.local.reqParams.state,
          nonce: bh.local.reqParams.nonce,
          response_type: bh.input.client.response_types[0],
        },
        bh.input.authParams
      );

      bh.local.redirectHeaders = {
        location: bh.input.client.authorizationUrl(authorizationRequest),
      };

      await this.sd_hJa8PNDmXpSqplFY(bh);
      //appendnew_next_sd_tLECbBdDS4LVDtxr
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tLECbBdDS4LVDtxr');
    }
  }

  async sd_hJa8PNDmXpSqplFY(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hJa8PNDmXpSqplFY');
    }
  }

  async sd_L2Xa5BILyJpOySQe(bh) {
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      await this.sd_5LRilFjDry6qrc95(bh);
      //appendnew_next_sd_L2Xa5BILyJpOySQe
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_L2Xa5BILyJpOySQe');
    }
  }

  async sd_5LRilFjDry6qrc95(bh) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5LRilFjDry6qrc95');
    }
  }

  async sd_MGGiz129gBjjvZQh(bh) {
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      await this.sd_Dt2KlTWvcSwOMIRJ(bh);
      //appendnew_next_sd_MGGiz129gBjjvZQh
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MGGiz129gBjjvZQh');
    }
  }

  async sd_Dt2KlTWvcSwOMIRJ(bh) {
    try {
      bh.web.next();
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Dt2KlTWvcSwOMIRJ');
    }
  }

  async sd_XmHizmaiLtejT7pM(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.input.sessionParams = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_czdYT48NQA4nfgGD(bh);
      //appendnew_next_sd_XmHizmaiLtejT7pM
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XmHizmaiLtejT7pM');
    }
  }

  async sd_czdYT48NQA4nfgGD(bh) {
    try {
      const sd_4yTDjxurfzGOePnuInstance: sd_4yTDjxurfzGOePnu.idsutil = sd_4yTDjxurfzGOePnu.idsutil.getInstance();
      let outputVariables = await sd_4yTDjxurfzGOePnuInstance.getIDSClientInstance(
        null
      );
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_Spx9xVNkX4fn1HHC(bh);
      //appendnew_next_sd_czdYT48NQA4nfgGD
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_czdYT48NQA4nfgGD');
    }
  }

  async sd_Spx9xVNkX4fn1HHC(bh) {
    try {
      const params = bh.input.client.callbackParams(bh.web.req);
      let tokenset = await bh.input.client.callback(
        url.resolve(bh.web.req.href, 'cb'),
        params,
        {
          nonce: bh.input.sessionParams.data.nonce,
          state: bh.input.sessionParams.data.state,
        }
      );

      bh.local.redirectTo = bh.input.sessionParams.data.redirectTo;

      bh.local.userDetails = {
        tokenset: Object.assign({}, tokenset),
        userInfo: await bh.input.client.userinfo(tokenset['access_token']),
      };
      bh.local.userDetails['tokenset']['claims'] = Object.assign(
        {},
        tokenset.claims()
      );
      bh = await this.sd_VkytgPIUZOUojUuu(bh);
      //appendnew_next_sd_Spx9xVNkX4fn1HHC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Spx9xVNkX4fn1HHC');
    }
  }

  async sd_VkytgPIUZOUojUuu(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      bh = await this.sd_qQQvPYqsiP5SC3aE(bh);
      //appendnew_next_sd_VkytgPIUZOUojUuu
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VkytgPIUZOUojUuu');
    }
  }

  async sd_qQQvPYqsiP5SC3aE(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.input.sessionParams.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_YQIFBhrJ0x81psb8(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_MGPb5Zjm8MmT8xHh(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qQQvPYqsiP5SC3aE');
    }
  }

  async sd_YQIFBhrJ0x81psb8(bh) {
    try {
      bh.local.htmlResponse = `
 <html>
   <script>
      let _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      await this.sd_X0OVGMlIbHP6GkSV(bh);
      //appendnew_next_sd_YQIFBhrJ0x81psb8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YQIFBhrJ0x81psb8');
    }
  }

  async sd_X0OVGMlIbHP6GkSV(bh) {
    try {
      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_X0OVGMlIbHP6GkSV');
    }
  }

  async sd_MGPb5Zjm8MmT8xHh(bh) {
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      await this.sd_1BnQaQR2nBxuGBdu(bh);
      //appendnew_next_sd_MGPb5Zjm8MmT8xHh
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MGPb5Zjm8MmT8xHh');
    }
  }

  async sd_1BnQaQR2nBxuGBdu(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1BnQaQR2nBxuGBdu');
    }
  }

  async sd_DlDkoXTkorCQfNMa(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      await this.sd_gGMthE1Q1HTLh9T6(bh);
      //appendnew_next_sd_DlDkoXTkorCQfNMa
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DlDkoXTkorCQfNMa');
    }
  }

  async sd_gGMthE1Q1HTLh9T6(bh) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gGMthE1Q1HTLh9T6');
    }
  }

  async sd_CdCD2u5fB5d9ppNY(bh) {
    try {
      bh.web.res.redirect('/api/login');
      //appendnew_next_sd_CdCD2u5fB5d9ppNY
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CdCD2u5fB5d9ppNY');
    }
  }

  async sd_WZF88OIxqey5n1B3(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_XfQIhOLirdlmhvTi(bh);
      //appendnew_next_sd_WZF88OIxqey5n1B3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WZF88OIxqey5n1B3');
    }
  }

  async sd_XfQIhOLirdlmhvTi(bh) {
    try {
      bh.local.sessionExists = false;
      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset
      ) {
        bh.local.sessionData['data']['redirectTo'] =
          bh.input.query['redirectTo'];
        bh.local.sessionData['data']['isMobile'] = bh.input.query['isMobile'];
        bh.local.sessionExists = true;
      } else {
        delete bh.local.sessionData['redirectTo'];
      }
      bh = await this.sd_caaBBgxLk1nH8pQZ(bh);
      //appendnew_next_sd_XfQIhOLirdlmhvTi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XfQIhOLirdlmhvTi');
    }
  }

  async sd_caaBBgxLk1nH8pQZ(bh) {
    try {
      const sd_4yTDjxurfzGOePnuInstance: sd_4yTDjxurfzGOePnu.idsutil = sd_4yTDjxurfzGOePnu.idsutil.getInstance();
      let outputVariables = await sd_4yTDjxurfzGOePnuInstance.getIDSClientInstance(
        null
      );
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_ZX3Slx9tMepVdlCo(bh);
      //appendnew_next_sd_caaBBgxLk1nH8pQZ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_caaBBgxLk1nH8pQZ');
    }
  }

  async sd_ZX3Slx9tMepVdlCo(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_KESLljadud9YauUh(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_MmAzBuGQZ8yex1IV(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZX3Slx9tMepVdlCo');
    }
  }

  async sd_KESLljadud9YauUh(bh) {
    try {
      await Promise.all([
        bh.local.sessionData.data.tokenset.access_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.access_token,
              'access_token'
            )
          : undefined,
        bh.local.sessionData.data.tokenset.refresh_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.refresh_token,
              'refresh_token'
            )
          : undefined,
      ]);

      bh.local.res = {
        idsURL: url.format(
          Object.assign(
            url.parse(bh.input.client.issuer.end_session_endpoint),
            {
              search: null,
              query: {
                id_token_hint: bh.local.sessionData.data.tokenset.id_token,
                post_logout_redirect_uri: url.resolve(
                  bh.web.req.href,
                  '/api/logout/cb'
                ),
                client_id: settings.default['ids']['client_id'],
              },
            }
          )
        ),
        sessionExists: true,
      };

      // Remove user info and tokenset before login redirect
      bh.local.sessionData.data.tokenset = null;
      bh.local.sessionData.data.userInfo = null;
      bh = await this.sd_dCWCI7Lqpk6tk1KJ(bh);
      //appendnew_next_sd_KESLljadud9YauUh
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KESLljadud9YauUh');
    }
  }

  async sd_dCWCI7Lqpk6tk1KJ(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.sessionData.data;
      }
      await this.sd_xLDlZzRTb5DsjogP(bh);
      //appendnew_next_sd_dCWCI7Lqpk6tk1KJ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dCWCI7Lqpk6tk1KJ');
    }
  }

  async sd_xLDlZzRTb5DsjogP(bh) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xLDlZzRTb5DsjogP');
    }
  }

  async sd_MmAzBuGQZ8yex1IV(bh) {
    try {
      bh.local.res = {
        sessionExists: false,
      };
      await this.sd_xLDlZzRTb5DsjogP(bh);
      //appendnew_next_sd_MmAzBuGQZ8yex1IV
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MmAzBuGQZ8yex1IV');
    }
  }

  async sd_QnnC5L2SgvVqpbTS(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_YZuebzio5Xjvfjk4(bh);
      //appendnew_next_sd_QnnC5L2SgvVqpbTS
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QnnC5L2SgvVqpbTS');
    }
  }

  async sd_YZuebzio5Xjvfjk4(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      bh = await this.sd_hi1J4lfHsZAZbCnE(bh);
      //appendnew_next_sd_YZuebzio5Xjvfjk4
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YZuebzio5Xjvfjk4');
    }
  }

  async sd_hi1J4lfHsZAZbCnE(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.local.sessionData.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_kaCVShb0QCf5u1ep(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_a2es72knoFfL8dQf(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hi1J4lfHsZAZbCnE');
    }
  }

  async sd_kaCVShb0QCf5u1ep(bh) {
    try {
      bh.local.res = `<html>
   <script>
      var _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      await this.sd_iH63P6BzQFEg6XV3(bh);
      //appendnew_next_sd_kaCVShb0QCf5u1ep
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kaCVShb0QCf5u1ep');
    }
  }

  async sd_iH63P6BzQFEg6XV3(bh) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iH63P6BzQFEg6XV3');
    }
  }

  async sd_a2es72knoFfL8dQf(bh) {
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      await this.sd_GPSO36hpzCy347ho(bh);
      //appendnew_next_sd_a2es72knoFfL8dQf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_a2es72knoFfL8dQf');
    }
  }

  async sd_GPSO36hpzCy347ho(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GPSO36hpzCy347ho');
    }
  }

  async sd_hkklHT7vwNsPFRzO(bh) {
    try {
      bh.local = {};
      bh = await this.sd_BoYOcPRWvbOsyj66(bh);
      //appendnew_next_sd_hkklHT7vwNsPFRzO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hkklHT7vwNsPFRzO');
    }
  }

  async sd_BoYOcPRWvbOsyj66(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_MiUcMW6ymvQQhmqz(bh);
      //appendnew_next_sd_BoYOcPRWvbOsyj66
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BoYOcPRWvbOsyj66');
    }
  }

  async sd_MiUcMW6ymvQQhmqz(bh) {
    try {
      bh.local.sessionExists = false;

      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset &&
        bh.local.sessionData.data.tokenset.access_token &&
        bh.local.sessionData.data.tokenset.refresh_token
      ) {
        bh.local.sessionExists = true;
      }
      bh = await this.sd_N3uRiLRhZ1UWBiG3(bh);
      //appendnew_next_sd_MiUcMW6ymvQQhmqz
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MiUcMW6ymvQQhmqz');
    }
  }

  async sd_N3uRiLRhZ1UWBiG3(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_AHC1pot8SQe46R3c(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_UX4h5Jo8MRqHbm7O(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_N3uRiLRhZ1UWBiG3');
    }
  }

  async sd_AHC1pot8SQe46R3c(bh) {
    try {
      const sd_4yTDjxurfzGOePnuInstance: sd_4yTDjxurfzGOePnu.idsutil = sd_4yTDjxurfzGOePnu.idsutil.getInstance();
      let outputVariables = await sd_4yTDjxurfzGOePnuInstance.handleTokenExpiry(
        bh.local.sessionData,
        null
      );
      bh.local.newSession = outputVariables.input.newSession;

      bh = await this.sd_gY67ysxjMN4XCBaN(bh);
      //appendnew_next_sd_AHC1pot8SQe46R3c
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AHC1pot8SQe46R3c');
    }
  }

  async sd_gY67ysxjMN4XCBaN(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['false'](
          bh.local.newSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Zd4kEJaeqJO5pvWi(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_vd4AqPnJ90eAJ6TQ(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gY67ysxjMN4XCBaN');
    }
  }

  async sd_Zd4kEJaeqJO5pvWi(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      bh = await this.sd_V7Rtr20tU5BngRuS(bh);
      //appendnew_next_sd_Zd4kEJaeqJO5pvWi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Zd4kEJaeqJO5pvWi');
    }
  }

  async sd_V7Rtr20tU5BngRuS(bh) {
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      await this.sd_M11gjpVjh2M0BgZ4(bh);
      //appendnew_next_sd_V7Rtr20tU5BngRuS
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_V7Rtr20tU5BngRuS');
    }
  }

  async sd_M11gjpVjh2M0BgZ4(bh) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_M11gjpVjh2M0BgZ4');
    }
  }

  async sd_vd4AqPnJ90eAJ6TQ(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.newSession.rotated,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_xwy8QZxBl59W2BE7(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_4CC1u5fJseDNz0NP(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vd4AqPnJ90eAJ6TQ');
    }
  }

  async sd_xwy8QZxBl59W2BE7(bh) {
    try {
      delete bh.local.newSession.rotated;
      bh = await this.sd_hamkJlfhtKzf6cnZ(bh);
      //appendnew_next_sd_xwy8QZxBl59W2BE7
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xwy8QZxBl59W2BE7');
    }
  }

  async sd_hamkJlfhtKzf6cnZ(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      await this.sd_4CC1u5fJseDNz0NP(bh);
      //appendnew_next_sd_hamkJlfhtKzf6cnZ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hamkJlfhtKzf6cnZ');
    }
  }

  async sd_4CC1u5fJseDNz0NP(bh) {
    try {
      bh.web.next();
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4CC1u5fJseDNz0NP');
    }
  }

  async sd_UX4h5Jo8MRqHbm7O(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['cont'](
          bh.input.path,
          '/user/info',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_gnHbhlsXLpoRe9gE(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Vin0bgT9tdAMyFEE(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UX4h5Jo8MRqHbm7O');
    }
  }

  async sd_gnHbhlsXLpoRe9gE(bh) {
    try {
      bh.local.res = { message: 'Session expired' };
      await this.sd_M11gjpVjh2M0BgZ4(bh);
      //appendnew_next_sd_gnHbhlsXLpoRe9gE
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gnHbhlsXLpoRe9gE');
    }
  }

  async sd_Vin0bgT9tdAMyFEE(bh) {
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      await this.sd_M11gjpVjh2M0BgZ4(bh);
      //appendnew_next_sd_Vin0bgT9tdAMyFEE
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Vin0bgT9tdAMyFEE');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_oOkbhzjCnV0mcxD6(bh)) ||
      (await this.sd_LR0YvBG2YL4F5c3E(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_oOkbhzjCnV0mcxD6(bh) {
    const nodes = [
      'sd_xDMmtNZHyglso9wn',
      'sd_Fw2myIxbcAUmwa76',
      'sd_czdYT48NQA4nfgGD',
      'sd_Spx9xVNkX4fn1HHC',
      'sd_XmHizmaiLtejT7pM',
      'sd_qQQvPYqsiP5SC3aE',
      'sd_YQIFBhrJ0x81psb8',
      'sd_MGPb5Zjm8MmT8xHh',
      'sd_X0OVGMlIbHP6GkSV',
      'sd_1BnQaQR2nBxuGBdu',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_CdCD2u5fB5d9ppNY(bh);
      //appendnew_next_sd_oOkbhzjCnV0mcxD6
      return true;
    }
    return false;
  }
  async sd_LR0YvBG2YL4F5c3E(bh) {
    const nodes = ['sd_AHC1pot8SQe46R3c'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_V7Rtr20tU5BngRuS(bh);
      //appendnew_next_sd_LR0YvBG2YL4F5c3E
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
