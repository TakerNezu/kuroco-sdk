import { Service } from '../client/interfaces/Service';
import { Templates } from './readHandlebarsTemplates';
/**
 * Generate Service meta informations using the Handlebar template and write to disk.
 * @param services Array of Services to write.
 * @param templates The loaded handlebar templates.
 * @param outputPath Directory to write the generated files to.
 */
export declare function writeApiInfo(services: Service[], templates: Templates, outputPath: string): void;
//# sourceMappingURL=writeApiInfo.d.ts.map