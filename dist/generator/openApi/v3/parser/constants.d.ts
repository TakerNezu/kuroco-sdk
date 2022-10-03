export declare enum PrimaryType {
    FILE = "File",
    OBJECT = "any",
    ARRAY = "any[]",
    BOOLEAN = "boolean",
    NUMBER = "number",
    STRING = "string",
    VOID = "void",
    NULL = "null"
}
export declare const TYPE_MAPPINGS: Map<string, PrimaryType>;
export declare enum Method {
    GET = "get",
    PUT = "put",
    POST = "post",
    DELETE = "delete",
    OPTIONS = "options",
    HEAD = "head",
    PATCH = "patch"
}
export declare enum ContentType {
    APPLICATION_JSON_PATCH = "application/json-patch+json",
    APPLICATION_JSON = "application/json",
    TEXT_JSON = "text/json",
    TEXT_PAIN = "text/plain",
    MULTIPART_MIXED = "multipart/mixed",
    MULTIPART_RELATED = "multipart/related",
    MULTIPART_BATCH = "multipart/batch"
}
//# sourceMappingURL=constants.d.ts.map