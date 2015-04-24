var fastSort = function (arrayToSort, propertyToSortWith, sortDirection) {
	// temporary holder of position and sort-value
	var map = arrayToSort.map(function (e, i) {
		if (typeof e[propertyToSortWith] === 'string') {
			return { index: i, value: e[propertyToSortWith].toLowerCase() };                    
		}
		else {
			return { index: i, value: e[propertyToSortWith] };
		}
		
	})

	// sorting the map containing the reduced values
	map.sort(function (a, b) {
		if (sortDirection === "ascending") {
			return +(a.value > b.value) || +(a.value === b.value) - 1;
		}
		else {
			return +(a.value < b.value) || +(a.value === b.value) - 1;
		}
		
	});

	// container for the resulting order
	var result = map.map(function (e) {
		return arrayToSort[e.index];
	});
	return result;
};
	