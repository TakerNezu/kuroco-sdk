import { Model } from '../client/interfaces/Model';
import { Templates } from './readHandlebarsTemplates';
/**
 * Generate Models using the Handlebar template and write to disk.
 * @param models Array of Models to write.
 * @param templates The loaded handlebar templates.
 * @param outputPath Directory to write the generated files to.
 */
export declare function writeClientModels(models: Model[], templates: Templates, outputPath: string): void;
//# sourceMappingURL=writeClientModels.d.ts.map