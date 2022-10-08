import { Client } from '../client/interfaces/Client';
import { Templates } from './readHandlebarsTemplates';
/**
 * Generate Uploader using the Handlebar template and write to disk.
 * @param client General configuration object.
 * @param templates The loaded handlebar templates.
 * @param outputPath Directory to write the generated files to.
 */
export declare function writeUploader(client: Client, templates: Templates, outputPath: string): void;
//# sourceMappingURL=writeUploader.d.ts.map