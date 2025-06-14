


export const uservalidation = 
    {
    username: {
        isLength: {
            options: {
                min: 3,
                max: 20
            },
        errorMessage: "username is not of the equired length"
        },
        notEmpty: {
            errorMessage: "username can not be empty"
        },
        isString: {
            errorMessage: "user name should be a string "
        }

    },
     password: {
        isLength: {
            options: {
                min: 3,
                max: 20
            },
        errorMessage: "password is very short"
        },
        notEmpty: {
            errorMessage: "yo! Where is the Password"
        },

    },
       email: {
        notEmpty: {
            errorMessage: "yo! yo! dont Fuck with Me , u bitch"
        }

    }


    }
