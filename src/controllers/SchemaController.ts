import typia from 'typia';
import { Request, Response } from 'express';
type IObject = typia.IJsonComponents.IObject;
type Ischema = IObject | Record<string, IObject> | typia.IJsonSchema[];

class SchemaController {
  protected schemaInfo: Ischema;

  constructor(schemaInfo: Ischema) {
    this.schemaInfo = schemaInfo;
  }
  print = (req: Request, res: Response) => {
    res.send(this.schemaInfo);
  };
}
export default SchemaController;
