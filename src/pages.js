// importar bibliotecas
const Database = require('./database/db.js');
const register = require('./database/register.js');

module.exports = {

    index (request, response) {
        return response.render('index');
    },

    register (request, response) {
        return response.render('register');
    },

    loginFailed (request, response) {
        return response.render('login-failed');
    },

    loginSucceeded (request, response) {
        return response.render('login-succeeded');
    },

    async users (request, response) {
        try {
            const db = await Database;
            const user = await db.all(`SELECT * FROM registers`);

            return response.render('users', { user: user });
        } catch (error) {
            console.log(error);
            return response.send('Erro no banco de daodos!')
        }
    },

    async registerUser (request, response) {
        const fields = request.body

        // validar se todos os campos estão preenchidos
        if (Object.values(fields).includes('')) {
            return response.send('Todos os campos devem ser preenchidos!')
        }

        try {
            // registrar o usuário
            const db = await Database;
            await register(db, {
                name: fields.name,
                email: fields.email,
                phone: fields.phone,
                password: fields.password
            })

            // redirecionar o usuário
            return response.redirect('/')

        } catch (error) {
            console.log(error);
            return response.send('Erro no banco de dados!');
        }
    },

    async verifyUser (request, response) {
        const fields = request.body;

        // validar se todos os campos estão preenchidos
        if (Object.values(fields).includes('')) {
            return response.send('Todos os campos devem ser preenchidos!')
        }

        try {
            const db = await Database;
            const users = await db.all(`SELECT * FROM registers`);
            var verify = false;
            
            // verificar se os dados constam no Banco de Dados
            for (const user in users) {
                if (fields.email == users[user].email && fields.password == users[user].password) {
                    verify = true;
                }
            }

            if (verify) {
                return response.redirect('/login-succeeded')
            }

            else {
                return response.redirect('/login-failed')
            }

        } catch (error) {
            console.log(error)
            return response.send('Erro no banco de dados!')
        }
    }
}