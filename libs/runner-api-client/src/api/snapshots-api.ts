/* tslint:disable */
/* eslint-disable */
/**
 * Daytona Runner API
 * Daytona Runner API
 *
 * The version of the OpenAPI document: v0.0.0-dev
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from '../configuration'
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios'
import globalAxios from 'axios'
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from '../common'
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base'
// @ts-ignore
import type { BuildSnapshotRequestDTO } from '../models'
// @ts-ignore
import type { ErrorResponse } from '../models'
// @ts-ignore
import type { PullSnapshotRequestDTO } from '../models'
// @ts-ignore
import type { SnapshotExistsResponse } from '../models'
/**
 * SnapshotsApi - axios parameter creator
 * @export
 */
export const SnapshotsApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Build a snapshot from a Dockerfile and context hashes
     * @summary Build a snapshot
     * @param {BuildSnapshotRequestDTO} request Build snapshot request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    buildSnapshot: async (
      request: BuildSnapshotRequestDTO,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'request' is not null or undefined
      assertParamExists('buildSnapshot', 'request', request)
      const localVarPath = `/snapshots/build`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication Bearer required
      await setApiKeyToObject(localVarHeaderParameter, 'Authorization', configuration)

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }
      localVarRequestOptions.data = serializeDataIfNeeded(request, localVarRequestOptions, configuration)

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Stream build logs
     * @summary Get build logs
     * @param {string} snapshotRef Snapshot ID or snapshot ref without the tag
     * @param {boolean} [follow] Whether to follow the log output
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBuildLogs: async (
      snapshotRef: string,
      follow?: boolean,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'snapshotRef' is not null or undefined
      assertParamExists('getBuildLogs', 'snapshotRef', snapshotRef)
      const localVarPath = `/snapshots/logs`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication Bearer required
      await setApiKeyToObject(localVarHeaderParameter, 'Authorization', configuration)

      if (snapshotRef !== undefined) {
        localVarQueryParameter['snapshotRef'] = snapshotRef
      }

      if (follow !== undefined) {
        localVarQueryParameter['follow'] = follow
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Pull a snapshot from a registry
     * @summary Pull a snapshot
     * @param {PullSnapshotRequestDTO} request Pull snapshot
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pullSnapshot: async (
      request: PullSnapshotRequestDTO,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'request' is not null or undefined
      assertParamExists('pullSnapshot', 'request', request)
      const localVarPath = `/snapshots/pull`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication Bearer required
      await setApiKeyToObject(localVarHeaderParameter, 'Authorization', configuration)

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }
      localVarRequestOptions.data = serializeDataIfNeeded(request, localVarRequestOptions, configuration)

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Remove a specified snapshot from the local system
     * @summary Remove a snapshot
     * @param {string} snapshot Snapshot name and tag
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeSnapshot: async (snapshot: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'snapshot' is not null or undefined
      assertParamExists('removeSnapshot', 'snapshot', snapshot)
      const localVarPath = `/snapshots/remove`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication Bearer required
      await setApiKeyToObject(localVarHeaderParameter, 'Authorization', configuration)

      if (snapshot !== undefined) {
        localVarQueryParameter['snapshot'] = snapshot
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Check if a specified snapshot exists locally
     * @summary Check if a snapshot exists
     * @param {string} snapshot Snapshot name and tag
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    snapshotExists: async (snapshot: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'snapshot' is not null or undefined
      assertParamExists('snapshotExists', 'snapshot', snapshot)
      const localVarPath = `/snapshots/exists`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication Bearer required
      await setApiKeyToObject(localVarHeaderParameter, 'Authorization', configuration)

      if (snapshot !== undefined) {
        localVarQueryParameter['snapshot'] = snapshot
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * SnapshotsApi - functional programming interface
 * @export
 */
export const SnapshotsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = SnapshotsApiAxiosParamCreator(configuration)
  return {
    /**
     * Build a snapshot from a Dockerfile and context hashes
     * @summary Build a snapshot
     * @param {BuildSnapshotRequestDTO} request Build snapshot request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async buildSnapshot(
      request: BuildSnapshotRequestDTO,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.buildSnapshot(request, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['SnapshotsApi.buildSnapshot']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Stream build logs
     * @summary Get build logs
     * @param {string} snapshotRef Snapshot ID or snapshot ref without the tag
     * @param {boolean} [follow] Whether to follow the log output
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getBuildLogs(
      snapshotRef: string,
      follow?: boolean,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getBuildLogs(snapshotRef, follow, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['SnapshotsApi.getBuildLogs']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Pull a snapshot from a registry
     * @summary Pull a snapshot
     * @param {PullSnapshotRequestDTO} request Pull snapshot
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async pullSnapshot(
      request: PullSnapshotRequestDTO,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.pullSnapshot(request, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['SnapshotsApi.pullSnapshot']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Remove a specified snapshot from the local system
     * @summary Remove a snapshot
     * @param {string} snapshot Snapshot name and tag
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async removeSnapshot(
      snapshot: string,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.removeSnapshot(snapshot, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['SnapshotsApi.removeSnapshot']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Check if a specified snapshot exists locally
     * @summary Check if a snapshot exists
     * @param {string} snapshot Snapshot name and tag
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async snapshotExists(
      snapshot: string,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SnapshotExistsResponse>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.snapshotExists(snapshot, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['SnapshotsApi.snapshotExists']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath)
    },
  }
}

/**
 * SnapshotsApi - factory interface
 * @export
 */
export const SnapshotsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = SnapshotsApiFp(configuration)
  return {
    /**
     * Build a snapshot from a Dockerfile and context hashes
     * @summary Build a snapshot
     * @param {BuildSnapshotRequestDTO} request Build snapshot request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    buildSnapshot(request: BuildSnapshotRequestDTO, options?: RawAxiosRequestConfig): AxiosPromise<string> {
      return localVarFp.buildSnapshot(request, options).then((request) => request(axios, basePath))
    },
    /**
     * Stream build logs
     * @summary Get build logs
     * @param {string} snapshotRef Snapshot ID or snapshot ref without the tag
     * @param {boolean} [follow] Whether to follow the log output
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBuildLogs(snapshotRef: string, follow?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<string> {
      return localVarFp.getBuildLogs(snapshotRef, follow, options).then((request) => request(axios, basePath))
    },
    /**
     * Pull a snapshot from a registry
     * @summary Pull a snapshot
     * @param {PullSnapshotRequestDTO} request Pull snapshot
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pullSnapshot(request: PullSnapshotRequestDTO, options?: RawAxiosRequestConfig): AxiosPromise<string> {
      return localVarFp.pullSnapshot(request, options).then((request) => request(axios, basePath))
    },
    /**
     * Remove a specified snapshot from the local system
     * @summary Remove a snapshot
     * @param {string} snapshot Snapshot name and tag
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeSnapshot(snapshot: string, options?: RawAxiosRequestConfig): AxiosPromise<string> {
      return localVarFp.removeSnapshot(snapshot, options).then((request) => request(axios, basePath))
    },
    /**
     * Check if a specified snapshot exists locally
     * @summary Check if a snapshot exists
     * @param {string} snapshot Snapshot name and tag
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    snapshotExists(snapshot: string, options?: RawAxiosRequestConfig): AxiosPromise<SnapshotExistsResponse> {
      return localVarFp.snapshotExists(snapshot, options).then((request) => request(axios, basePath))
    },
  }
}

/**
 * SnapshotsApi - object-oriented interface
 * @export
 * @class SnapshotsApi
 * @extends {BaseAPI}
 */
export class SnapshotsApi extends BaseAPI {
  /**
   * Build a snapshot from a Dockerfile and context hashes
   * @summary Build a snapshot
   * @param {BuildSnapshotRequestDTO} request Build snapshot request
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SnapshotsApi
   */
  public buildSnapshot(request: BuildSnapshotRequestDTO, options?: RawAxiosRequestConfig) {
    return SnapshotsApiFp(this.configuration)
      .buildSnapshot(request, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Stream build logs
   * @summary Get build logs
   * @param {string} snapshotRef Snapshot ID or snapshot ref without the tag
   * @param {boolean} [follow] Whether to follow the log output
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SnapshotsApi
   */
  public getBuildLogs(snapshotRef: string, follow?: boolean, options?: RawAxiosRequestConfig) {
    return SnapshotsApiFp(this.configuration)
      .getBuildLogs(snapshotRef, follow, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Pull a snapshot from a registry
   * @summary Pull a snapshot
   * @param {PullSnapshotRequestDTO} request Pull snapshot
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SnapshotsApi
   */
  public pullSnapshot(request: PullSnapshotRequestDTO, options?: RawAxiosRequestConfig) {
    return SnapshotsApiFp(this.configuration)
      .pullSnapshot(request, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Remove a specified snapshot from the local system
   * @summary Remove a snapshot
   * @param {string} snapshot Snapshot name and tag
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SnapshotsApi
   */
  public removeSnapshot(snapshot: string, options?: RawAxiosRequestConfig) {
    return SnapshotsApiFp(this.configuration)
      .removeSnapshot(snapshot, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Check if a specified snapshot exists locally
   * @summary Check if a snapshot exists
   * @param {string} snapshot Snapshot name and tag
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SnapshotsApi
   */
  public snapshotExists(snapshot: string, options?: RawAxiosRequestConfig) {
    return SnapshotsApiFp(this.configuration)
      .snapshotExists(snapshot, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
