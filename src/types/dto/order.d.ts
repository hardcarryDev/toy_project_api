interface orderCreateMustInput {
  id?: string;
  member_id: string;
  req_name?: string | null;
  res_address?: string | null;
  res_phone?: string | null;
  res_requirement?: string | null;
  total_price?: number | null;
  order_dt?: Date | string | null;
  order_cancel_dt?: Date | string | null;
  order_detail?: order_detailCreateNestedManyWithoutOrderInput;
}
