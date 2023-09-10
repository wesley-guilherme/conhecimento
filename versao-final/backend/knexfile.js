module.exports = {
	client: 'postgresql',
	connection: {
		database: 'knowledge_final',
		user: 'postgres',
		password: 'wesley18@188'
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};
