import * as generator from './generator';
import * as pull from './pull';
export * from './__base';
declare const _default: {
    pull(options: pull.Options): Promise<void>;
    writeRcmsFilesWithFetch(options: pull.Options): Promise<void>;
    overwriteConfigurationFile(options: pull.Options): Promise<void>;
    generate({ input, output, write, exportApiInformations, config }: generator.Options): void;
};
export default _default;
//# sourceMappingURL=index.d.ts.map