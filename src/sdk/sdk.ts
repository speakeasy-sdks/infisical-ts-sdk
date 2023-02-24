import * as utils from "../internal/utils";
import { Key } from "./key";
import { Log } from "./log";
import { Membership } from "./membership";
import { Security } from "./models/shared";
import { Organization } from "./organization";
import { Secret } from "./secret";
import { Snapshot } from "./snapshot";
import { User } from "./user";
import { Workspace } from "./workspace";
import axios, { AxiosInstance } from "axios";

export const ServerList = [
	"https://app.infisical.com/api/v2",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}

/* SDK Documentation: https://infisical.com/docs/api-reference/overview/introduction - Infisical API documentation*/
export class SDK {
  public key: Key;
  public log: Log;
  public membership: Membership;
  public organization: Organization;
  public secret: Secret;
  public snapshot: Snapshot;
  public user: User;
  public workspace: Workspace;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.1.0";
  private _genVersion = "1.5.3";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props.security) {
      let security: Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }
    
    this.key = new Key(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.log = new Log(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.membership = new Membership(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.organization = new Organization(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.secret = new Secret(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.snapshot = new Snapshot(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.user = new User(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.workspace = new Workspace(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
  
}