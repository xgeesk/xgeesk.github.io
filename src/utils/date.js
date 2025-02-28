const today = new Date().getTime()
const MS_DAYS = 1000 * 60 * 60 * 24

/** @param {Date} dt */
export const getDays = (dt) => {
	if (!dt) return '-'
	return Math.max(0, Math.floor((today - dt) / MS_DAYS)).toString()
}

/** @param {string} dt */
export const parseDate = (str) => {
	if (!str) return null
	const dt = new Date(str)
	return Number.isNaN(dt.getTime()) ? null : dt
}
