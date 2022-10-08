import { Options } from '.';
export declare function requestOpenAPI({ apiId, config }: Options): Promise<import("node-fetch").Response>;
export declare function requestManifest({ apiId, config }: Options): Promise<Manifest>;
export interface Manifest {
    gcp: {
        firebaseConfig: {
            apiKey: string;
            authDomain: string;
            databaseURL: string;
            projectId: string;
            storageBucket: string;
            messagingSenderId: string;
            appId: string;
            measurementId: string;
        };
    };
}
//# sourceMappingURL=api.d.ts.map