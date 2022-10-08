import { Client } from '../client/interfaces/Client';
import { Templates } from './readHandlebarsTemplates';
import { ExportCondition } from '../client/interfaces/ExportCondition';
/**
 * Generate the OpenAPI client index file using the Handlebar template and write it to disk.
 * The index file just contains all the exports you need to use the client as a standalone
 * library. But yuo can also import individual models and services directly.
 * @param client Client object, containing, models, schemas and services.
 * @param templates The loaded handlebar templates.
 * @param outputPath Directory to write the generated files to.
 * @param exportCondition Containing some conditions Object, each of values indicates either exports.
 */
export declare function writeClientIndex(client: Client, templates: Templates, outputPath: string, exportCondition: ExportCondition): void;
//# sourceMappingURL=writeClientIndex.d.ts.map