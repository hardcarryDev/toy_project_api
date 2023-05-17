import { Request } from 'express';
import { BaseService, typia, Prisma, prisma, _ } from './BaseService';

class ProductService extends BaseService {
  constructor(req: Request) {
    super(req);
  }

  async createProduct() {
    typia.assertEquals<productCreateMustInput>(this.body);
    const product = await prisma.product.create({
      data: <Prisma.productCreateInput>this.body,
    });
    return product;
  }

  async productList() {
    typia.assertEquals<productWhereClientInput>(this.body);
    const result = await prisma.product.findMany({
      where: <Prisma.productWhereInput>this.body,
    });
    return result;
  }

  async updateProduct() {
    typia.assertEquals<productUpdateMustInput>(this.body);
    const { id } = <productUpdateMustInput>this.body;
    const data = _.cloneDeep(<Prisma.productUpdateInput>this.body);
    delete data.id;

    const product = await prisma.product.update({
      where: {
        id: id,
      },
      data: {
        ...data,
        update_dt: this.nowDt(),
      },
    });
    return product;
  }

  async deleteProduct() {
    typia.assertEquals<productDeleteInput>(this.body);
    const { id } = <productDeleteInput>this.body;
    const product = await prisma.product.update({
      where: { id },
      data: {
        update_dt: this.nowDt(),
        delete_dt: this.nowDt(),
      },
    });
    return product;
  }
}

export default ProductService;
