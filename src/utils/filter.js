export function createFilter(filter) {
    if (filter.values) {
        filter.values = filter.values.map((value) => ({
            label: value.title,
            value: value.id,
            children: value.children,
            visible: true,
            selected: false
        }));
    }

    if (filter.children) {
        filter.children = createFilter(filter.children);
    }

    return filter;
}

export function reduceFilter(payload, filter, values) {
    let children = filter.children;

    if (filter.id === payload.filter) {
        values = filter.values.map((value) => ({
            ...value,
            selected: typeof (payload.values.find((option) => option.value === value.value)) !== 'undefined'
        }));
    }

    if (children && children.values) {
        children = reduceFilter(payload, children, reduceFilterChildrenValues(values, children));
    }

    return {...filter, values: values, children: children};
}

function reduceFilterChildrenValues(parentValues, children) {
    const visibleValues = parentValues.filter((option) => option.visible);
    const values = children.values;

    if (visibleValues.length === 0) {
        return values.map((value) => ({...value, visible: false, selected: false}));
    }

    const selectedValues = visibleValues.filter((option) => option.selected);
    if (selectedValues.length > 0) {
        return createOptionsBySelectedValues(values, selectedValues);
    } else if (visibleValues.length > 0) {
        return createOptionsBySelectedValues(values, visibleValues);
    }

    return values.map((value) => ({...value, visible: false}));
}

function createOptionsBySelectedValues(options, selectedValues) {
    const allowedChildrenOptions = [];

    selectedValues.forEach((option) => {
        option.children.forEach((childrenOption) => {
            allowedChildrenOptions[childrenOption] = true;
        });
    });

    return options.map((option) => {
        if (allowedChildrenOptions[option.value]) {
            return {...option, visible: true};
        } else {
            return {...option, visible: false, selected: false};
        }
    });
}