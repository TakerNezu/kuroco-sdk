import * as Handlebars from 'handlebars';
export interface Templates {
    index: Handlebars.TemplateDelegate;
    model: Handlebars.TemplateDelegate;
    schema: Handlebars.TemplateDelegate;
    service: Handlebars.TemplateDelegate;
    settings: Handlebars.TemplateDelegate;
    apiInfo: Handlebars.TemplateDelegate;
    auth: Handlebars.TemplateDelegate;
    uploadHelper: Handlebars.TemplateDelegate;
    firebaseUtil: Handlebars.TemplateDelegate;
}
/**
 * Read all the Handlebar templates that we need and return on wrapper object
 * so we can easily access the templates in out generator / write functions.
 */
export declare function readHandlebarsTemplates(): Templates;
//# sourceMappingURL=readHandlebarsTemplates.d.ts.map