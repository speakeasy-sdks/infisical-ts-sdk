import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Workspace {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * deleteWorkspaceMembership - Delete workspace membership
   *
   * Delete workspace membership
  **/
  deleteWorkspaceMembership(
    req: operations.DeleteWorkspaceMembershipRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteWorkspaceMembershipResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteWorkspaceMembershipRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/workspace/{workspaceId}/memberships/{membershipId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteWorkspaceMembershipResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.membership = plainToInstance(
                shared.Membership,
                httpRes?.data as shared.Membership,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = plainToInstance(
                shared.ErrorResponse,
                httpRes?.data as shared.ErrorResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = plainToInstance(
                shared.ErrorResponse,
                httpRes?.data as shared.ErrorResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getOrganizationWorkspaces - Get organization workspaces
   *
   * Get organization workspaces
  **/
  getOrganizationWorkspaces(
    req: operations.GetOrganizationWorkspacesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationWorkspacesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationWorkspacesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organizationId}/workspaces", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationWorkspacesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.workspaces = plainToInstance(
                ,
                httpRes?.data as ,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = plainToInstance(
                shared.ErrorResponse,
                httpRes?.data as shared.ErrorResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = plainToInstance(
                shared.ErrorResponse,
                httpRes?.data as shared.ErrorResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getWorkspaceKeys - Get workspace encrypted key
   *
   * Get workspace encrypted key
  **/
  getWorkspaceKeys(
    req: operations.GetWorkspaceKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspaceKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspaceKeysRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/workspace/{workspaceId}/encrypted-key", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetWorkspaceKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.keys = plainToInstance(
                ,
                httpRes?.data as ,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = plainToInstance(
                shared.ErrorResponse,
                httpRes?.data as shared.ErrorResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = plainToInstance(
                shared.ErrorResponse,
                httpRes?.data as shared.ErrorResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getWorkspaceLogs - Get workspace logs
   *
   * Get workspace logs
  **/
  getWorkspaceLogs(
    req: operations.GetWorkspaceLogsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspaceLogsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspaceLogsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/workspace/{workspaceId}/logs", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetWorkspaceLogsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.logs = plainToInstance(
                ,
                httpRes?.data as ,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = plainToInstance(
                shared.ErrorResponse,
                httpRes?.data as shared.ErrorResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = plainToInstance(
                shared.ErrorResponse,
                httpRes?.data as shared.ErrorResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getWorkspaceMemberships - Get workspace memberships
   *
   * Get workspace memberships
  **/
  getWorkspaceMemberships(
    req: operations.GetWorkspaceMembershipsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspaceMembershipsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspaceMembershipsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/workspace/{workspaceId}/memberships", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetWorkspaceMembershipsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.memberships = plainToInstance(
                ,
                httpRes?.data as ,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = plainToInstance(
                shared.ErrorResponse,
                httpRes?.data as shared.ErrorResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = plainToInstance(
                shared.ErrorResponse,
                httpRes?.data as shared.ErrorResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getWorkspaceSnapshots - Get workspace snapshots
   *
   * Get workspace snapshots
  **/
  getWorkspaceSnapshots(
    req: operations.GetWorkspaceSnapshotsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspaceSnapshotsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspaceSnapshotsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/workspace/{workspaceId}/snapshots", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetWorkspaceSnapshotsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.snapshots = plainToInstance(
                ,
                httpRes?.data as ,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = plainToInstance(
                shared.ErrorResponse,
                httpRes?.data as shared.ErrorResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = plainToInstance(
                shared.ErrorResponse,
                httpRes?.data as shared.ErrorResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * rollbackSnapshots - Rollback workspace secret snapshots
   *
   * Rollback workspace secret snapshots
  **/
  rollbackSnapshots(
    req: operations.RollbackSnapshotsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RollbackSnapshotsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RollbackSnapshotsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/workspace/{workspaceId}/secret-snapshots/rollback", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RollbackSnapshotsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.secrets = plainToInstance(
                ,
                httpRes?.data as ,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = plainToInstance(
                shared.ErrorResponse,
                httpRes?.data as shared.ErrorResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = plainToInstance(
                shared.ErrorResponse,
                httpRes?.data as shared.ErrorResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updateWorkspaceMembership - Update workspace membership
   *
   * Update workspace membership
  **/
  updateWorkspaceMembership(
    req: operations.UpdateWorkspaceMembershipRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateWorkspaceMembershipResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateWorkspaceMembershipRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/workspace/{workspaceId}/memberships/{membershipId}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateWorkspaceMembershipResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.membership = plainToInstance(
                shared.Membership,
                httpRes?.data as shared.Membership,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = plainToInstance(
                shared.ErrorResponse,
                httpRes?.data as shared.ErrorResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = plainToInstance(
                shared.ErrorResponse,
                httpRes?.data as shared.ErrorResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

}
