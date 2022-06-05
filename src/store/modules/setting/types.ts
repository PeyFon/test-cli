export type RoleType = "" | "*" | "admin" | "user";
export interface IUserState {
  user_id?: string;
  user_name?: string | undefined;
  real_name?: string;
  avatar?: string;
  desc?: string;
  password?: string;
  token?: string;
  organization?: string;
  location?: string;
  email?: string;
  auths?: string[];
  is_admin?: number;
  blogJuejin?: string;
  blogZhihu?: string;
  blogGithub?: string;
  profileBio?: string;
  devLanguages?: string;
  role?: RoleType;
}
