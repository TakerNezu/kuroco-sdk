import { OPERATION_PATTERN } from '../client/interfaces/OperationPattern';
import { Service } from '../client/interfaces/Service';
/**
 * Pick special operations
 * @param services Service objects.
 */
export declare function pickSpecialOperation(services: Service[] | undefined, type: OPERATION_PATTERN): {
    class: string;
    className: string;
    method: string;
    methodName: string;
    service: string;
    name: string;
    type: "LOGIN" | "LOGOUT" | "TOKEN" | "FIREBASE_TOKEN" | null;
    summary: string | null;
    description: string | null;
    deprecated: boolean;
    path: string;
    errors: import("../client/interfaces/OperationError").OperationError[];
    results: import("../client/interfaces/OperationResponse").OperationResponse[];
    responseHeader: string | null;
    security?: any[] | undefined;
    imports: string[];
    parameters: import("../client/interfaces/OperationParameter").OperationParameter[];
    parametersPath: import("../client/interfaces/OperationParameter").OperationParameter[];
    parametersQuery: import("../client/interfaces/OperationParameter").OperationParameter[];
    parametersForm: import("../client/interfaces/OperationParameter").OperationParameter[];
    parametersCookie: import("../client/interfaces/OperationParameter").OperationParameter[];
    parametersHeader: import("../client/interfaces/OperationParameter").OperationParameter[];
    parametersBody: import("../client/interfaces/OperationParameter").OperationParameter | null;
} | null;
//# sourceMappingURL=pickSpecialOperation.d.ts.map