export const createYearObj = (startDate) => {
    const endDate = new Date().getFullYear();
    let dates = [];
    let currentEndDate = endDate;
    while (startDate <= currentEndDate) {
        let obj = {year: currentEndDate, id: currentEndDate};
        dates.push(obj);
        currentEndDate--
    } 
    return dates;
};
