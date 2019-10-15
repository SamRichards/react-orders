export const filterRows = (data, search) => {
    return data.filter((row) => {
        if (search === '') {
            return true;
        }

        const lowerCaseSearch = search.toLowerCase();
        const soNumber = row['soNumber'].toLowerCase();
        const pnNumber = row['pnUpper'].toLowerCase();
    
        return soNumber.indexOf(lowerCaseSearch) !== -1 ||
            pnNumber.indexOf(lowerCaseSearch) !== -1;
    })
}
