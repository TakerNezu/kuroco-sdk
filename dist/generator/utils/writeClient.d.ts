import { Client } from '../client/interfaces/Client';
import { Templates } from './readHandlebarsTemplates';
/**
 * Write our OpenAPI client, using the given templates at the given output path.
 * @param client Client object with all the models, services, etc.
 * @param templates Templates wrapper with all loaded Handlebars templates.
 * @param output Directory to write the generated files to.
 */
export declare function writeClient(client: Client, templates: Templates, output: string): void;
//# sourceMappingURL=writeClient.d.ts.map