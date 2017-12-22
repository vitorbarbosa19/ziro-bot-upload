const bulkUploader = () => {
	return new Promise( async (resolve, reject) => {
		try {
			const cloudinary = require('cloudinary')
			const credentials = require('./credentials')
			cloudinary.config(credentials)
			const cloudinaryUploader = require('./cloudinaryUploader')
			const readDirectory = require('./readDirectory')
			const imagePaths = await readDirectory()
			let uploads = []
			for (let index = 0; index < imagePaths.length; index++) {
				uploads.push(await cloudinaryUploader(cloudinary, imagePaths[index]))
			}
			resolve(uploads)
		} catch (error) {
			reject(error)
		}
	})
}

module.exports = bulkUploader
