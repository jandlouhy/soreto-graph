export function buildFilterQueryObject(filters) {
    let query = {};

    filters.forEach((filter) => {
        addFilterToQuery(filter, query);
    });

    return query;
}

function addFilterToQuery(filter, query) {
    if (filter.values) {
        const selected = filter.values
            .filter((value) => value.selected)
            .map((value) => value.value);

        if (selected) {
            query[filter.id] = selected;
        }
    } else {
        const {startDate, endDate} = filter;
        if (startDate) {
            query[`${filter.id}[startDate]`] = startDate.format("L");
        }
        if (endDate) {
            query[`${filter.id}[endDate]`] = endDate.format("L");
        }
    }

    if (filter.children) {
        addFilterToQuery(filter.children, query);
    }
}