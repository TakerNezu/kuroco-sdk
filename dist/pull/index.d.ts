import { KurocoConfig } from '../__base';
export interface Options {
    config: KurocoConfig;
    apiId: number;
    output: string;
    write: boolean;
}
export declare function pull(options: Options): Promise<void>;
export declare function writeRcmsFilesWithFetch(options: Options): Promise<void>;
export declare function overwriteConfigurationFile(options: Options): Promise<void>;
//# sourceMappingURL=index.d.ts.map