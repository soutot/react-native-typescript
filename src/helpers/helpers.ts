export const replaceAll = (str: string = "", find: string, replace: string) =>
	str.replace(new RegExp(find, "g"), replace)

export const preventStringCharacters = (
	text: string,
	getFieldValue: (value: string) => void
) => {
	if (isNaN(Number(replaceAll(text, " ", "")))) {
		getFieldValue(text.slice(0, -1))
		return false
	}
	return true
}

export const formatCardNumber = text => {
	const cleanText = replaceAll(text, " ", "")
	if (cleanText.length >= 16) {
		const cardNumber = cleanText
			.substring(0, 16)
			.match(/(\d{4})(\d{4})(\d{4})(\d{4})/)
		return `${cardNumber[1]} ${cardNumber[2]} ${cardNumber[3]} ${cardNumber[4]}`
	}
	return (text = `${text} `)
}

export const addGaps = (text: string = "", gaps: number[]) => {
	const offsets = [0].concat(gaps).concat([text.length])

	return offsets
		.map((end, index) => {
			if (index === 0) {
				return ""
			}
			const start = offsets[index - 1]
			return text.substr(start, end - start)
		})
		.filter(part => part !== "")
		.join(" ")
}