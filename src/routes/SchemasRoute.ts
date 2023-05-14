import BaseRoutes from './BaseRouter';
import SchemaController from '../controllers/SchemaController';

import typia from 'typia';
const ajv = typia.application<[memberCreateMustInput, memberCreateMustInput2, memberCreateMustInput3], 'ajv'>();
// console.log(ajv.components.schemas);

class SchemasRoute extends BaseRoutes {
  public routes(): void {
    const router = this.router;

    router.get('/', new SchemaController(ajv.components.schemas).print); // 전체 목록
    router.get('/summary', new SchemaController(ajv.schemas).print); // 요약본

    // 세부 목록
    for (const key in ajv.components.schemas) {
      if (Object.prototype.hasOwnProperty.call(ajv.components.schemas, key)) {
        const schemaInfo = ajv.components.schemas[key];
        console.log(key);
        router.get(`/${key}`, new SchemaController(schemaInfo).print);
      }
    }
  }
}

export default new SchemasRoute().router;
