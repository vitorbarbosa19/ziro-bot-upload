const bulkUploader = () => {
	return new Promise( async (resolve, reject) => {
		try {
			const cloudinary = require('cloudinary')
			const credentials = require('./credentials')
			cloudinary.config(credentials)
			const cloudinaryUploader = require('./cloudinaryUploader')
			let uploads = []
			for (let index = 0; index < 1; index++) {
				uploads.push(await cloudinaryUploader(cloudinary))
			}
			resolve(uploads)
		} catch (error) {
			reject(error)
		}
	})
}

module.exports = bulkUploader
