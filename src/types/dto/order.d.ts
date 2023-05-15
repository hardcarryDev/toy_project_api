type orderCreateMustInput = {
  id?: string;
  member_id: string;
  req_name?: string | null;
  res_address: string | null;
  res_phone: string | null;
  res_requirement?: string | null;
  total_price?: number | null;
  order_dt?: Date | string | null;
  order_cancel_dt?: Date | string | null;

  // 1. order_detail? : Prisma.order_detailCreateWithoutOrderInput
  // ===> 참조 안됌, any로 인식함. import 문제인줄 알았는데 아님 그냥 안됌.

  // 2. 직접 작성
  // ==> schema에 __type으로 나옴 그냥 익명 타입으로 만들어주긴 한데 이름이 안보임.
  // order_detail?: {
  //   id?: string | undefined;
  //   product_id: string;
  //   order_prod_cnt?: number;
  // };

  // 3. 타입을 아래에 작성
  // ==> 타입 이름이 표시되고, refs로 연결 가능함.
  order_detail?: order_detailCreateWithoutOrderInput[];
};

type order_detailCreateWithoutOrderInput = {
  id?: string;
  product_id: string;
  order_prod_cnt?: number;
};

type orderWhereClientInput = {
  AND?: Enumerable<orderWhereClientInput>;
  OR?: Enumerable<orderWhereClientInput>;
  NOT?: Enumerable<orderWhereClientInput>;
  id?: string;
  member_id?: string;
  req_name?: string | null;
  res_address?: string | null;
  res_phone?: string | null;
  res_requirement?: string | null;
  total_price?: number | null;
  order_dt?: Date | string | null;
  order_cancel_dt?: Date | string | null;
};

type Enumerable<T> = T | Array<T>;
