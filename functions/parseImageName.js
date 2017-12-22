const parseImageName = (imagePath) => {
	try {
		return imagePath.replace('-',' ').replace('.jpg','')
	} catch (error) {
		return error
	}
}

module.exports = parseImageName
