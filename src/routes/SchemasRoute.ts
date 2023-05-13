import BaseRoutes from './BaseRouter';
import SchemaController from '../controllers/SchemaController';

import typia from 'typia';
const ajv = typia.application<[memberCreateMustInput, memberCreateMustInput2, memberCreateMustInput3], 'ajv'>();
// console.log(ajv.components.schemas);

class SchemasRoute extends BaseRoutes {
  public routes(): void {
    const router = this.router;
    for (const key in ajv.components.schemas) {
      if (Object.prototype.hasOwnProperty.call(ajv.components.schemas, key)) {
        const schemaInfo = ajv.components.schemas[key];
        console.log(key);
        router.get(`/${key}`, new SchemaController(schemaInfo).implementShemaPrint);
      }
    }
  }
}

export default new SchemasRoute().router;
