type memberCreateMustInput = {
  user_id?: string;
  password?: string;
  name?: string | null;
  gender?: Gender | null;
  age?: number | null;
  email?: string | null;
  phone?: string | null;
  grade?: string | null;
  grade_id?: string | null;
};

type memberWhereClientInput = {
  id?: string;
  user_id?: string;
  password?: string;
  name?: string | null;
  gender?: Gender | null;
  age?: number | null;
  email?: string | null;
  phone?: string | null;
  grade?: string | null;
  grade_id?: string | null;
  create_dt?: Date | string | null;
  update_dt?: Date | string | null;
  exit_dt?: Date | string | null;
};

type memberUpdateMustInput = {
  id: string;
  user_id?: string;
  password?: string;
  name?: string | null;
  gender?: Gender | null;
  age?: number | null;
  email?: string | null;
  phone?: string | null;
  grade?: string | null;
  grade_id?: string | null;
  update_dt?: Date | string | null;
  exit_dt?: Date | string | null;
};

type memberDeleteInput = ID;
