type cartCreateMustInput = {
  user_id?: string | null;
  product_id: string;
  product_name?: string | null;
  product_price?: number | null;
  status?: string | null;
};

type cartWhereClientInput = {
  AND?: Enumerable<cartWhereInput>;
  OR?: Enumerable<cartWhereInput>;
  NOT?: Enumerable<cartWhereInput>;
  id?: string;
  user_id?: string | null;
  product_id?: string;
  product_name?: string | null;
  product_price?: number | null;
  status?: string | null;
  create_dt?: Date | string | null;
  update_dt?: Date | string | null;
  delete_dt?: Date | string | null;
};

type cartUpdateMustInput = {
  id: string;
  user_id?: string | null;
  product_id?: string;
  product_name?: string | null;
  product_price?: number | null;
  status?: string | null;
  create_dt?: Date | string | null;
  update_dt?: Date | string | null;
  delete_dt?: Date | string | null;
};

type cartDeleteInput = ID;
