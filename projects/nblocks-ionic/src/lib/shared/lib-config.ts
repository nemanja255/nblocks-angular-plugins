import { InjectionToken } from "@angular/core";

export interface LibConfig {
  /** Base Url to a backend API running a NBlocks compatable feature set. E.g. `https://api.myapp.com` */
  apiHost: string;

  /** The path which host the graphql endpoint, will be concatenated with apiHost. E.g. `/graphql` */
  graphqlPath: string;

  /** Asset Path to your logo. E.g. `https://www.myapp.com/logo.png` or `assets/logos/logo.png` */
  logoPath: string;

  /** Url to a privacy policy, will be used in href links. E.g. `https://www.myapp.com/privacy` */
  privacyPolicyUrl: string;

  /** View routes that are considered public accessable and interceptors should not require authentication context. E.g. `['/about', '/home']` */
  openRoutes: string[];
}
   
export const LibConfigService = new InjectionToken<LibConfig>('LibConfig');