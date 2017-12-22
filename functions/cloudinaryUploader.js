const cloudinaryUploader = (cloudinary, imagePath) => {
	return new Promise( (resolve, reject) => {
		try {
			cloudinary.uploader.upload(`images/${imagePath}`, (result) => {
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
				tags: imagePath.replace(/-[0-9]+.jpg/,'')
			})
		} catch (error) {
			reject(error)
		}
	})
}

module.exports = cloudinaryUploader
