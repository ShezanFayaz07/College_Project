    name: {
        type : String,
        required : true,
        trim : true,
        maxlength : 50
    },
    email: {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
        match: [/^\S+@\S+\.\S+$/, "Please use a valid email"]
    },
    passwordHash: {
        type : String,
        required : function () {
            return this.authProvider === 'email';
        }
    },
    authProvider: {
        type : String,
        enum : ['email', 'google'],
        default : 'email'
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true
    },
    role: {
        type : String,
        enum : ['creator', 'admin'],
        default : 'creator'
    },
    lastLoginAt: {
        type : Date
    }