function register(db, user) {
    return db.run(`
        INSERT INTO registers (
            name,
            email,
            phone,
            password
        ) VALUES (
            "${user.name}",
            "${user.email}",
            "${user.phone}",
            "${user.password}"
        );
    `)
}

module.exports = register;