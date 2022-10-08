import { Client } from '../../client/interfaces/Client';
import { OpenApi } from './interfaces/OpenApi';
/**
 * Parse the OpenAPI specification to a Client model that contains
 * all the models, services and schema's we should output.
 * @param openApi The OpenAPI spec  that we have loaded from disk.
 */
export declare function parse(openApi: OpenApi): Omit<Client, 'etc'>;
//# sourceMappingURL=index.d.ts.map