import typia from 'typia';
import { Request, Response } from 'express';
class SchemaController {
  protected schemaInfo: typia.IJsonComponents.IObject;

  constructor(schemaInfo: typia.IJsonComponents.IObject) {
    this.schemaInfo = schemaInfo;
  }
  implementShemaPrint = (req: Request, res: Response) => {
    res.send(this.schemaInfo);
  };
}
export default SchemaController;
