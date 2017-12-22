const cloudinaryUploader = (cloudinary) => {
	return new Promise( (resolve, reject) => {
		try {
			cloudinary.uploader.upload('images/luzia-fazzolli.jpg', (result) => {
				if(result.url && result.tags) {
					resolve({
						status: 'success',
						url: result.url,
						tag: result.tags[0]
					})
				}
				resolve(result)
			},
			{
				tags: ['luzia fazzolli']
			})
		} catch (error) {
			reject(error)
		}
	})
}

module.exports = cloudinaryUploader
