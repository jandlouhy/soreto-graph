import React from "react";

export default class ChartTable extends React.Component {
    render() {
        const {data} = this.props;

        if (data) {
            const table = [...data];
            const head = table.shift();

            return <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        {head.map((row, key) => <th key={key}>{row}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {table.map((row, key) => <tr key={key}>{row.map((col, colKey) => <td key={colKey}>{col}</td>)}</tr>)}
                </tbody>
            </table>
        }

        return null;
    }
}