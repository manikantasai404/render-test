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
//append_imports_end
export class idsutil {
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
    this.serviceName = 'idsutil';
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
      instance = new idsutil(
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
      //appendnew_flow_idsutil_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: idsutil');

    //appendnew_flow_idsutil_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: idsutil');
    //appendnew_flow_idsutil_HttpIn
  }
  //   service flows_idsutil

  async getIDSClientInstance(clientInstance = null, ...others) {
    try {
      var bh = {
        input: {
          clientInstance: clientInstance,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_zbczvRUh5W9g4oI2(bh);
      //appendnew_next_getIDSClientInstance
      return (
        // formatting output variables
        {
          input: {
            clientInstance: bh.input.clientInstance,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vCPcGQy7zJue4do3');
    }
  }

  async getAuthorizationParams(authParams = null, ...others) {
    try {
      var bh = {
        input: {
          authParams: authParams,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_JH8cf0qosaD1FyTN(bh);
      //appendnew_next_getAuthorizationParams
      return (
        // formatting output variables
        {
          input: {
            authParams: bh.input.authParams,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oCHrdPZyAIFPoVhO');
    }
  }

  async handleTokenExpiry(existingSession = '', newSession = '', ...others) {
    try {
      var bh = {
        input: {
          existingSession: existingSession,
          newSession: newSession,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_kXEa4ZtUYG1GLHgf(bh);
      //appendnew_next_handleTokenExpiry
      return (
        // formatting output variables
        {
          input: {
            newSession: bh.input.newSession,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WzunSZOtrNOQK3ZB');
    }
  }

  //appendnew_flow_idsutil_start

  //__server_service_designer_class_variable_declaration__client
  client: any;
  async sd_zbczvRUh5W9g4oI2(bh) {
    try {
      bh.local.client = this.client;
      bh = await this.sd_uxpkTiRU51uJlYCC(bh);
      //appendnew_next_sd_zbczvRUh5W9g4oI2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zbczvRUh5W9g4oI2');
    }
  }

  async sd_uxpkTiRU51uJlYCC(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['istype'](
          bh.local.client,
          'undefined',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_5FU7kNXpB0kmzWpn(bh);
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
        bh = await this.sd_rKy48k798h19sk1U(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uxpkTiRU51uJlYCC');
    }
  }

  async sd_5FU7kNXpB0kmzWpn(bh) {
    try {
      const DEFAULT_HTTP_OPTIONS = {
        timeout: 60000,
      };

      custom.setHttpOptionsDefaults({
        timeout: DEFAULT_HTTP_OPTIONS.timeout,
      });
      log.info(
        `Identity server default HTTP options : ${DEFAULT_HTTP_OPTIONS}`
      );
      const issuer = await Issuer.discover(
        settings.default['ids']['issuerURL']
      );
      log.info(`Identity server discovered at : ${issuer.issuer}`);
      const client = await new issuer.Client({
        client_id: settings.default['ids']['client_id'],
        client_secret: settings.default['ids']['client_secret'],
      });
      client[custom.clock_tolerance] = process.env.CLOCK_TOLERANCE;
      log.info('Client connected...');
      bh.input.clientInstance = client;
      bh = await this.sd_QYxfKKbxtAPnmQWd(bh);
      //appendnew_next_sd_5FU7kNXpB0kmzWpn
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5FU7kNXpB0kmzWpn');
    }
  }

  async sd_QYxfKKbxtAPnmQWd(bh) {
    try {
      this.client = bh.input.clientInstance;
      //appendnew_next_sd_QYxfKKbxtAPnmQWd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QYxfKKbxtAPnmQWd');
    }
  }

  async sd_rKy48k798h19sk1U(bh) {
    try {
      bh.input.clientInstance = this.client;
      //appendnew_next_sd_rKy48k798h19sk1U
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rKy48k798h19sk1U');
    }
  }

  async sd_JH8cf0qosaD1FyTN(bh) {
    try {
      bh.input.authParams = {
        scope: 'openid profile email address phone offline_access user',
        prompt: 'consent',
      };
      //appendnew_next_sd_JH8cf0qosaD1FyTN
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JH8cf0qosaD1FyTN');
    }
  }

  async sd_kXEa4ZtUYG1GLHgf(bh) {
    try {
      const tokenset = bh.input.existingSession.data.tokenset;
      bh.local.expires_at = tokenset['expires_at'] * 1000;
      bh.local.refreshTime = new Date().valueOf() + 300000; // 5min before
      bh = await this.sd_ayqFr4LWRaN9pnQQ(bh);
      //appendnew_next_sd_kXEa4ZtUYG1GLHgf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kXEa4ZtUYG1GLHgf');
    }
  }

  async sd_ayqFr4LWRaN9pnQQ(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['gt'](
          bh.local.expires_at,
          bh.local.refreshTime,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_K9HlM5SSb79n0Qvs(bh);
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
        bh = await this.sd_w8c9o3NgVkxNe579(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ayqFr4LWRaN9pnQQ');
    }
  }

  async sd_K9HlM5SSb79n0Qvs(bh) {
    try {
      bh.input.newSession = bh.input.existingSession.data;
      //appendnew_next_sd_K9HlM5SSb79n0Qvs
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_K9HlM5SSb79n0Qvs');
    }
  }

  async sd_w8c9o3NgVkxNe579(bh) {
    try {
      let outputVariables = await this.getIDSClientInstance(null);
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_xcgk5OOZUeyiLtrh(bh);
      //appendnew_next_sd_w8c9o3NgVkxNe579
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_w8c9o3NgVkxNe579');
    }
  }

  async sd_xcgk5OOZUeyiLtrh(bh) {
    try {
      bh.local.refresh_token = await bh.input.client.introspect(
        bh.input.existingSession.data.tokenset.refresh_token,
        'refresh_token'
      );
      bh = await this.sd_lHMPXR3JlXsapFfQ(bh);
      //appendnew_next_sd_xcgk5OOZUeyiLtrh
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xcgk5OOZUeyiLtrh');
    }
  }

  async sd_lHMPXR3JlXsapFfQ(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.refresh_token.active,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Pu5WYi6Vqw4TU71c(bh);
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
        bh = await this.sd_o2HYrEO2jEw5AGXI(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lHMPXR3JlXsapFfQ');
    }
  }

  async sd_Pu5WYi6Vqw4TU71c(bh) {
    try {
      bh.input.newSession = { rotated: true };
      bh.input.newSession['tokenset'] = await bh.input.client.refresh(
        bh.input.existingSession.data.tokenset.refresh_token
      );
      bh.input.newSession['userInfo'] = await bh.input.client.userinfo(
        bh.input.newSession['tokenset']['access_token']
      );
      bh.input.newSession['tokenset']['claims'] = Object.assign(
        {},
        bh.input.newSession['tokenset'].claims()
      );
      //appendnew_next_sd_Pu5WYi6Vqw4TU71c
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Pu5WYi6Vqw4TU71c');
    }
  }

  async sd_o2HYrEO2jEw5AGXI(bh) {
    try {
      bh.input.newSession = false;
      //appendnew_next_sd_o2HYrEO2jEw5AGXI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_o2HYrEO2jEw5AGXI');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_O3DHT4McoUCZI50D(bh))
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
  async sd_O3DHT4McoUCZI50D(bh) {
    const nodes = ['handleTokenExpiry'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_o2HYrEO2jEw5AGXI(bh);
      //appendnew_next_sd_O3DHT4McoUCZI50D
      return true;
    }
    return false;
  }
  //appendnew_flow_idsutil_Catch
}
