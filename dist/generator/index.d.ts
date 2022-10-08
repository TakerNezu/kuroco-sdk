import { KurocoConfig } from '../__base';
export interface Options {
    input: string | Record<string, any>;
    output: string;
    write?: boolean;
    exportApiInformations?: boolean;
    config: KurocoConfig;
}
/**
 * Generate the OpenAPI client. This method will read the OpenAPI specification and based on the
 * given language it will generate the client, including the typed models, validation schemas,
 * service layer, etc.
 * @param input The relative location of the OpenAPI spec.
 * @param output The relative location of the output directory.
 * @param write Write the files to disk (true or false).
 */
export declare function generate({ input, output, write, exportApiInformations, config }: Options): void;
//# sourceMappingURL=index.d.ts.map