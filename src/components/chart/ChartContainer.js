import React from 'react';

import Chart from './Chart';
import ChartTable from './ChartTable';
import Loading from '../Loading';
import { ExportExcelButton, ExportJpgButton, ExportPdfButton, ExportPdfButtonTest } from './ExportButton';

import store from '../../store';
import { fetchGraph } from '../../actions/graphActions';
import { stringify } from 'query-string';

export default class ChartContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            chartImage: null,
        };
    }

    componentWillMount() {
        const { graph, filters } = this.props;

        if (!graph.fetched && !graph.fetching && !graph.error) {
            store.dispatch(fetchGraph(filters.filters));
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
        this.refs.chart.chart_instance = null;
    }

    generateImage() {
        clearTimeout(this.timeout);

        if (this.refs.chart && this.refs.chart.chart_instance) {
            const image = this.refs.chart.chart_instance.toBase64Image();
            this.setState({ chartImage: image });

            if (image.length > 10) {
                return;
            }
        }

        this.timeout = setTimeout(this.generateImage.bind(this), 500);
    }

    render() {
        const { fetching, data, options, table, error } = this.props.graph;
        const { chartImage } = this.state;

        if (fetching) {
            return <Loading />;
        }

        if (error) {
            return null;
        }

        const filterQueryString = stringify(this.props.filterQuery);
        const chartVisibilityClass = chartImage ? '' : 'hidden';

        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.generateImage.bind(this), 500);

        return (
            <div className="row">
                {chartImage === null && (
                    <Loading />
                )}
                <div className={chartVisibilityClass}>
                    <div className="col-sm-10">
                        <div className="form-group">
                            <Chart data={data} options={options} ref='chart' />
                        </div>
                        <div className="form-group">
                            <ChartTable data={table} />
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="form-group">
                            {chartImage && (
                                <div>
                                    <ExportPdfButton filterQuery={filterQueryString} image={chartImage} />
                                    <ExportExcelButton filterQuery={filterQueryString} image={chartImage} />
                                    <ExportJpgButton filterQuery={filterQueryString} image={chartImage} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
