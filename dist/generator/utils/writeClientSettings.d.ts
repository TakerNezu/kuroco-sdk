import { Client } from '../client/interfaces/Client';
import { Templates } from './readHandlebarsTemplates';
/**
 * Generate OpenAPI configuration file "OpenAPI.ts"
 * @param client Client object, containing, models, schemas and services.
 * @param templates The loaded handlebar templates.
 * @param outputPath Directory to write the generated files to.
 */
export declare function writeClientSettings(client: Client, templates: Templates, outputPath: string): void;
//# sourceMappingURL=writeClientSettings.d.ts.map