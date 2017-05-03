import React from "react";
import moment from "moment";

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

        const props = {
            minimumNights: 0,
            startDatePlaceholderText: 'Datum od',
            endDatePlaceholderText: 'Datum do',
            isOutsideRange: (day) => false,
        };

        return <div className="col-xs-12 form-group">
            <label>
                {this.props.label}
                <div>
                    <DateRangePicker
                        {...props}
                        onDatesChange={this.onDatesChange}
                        onFocusChange={this.onFocusChange}
                        focusedInput={focusedInput}
                        startDate={this.props.startDate}
                        endDate={this.props.endDate}
                    />
                </div>
            </label>
        </div>
    }
}