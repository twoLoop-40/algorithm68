interface Add <T> {
	(arg1: T, arg2: T) : T
}

const addNumber: Add<number> = (num1, num2) => {
	return num1 + num2
}

const addString: Add<string> = (str1, str2) => {
	return str1 + str2
}