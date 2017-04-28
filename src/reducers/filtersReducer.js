import _ from "lodash";

export default function filtersReducer(state = {
    fetching: false,
    fetched: false,
    filters: [],
    error: null
}, action) {
    switch (action.type) {
        case 'FETCH_FILTERS_PENDING': {
            return Object.assign({}, state, {
                fetching: true
            });
        }
        case 'FETCH_FILTERS_REJECTED': {
            return Object.assign({}, state, {
                fetching: false,
                error: action.payload
            });
        }
        case 'FETCH_FILTERS_FULFILLED': {
            let filters = [];
            action.payload.data.forEach((filter) => {
                filters.push(createFilter(filter));
            });

            return Object.assign({}, state, {
                fetching: false,
                fetched: true,
                filters: filters
            });
        }
        case 'FILTER_CHANGED': {
            return Object.assign({}, state, {
                filters: state.filters.map((filter) => reduceFilter(action.payload, filter, filter.values))
            });
        }
    }
    return state;
}

function createFilter(filter) {
    if (filter.values) {
        filter.values = filter.values.map((value) => {
            return Object.assign({}, value, {
                visible: true,
                selected: false
            });
        });
    }

    if (filter.children) {
        filter.children = createFilter(filter.children);
    }

    return filter;
}

function reduceFilter(payload, filter, values) {
    if (filter.id === payload.filter) {
        values = filter.values.map((value) => {
            return Object.assign({}, value, {
                selected: !_.isEmpty(payload.values.find((option) => option === value.id))
            });
        });
    }

    let children = filter.children;

    if (filter.children.values) {
        children = reduceFilter(payload, filter.children, reduceFilterChildrenValues(values, filter.children));
    }

    return Object.assign({}, filter, {
        values: values,
        children: children
    });
}

function reduceFilterChildrenValues(parentValues, children) {
    const visibleValues = parentValues.filter((option) => option.visible);
    if (visibleValues.length === 0) {
        return children.values.map((value) => {
            return Object.assign({}, value, {
                visible: false,
                selected: false
            });
        });
    }

    const selectedValues = visibleValues.filter((option) => option.selected);
    if (selectedValues.length > 0) {
        const allowedChildrenOptions = [];

        selectedValues.forEach((option) => {
            option.children.forEach((value) => {
                allowedChildrenOptions[value] = true;
            });
        });

        return children.values.map((value) => {
            if (allowedChildrenOptions[value.id]) {
                return Object.assign({}, value, {
                    visible: true
                });
            } else {
                return Object.assign({}, value, {
                    visible: false,
                    selected: false
                });
            }
        });
    }

    return children.values.map((value) => {
        return Object.assign({}, value, {
            visible: true
        });
    });
}
