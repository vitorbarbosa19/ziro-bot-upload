const readDirectory = () => {
	return new Promise( (resolve, reject) => {
		try {
			const fs = require('fs')
			fs.readdir('./images', (error, images) => {
				if(error)
					reject(error)
				resolve(images)
			})
		} catch (error) {
			reject(error)
		}
	})
}

module.exports = readDirectory
