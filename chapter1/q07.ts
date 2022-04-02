interface BinaryDate {
	type: string,
	value: string
}

type Dateform = number | BinaryDate 

function mirrorBinDate (date: Dateform) {
	const check: (arg: string) => boolean = (value: string) => {
		if (value.length <= 1) return true
		else {
			return (value[0] === value[value.length - 1]) && 
				check(value.slice(1, length - 1))
		}
	}
	const isSymmtric: (arg: Dateform) => boolean =
	 	(chars: Dateform): boolean => {
		if (typeof chars === 'number') return false
		else {
			const { value } = chars
			return check(value)
		}
	}
	const isBinaryDate: (arg: Dateform) => boolean = 
		(date: Dateform): boolean => {
		if (typeof date === 'number') return false
		else {
			const { type } = date
			return type === 'binary'
		}		
	}
	const getBinDate: (date: number) => BinaryDate = 
		(date: number) => {
		const value = date.toString(2)
		const type = 'binary'
		return { type, value }
	}
	if (typeof date === 'number') {
		const binDate = getBinDate(date)
		mirrorBinDate(binDate)
	} 
	if (isBinaryDate(date)) {
		return isSymmtric(date)
	} else {
		return false
	}
}

function runQ07 () {
	const date = 20220402
	console.log('2022.4.2 확인:',mirrorBinDate(date))
}

runQ07()