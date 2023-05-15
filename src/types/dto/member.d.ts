interface memberCreateMustInput {
  id?: string;
  user_id?: string;
  password?: string;
  name: string | null;
  gender?: member_gender | null;
  age?: number | null;
  email?: string | null;
  phone?: string | null;
  grade?: string | null;
  grade_id?: string | null;
  create_dt?: Date;
  update_dt?: Date | null;
  exit_dt?: Date | null;
}

type member_gender = 'M' | 'W';
