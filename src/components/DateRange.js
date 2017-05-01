import React from "react";

import {DateRangePicker} from "react-dates";

export default class DateRange extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: null,
            endDate: null,
        };

        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
    }

    onDatesChange({startDate, endDate}) {
        this.setState({startDate, endDate});
    }

    onFocusChange(focusedInput) {
        this.setState({focusedInput});
    }

    render() {
        const {focusedInput, startDate, endDate} = this.state;

        const props = {
            minimumNights: 0,
            startDatePlaceholderText: 'Datum od',
            endDatePlaceholderText: 'Datum do',
            isOutsideRange: (day) => false,
        };

        return <label>
            {this.props.label}
            <div>
                <DateRangePicker
                    {...props}
                    onDatesChange={this.onDatesChange}
                    onFocusChange={this.onFocusChange}
                    focusedInput={focusedInput}
                    startDate={startDate}
                    endDate={endDate}
                />
            </div>
        </label>
    }
}