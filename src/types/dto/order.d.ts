type orderCreateMustInput = {
  member_id: string;
  req_name?: string | null;
  res_address?: string | null;
  res_phone?: string | null;
  res_requirement?: string | null;
  total_price?: number | null;
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

type orderUpdateMustInput = {
  id: string;
  member_id?: string;
  req_name?: string | null;
  res_address?: string | null;
  res_phone?: string | null;
  res_requirement?: string | null;
  total_price?: number | null;
  order_dt?: Date | string | null;
  order_cancel_dt?: Date | string | null;
  order_detail?: order_detailCreateWithoutOrderInput[];
};

type orderDeleteInput = ID;
