export function updateObjectInArray<T> (items: T[], itemId: number, objPropName: string, newObjProps: object) {
	return items.map(item => {
		//@ts-ignore
		if (item[objPropName] === itemId) { //
			return {
				...item,
				...newObjProps
			}
		}
		else return item;
	})
}

