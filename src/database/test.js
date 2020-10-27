const Database = require('./db.js');
const register = require('./register.js');

Database.then(async (db) => {
    // inserir dados na tabela
    // await register(db, {
    //     name: 'Jorge Luiz',
    //     email: 'jorgel28@gmail.com',
    //     phone: '2198734657',
    //     password: '0099887766'
    // });

    // consultar dados na tabela
    // const selectedRegisters = await db.all(`SELECT * FROM registers`);
    // console.log(selectedRegisters);

    // consultar dados na tabela pelo id
    // const register = await db.all(`SELECT * FROM registers WHERE id = 2`);
    // console.log(register);

    // deletar todos os dados da tabela
    // console.log(await db.run(`DELETE FROM registers`));

    // deletar dado da tabela pelo id
    // console.log(await db.run(`DELETE FROM registers WHERE id = 4`))
})