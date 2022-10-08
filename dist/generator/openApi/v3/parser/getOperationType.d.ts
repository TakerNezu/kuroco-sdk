import { OPERATION_PATTERN } from '../../../client/interfaces/OperationPattern';
/**
 * Get operation type. returns a value to get whether this target operation shuold be special process.
 * @param pathSummary
 * @note here 'pathSummary' is not 'summary' in operation, should be set from path object.
 */
export declare function getOperationType(pathSummary?: string): OPERATION_PATTERN | null;
//# sourceMappingURL=getOperationType.d.ts.map