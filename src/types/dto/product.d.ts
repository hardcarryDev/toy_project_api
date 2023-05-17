type productCreateMustInput = {
  name?: string | null;
  price?: number | null;
  category?: string | null;
  description?: string | null;
  company?: string | null;
};

type productWhereClientInput = {
  id?: string;
  name?: string | null;
  price?: number | null;
  category?: string | null;
  description?: string | null;
  company?: string | null;
  create_dt?: Date | string | null;
  update_dt?: Date | string | null;
  delete_dt?: Date | string | null;
};

type productUpdateMustInput = {
  id: string;
  name?: string | null;
  price?: number | null;
  category?: string | null;
  description?: string | null;
  company?: string | null;
};

type productDeleteInput = ID;
