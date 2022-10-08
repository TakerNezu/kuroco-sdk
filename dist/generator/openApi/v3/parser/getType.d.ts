import { Type } from '../../../client/interfaces/Type';
/**
 * Parse any string value into a type object.
 * @param value String value like "integer" or "Link[Model]".
 * @param template Optional template class from parent (needed to process generics)
 */
export declare function getType(value?: string, template?: string): Type;
//# sourceMappingURL=getType.d.ts.map