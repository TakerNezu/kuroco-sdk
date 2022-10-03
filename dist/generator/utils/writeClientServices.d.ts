import { Templates } from './readHandlebarsTemplates';
import { Client } from '../client/interfaces/Client';
/**
 * Generate Services using the Handlebar template and write to disk.
 * @param client General configuration object.
 * @param templates The loaded handlebar templates.
 * @param outputPath Directory to write the generated files to.
 * @param exportApiInformations Generate API informations.
 */
export declare function writeClientServices(client: Client, templates: Templates, outputPath: string, exportApiInformations?: boolean): void;
//# sourceMappingURL=writeClientServices.d.ts.map