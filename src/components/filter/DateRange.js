import React from "react";

import store from "../../store";
import {changeFilterDate} from "../../actions/filtersActions";

import {DateRangePicker} from "react-dates";

export default class DateRange extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
    }

    onDatesChange({startDate, endDate}) {
        store.dispatch(changeFilterDate(this.props.id, startDate, endDate));
    }

    onFocusChange(focusedInput) {
        this.setState({focusedInput});
    }

    render() {
        const {focusedInput} = this.state;
        const {label, startDate, endDate} = this.props;

        const props = {
            minimumNights: 0,
            startDatePlaceholderText: 'Datum od',
            endDatePlaceholderText: 'Datum do',
            isOutsideRange: (day) => false,
        };

        return <div className="col-xs-12 col-sm-4">
            <label style={{width: '100%'}} className="form-group">
                {label}
                <DateRangePicker
                    {...props}
                    onDatesChange={this.onDatesChange}
                    onFocusChange={this.onFocusChange}
                    focusedInput={focusedInput}
                    startDate={startDate}
                    endDate={endDate}
                />
            </label>
        </div>
    }
}