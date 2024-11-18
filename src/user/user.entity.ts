export enum Role {
  USER = 'user',
  ADMIN = 'admin',
}

export class User {
  id: string;
  username: string;
  email: string;
  role: Role;
}
