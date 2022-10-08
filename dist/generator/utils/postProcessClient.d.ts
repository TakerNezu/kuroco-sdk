import { Client } from '../client/interfaces/Client';
import { KurocoConfig } from '../..';
/**
 * Post process client
 * @param client Client object with all the models, services, etc.
 * @param kurocoConfig Etc Kuroco configurations passed by Kuroco.
 * @param exportApiInformations Whether or not to export details of each API endpoints.
 */
export declare function postProcessClient(client: Omit<Client, 'etc'>, kurocoConfig: KurocoConfig, exportApiInformations?: boolean): Client;
//# sourceMappingURL=postProcessClient.d.ts.map