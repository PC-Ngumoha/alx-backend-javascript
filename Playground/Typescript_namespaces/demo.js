var DatabaseEntity;
(function (DatabaseEntity) {
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        return User;
    }());
    DatabaseEntity.User = User;
    DatabaseEntity.newUser = new User('Chukwuemeka');
})(DatabaseEntity || (DatabaseEntity = {}));
(function (DatabaseEntity) {
    var UserRole = /** @class */ (function () {
        function UserRole(user, role) {
            this.user = user;
            this.role = role;
        }
        return UserRole;
    }());
    DatabaseEntity.UserRole = UserRole;
    DatabaseEntity.newUserRole = new UserRole(DatabaseEntity.newUser, "admin");
})(DatabaseEntity || (DatabaseEntity = {}));
