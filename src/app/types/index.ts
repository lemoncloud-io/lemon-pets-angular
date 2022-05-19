export type TLoginProvider = 'naver' | 'kakao' | 'google' | 'apple';
export type TPlatform = 'ios' | 'android' | 'windows' | 'macos' | 'web';
export type TEnv = 'dev' | 'stage' | 'prod';

export interface IRegisterAppInfo extends IDeviceInfo {
  domain: string;
  version: string;
  latestVersion?: string;
}

export interface IVersionInfo {
  currentVersion: string;
  latestVersion: string;
  shouldUpdate: boolean;
}

export interface IDeviceInfo {
  stage: TEnv;
  platform: TPlatform;
  application: string;
  deviceToken?: string;
  deviceId?: string | null;
  installId?: string;
}

export interface ITokenInfo {
  os: TPlatform;
  token: string;
}

export interface ICarrotUser {
  accountType?: string; // 'mobile' | 'install' | TLoginProvider;
  accountNo?: string;
  nick?: string;
  grade?: 'normal' | 'premium';
  joinedAt?: number;
  validFrom?: number;
  validUntil?: number;
  renewedAt?: number;
  deletedInfo?: string;
}

export interface IInstallUser extends ICarrotUser {
  userId?: string;
  delegatedId?: string;
  group?: string;
  list?: IInstallUser[];
  listTotal?: number;
}

export interface ISyncSubscription {
  isValid: boolean;
  validFrom: number;
  validUntil: number;
  renewedAt: number;
}

export interface ICarrotSubscription {
  price: number;
  validFrom: number;
  validUntil: number;
  isValid: boolean;
  purchaseToken: string;
}

// TODO: define ICarrotProduct @22.03.32
export interface ICarrotProduct {
  [key: string]: string;
}

export interface ICarrotSubscriptionResult {
  limit?: number;
  list: ICarrotSubscription[];
  total: number;
  page: number;
}

export interface IProductPaymentInfo {
  appId: string;
  productId: string;
  paymentType: string;
  purchaseToken: string;
  price: string;
  extra?: { [key: string]: any };
  platform: string;
  transactionId?: string;
  transactionDate?: number;
}

export interface PaymentNotification {
  notificationId: string;
  price: string;
  appId: string;
  productId: string;
  paymentType: string;
  productName: string;
  platform?: string;
  date?: string;
}

export interface SavedPaymentInfo extends IProductPaymentInfo {
  storageId?: string;
}

export interface ISubscriptionPaymentInfo {
  appId: string;
  productId: string;
  paymentType: string;
  purchaseToken: string;
  price: string;
}

export interface ILemonUser {
  identityProvider: string;
  identityPoolId: string;
  identityId: string;
  accountId: string;
  userAgent: string;
  roles?: string[];
  gid?: string;
  uid?: string;
  sid?: string;
  Site: {
    stereo?: string;
    name?: string;
    domain?: string;
  };
  User: {
    name?: string;
    nick?: string;
    email?: string;
  };
  Group: {
    name?: string;
    roles?: string[];
  };
  Account: {
    _id: string;
    authId: string;
    createdAt: Date;
    deletedAt?: Date;
    domain: string;
    id: string;
    identityId: string;
    name?: string;
    nick?: string;
    ns?: string;
    socialId?: string;
    stereo?: string;
    type?: string;
    updatedAt?: Date;
    extra?: any;
  };
}

export interface PhoneAuthorizeResponse {
  accountId: string;
  agreedAt: string;
  authId: string;
  expiredAt: string;
}

export interface LemonOAuthTokenResult {
  accountId: string;
  authId: string;
  credential: LemonCredentials;
  identityId: string;
  identityPoolId: string;
  identityToken: string;
  error?: any;
}

export interface LemonCredentials {
  AccessKeyId: string;
  SecretKey: string;
  Expiration: string;
  SessionToken?: string;
}

// Naver, Kakao, Google, Apple SDK 로그인 시 (ios, android)
export interface OAuthTokenResult extends AppleTokenResult {
  provider: string;
  platform: string;
  accessToken?: string;
  refreshToken?: string;
  accessTokenExpiredAt?: string;
  accessTokenExpiresIn?: string;
}

export interface AppleTokenResult {
  identityToken?: string;
  nonce?: string;
  user?: string;
  application?: string;
  clientId?: string;
}

export interface RegisterDeviceResponse {
  Application: {
    application: string;
    id: string;
    name: string;
    ns: string;
    platform: string;
    stage: string;
    type: string;
    _id: string;
    createdAt: number;
    updatedAt?: number;
    deletedAt?: number;
  };
  Applications?: string;
  Device: {
    ios?: number; // 0 or 1
    android?: number;
    application: string;
    applicationId?: string;
    id?: string;
    ns: string;
    platform: string;
    stage: string;
    type: string;
    _id: string;
    createdAt: number;
    updatedAt?: number;
    deletedAt?: number;
  };
  Token: LemonOAuthTokenResult;
  deviceId: string;
}
