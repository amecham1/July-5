var user = {
        name: 'Sally Rally',
        email: null,
        pwHash: 'U+Ldlngx2BYQk',
        birthday: undefined,
        username: 'SallyRally801',
        age: 0

        function cleanUser(obj) {
            for (key in obj) {
                if (obj[key] === false) {
                    delete obj[key];
                }
            }
            return obj;
        }
        cleanUser(user);
