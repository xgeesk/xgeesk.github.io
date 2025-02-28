const units = ['B', 'kB', 'MB', 'GB']

/** @param {number} bytes */
export const filesize = (bytes) => {
	if (!bytes) return '0 B'
	let n = bytes
	for (const unit of units) {
		if (n < 1024) return `${n.toFixed(2)} ${unit}`
		n /= 1024
	}
	return `${n.toFixed(2)} TB`
}
