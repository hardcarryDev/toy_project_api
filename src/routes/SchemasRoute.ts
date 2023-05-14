import BaseRoutes from './BaseRouter';
import SchemaController from '../controllers/SchemaController';
import typia from 'typia';
// [types/dto/**/*] 에 있는 커스텀 타입을 스키마에 등록해서 다른 개발자들과 공유하기 편하게 처리하자.
// 주로 create 또는 update 관련 API에 전달될 파라미터에 필수값이 필요한 경우 타입을 지정하고 알려주면 됨.
const ajv = typia.application<[memberCreateMustInput, orderCreateMustInput, orderWhereClientInput], 'ajv'>();

class SchemasRoute extends BaseRoutes {
  public routes(): void {
    const router = this.router;

    router.get('/', new SchemaController(ajv.components.schemas).print); // 전체 목록
    router.get('/summary', new SchemaController(ajv.schemas).print); // 요약본

    // 세부 목록
    for (const key in ajv.components.schemas) {
      if (Object.prototype.hasOwnProperty.call(ajv.components.schemas, key)) {
        const schemaInfo = ajv.components.schemas[key];
        router.get(`/${key}`, new SchemaController(schemaInfo).print);
      }
    }
  }
}

export default new SchemasRoute().router;
