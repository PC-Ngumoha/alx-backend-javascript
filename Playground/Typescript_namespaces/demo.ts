namespace DatabaseEntity {
  export class User {
    constructor(public name: string) {}
  }
  export const newUser = new User('Chukwuemeka');
}

namespace DatabaseEntity{
  export class UserRole {
    constructor(public user: User, public role: string) {}
  }

  export const newUserRole = new UserRole(newUser, "admin");
}
