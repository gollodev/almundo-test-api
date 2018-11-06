const db = require('mongoose')
const dbUri = 'mongodb://root:root123@ds249583.mlab.com:49583/almundo-test-db'

db.connect(dbUri)

db.connection.on('connected', () => {
	console.log('MongoDB connection open to ' + dbUri)
})

db.connection.on('error', (error) => {
	console.log('MongoDB connection error ' + error)
})

db.connection.on('disconnected', () => {
	console.log('MongoDB connection disconnected')
})

process.on('SIGINT', () => {
	db.connection.close( () => {
		console.log('MongoDB connection disconnected through app termination')
		process.exit(0)
	})
})

// Use native promises
db.Promise = global.Promise

module.exports = db