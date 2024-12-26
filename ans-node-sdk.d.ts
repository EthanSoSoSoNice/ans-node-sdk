// my-library.d.ts

declare module "ans-node-sdk" {
  // Define the structure of the baseConfig object
  export interface BaseConfig {
    base: {
      appid: string;
      $debug: number;
    };
    status: {
      code: number;
      FnName: string;
      key: string;
      value: string;
      errorCode: string;
      successCode: string;
    };
  }

  // Define the Util class
  class Util {
    paramType(param: any): string;
    keyValueToObj(key: string, value: any): object;
    ArrayToObj(arr: string[]): object;
    toObj(param1: any, param2: any): object;
    objMerge(parentObj: object, part: object): object;
    arrayMergeUnique(arr1: any[], arr2: any[]): any[];
    arrayUnique(arr: any[]): any[];
    delEmpty(obj: object): object;
    stringSlice(str: string, length: number): string;
    checkURL(URL: string): boolean;
    checkUrlLast(ServerUrl: string): string;
    timeObj(): { Year: number; Month: string; Day: string; Hour: number };
    mkdirs(filepath: string): boolean;
  }

  // Define the Check class
  class Check {
    checkKey(key: any): boolean;
    checkValue(val: any): any;
    checkProperty(property: object): boolean;
    checkBoolean(bool: any): boolean;
    checkTime(time: any): boolean;
    checkDistinctId(id: any): boolean;
    checkAliasId(id: any): boolean;
    checkEventName(eventName: any): boolean;
    checkIncrementKey(key: any): boolean;
    checkIncrementValue(value: any): boolean;
    checkUnsetKey(key: any): boolean;
    checkUploadTime(upLoadTime: any): boolean;
    checkBase(appId: any, uploadURL: any): boolean;
    checkAppid(appid: any): boolean;
    checkPlatform(platform: any): string;
    checkGerFolder(gerFolder: any): boolean;
  }

  // Define the AnalysysAgent class
  interface AnalysysAgentOptions {
    appId: string;
    uploadURL: string;
    debugMode?: number;
    postNumber?: number;
    postTime?: number;
    logCollector?: any;
  }

  class AnalysysAgent {
    constructor(options: AnalysysAgentOptions);
    resetCode(): void;
    registerSuperProperty(key: string, value: any): boolean;
    registerSuperProperties(property: object): boolean;
    getSuperProperty(key: string): any;
    getSuperProperties(): object;
    unRegisterSuperProperty(key: string): boolean;
    clearSuperProperties(): boolean;
    flush(): boolean;
    profileSet(
      distinctId: string,
      isLogin: boolean,
      properties: object,
      platform: string,
      upLoadTime?: number
    ): boolean;
    profileSetOnce(
      distinctId: string,
      isLogin: boolean,
      properties: object,
      platform: string,
      upLoadTime?: number
    ): boolean;
    profileIncrement(
      distinctId: string,
      isLogin: boolean,
      properties: object,
      platform: string,
      upLoadTime?: number
    ): boolean;
    profileAppend(
      distinctId: string,
      isLogin: boolean,
      properties: object,
      platform: string,
      upLoadTime?: number
    ): boolean;
    profileUnSet(
      distinctId: string,
      isLogin: boolean,
      property: string,
      platform: string,
      upLoadTime?: number
    ): boolean;
    profileDelete(
      distinctId: string,
      isLogin: boolean,
      platform: string,
      upLoadTime?: number
    ): boolean;
    alias(
      aliasId: string,
      distinctId: string,
      platform: string,
      upLoadTime?: number
    ): boolean;
    track(
      distinctId: string,
      isLogin: boolean,
      eventName: string,
      properties: object,
      platform: string,
      upLoadTime?: number
    ): boolean;
    upLoad(
      distinctId: string,
      isLogin: boolean,
      eventName: string,
      properties: object,
      platform: string,
      upLoadTime?: number,
      merFlag?: boolean
    ): boolean;
    send(): boolean;
  }

  // Export the AnalysysAgent class as the default export
  export default AnalysysAgent;
}
