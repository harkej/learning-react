// Component in latest info view for latest values of 4 charts
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'

// Component fromthird party charting library
import { LineChart, Line, ResponsiveContainer } from 'recharts';

// components for Material UI elements
import { darkBlack } from 'material-ui/styles/colors';
import Checkbox from 'material-ui/Checkbox';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';

// redux actions for getting equipment and chart data from store and sending state changes
import * as chartActions from '../redux/actions/chartActions';

// connecting redux store returned objects as state for component
const mapStateToProps = state => {
    return {
        chart: state.chartReducer
    }
}
// styles for checkbox from material UI
const iconStyles = {
    marginRight: 24,
  };

//  material UI checkbox states
const UnChecked = (props) => (
    <SvgIcon {...props}>
        <rect width="18" height="18" rx="9" stroke="#FFF" fill="transparent"/>
    </SvgIcon>
);
const Checked = (props) => (
    <SvgIcon {...props}>
        <rect width="18" height="18" rx="9" stroke="#FFF" fill="transparent"/>
        <polygon points="7.4 11.2 5.3 9.1 4.6 9.8 7.4 12.6 7.4 12.6 7.4 12.6 13.8 6.2 13.1 5.5" fill="#FFF"/>
    </SvgIcon>
);

class LatestMiniView extends Component {
    constructor(props){
        super(props);
        this.fetchData.bind(this);
        this.state = {
            change: "positive"
        }
    }

// lifecycle method to call member function for data
    componentWillMount() {
        this.fetchData(this.props.equipmentId);
    }

// lifecycle method to refresh charts every few seconds with new data
    componentDidMount() {
        let i = process.env.CHART_REFRESH_INTERVAL;
        this.intervalId = setInterval(() => {
            this.fetchData(this.props.equipmentId);
        }, i);
    }

// lifecycle method to clear interval upon unmounting of component
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    
// member function to fetch data from API
    fetchData(equipmentId) {
        this.props.dispatch(
            chartActions.fetchChartData(
                this.props.chartKey,
                equipmentId,
                this.props.chartConfig.timeWindow,
                this.props.chartConfig.dataKey,
                this.props.accessToken
            )
        );
    }

// member function to find latest timestamp of data
    latestValue(dataKey, data) {
        if (data.length == 0)
            return "0";
        let lastItem = data[data.length - 1];
        if (isNaN(lastItem[dataKey])) {
            var dt = new Date(lastItem[dataKey]);
            return dt.toString().substring(4,10) + ', ' + dt.toLocaleTimeString();
        }
        else {
            return lastItem[dataKey].toFixed(2);
        }
        return "0";
    }

// member function to find lowest value in 24 hours from data and display with truncation
    MinValue(dataKey, data) {
        if (data.length == 0)
        {
            return "0";
        }
         else
         {
             var chartValues=[];
            // data.
            var count=data.length;
            for(var i=0;i<count;i++)
            {
                var temp=data[i];
                chartValues.push(temp[dataKey]);
            }

            return Math.min.apply(0,chartValues).toFixed(2);
         }  
    }

// member function to find highest value in 24 hours from data and display with truncation
    MaxValue(dataKey, data) {
        if (data.length == 0)
        {
            return "0";
        }
         else
         {
            var chartValues=[];
            // data.
            var count=data.length;
            for(var i=0;i<count;i++)
            {
                var temp=data[i];
                chartValues.push(temp[dataKey]);
            }

             return Math.max.apply(0,chartValues).toFixed(2);
         }  
    }

// member function to find change of latest value over previous state
    ChangePercent(dataKey, data) {
        if (data.length == 0)
        {
            return "0";
        }
        else
        {
            let firstItem = data[data.length - 1];
            let firstValue= firstItem[dataKey];
            let secondItem = data[data.length - 2];
            let secondValue= secondItem[dataKey];
            let change;
            if(secondValue==0)
            {
                this.setState.change="positive";
                return "NA";
            }
            else if(firstValue > secondValue)
            {   
                this.setState.change="positive";
                return "+"+(((firstValue-secondValue)/secondValue)*100).toFixed(2)+"%";
            }
            else if(firstValue < secondValue)
            {
                this.setState.change="negative";
                return "-"+(((secondValue-firstValue)/secondValue)*100).toFixed(2)+"%";
            } 
            else if(firstValue === secondValue)
            {
                this.setState.change="negative";
                return "No change";
            }
        }  
    }

// member function to update state of check box in component
    updateCheck() {
        this.setState((oldState) => {
            return {
                checked: !oldState.checked,
            };
        });
        this.updateChart(this.state.checked)
    }

// member function to update state of check box in state store, so that trendchart can update itself
    updateChart(checkValue) {
        this.props.dispatch(
            chartActions.changeTrendchart(
                this.props.chartKey,
                checkValue
            )
        );
    }

    render() {
        let ci = this.props.chartConfig;
        let chartLabelStyle = {
            color: ci.stroke
        };
        let chartData = [];
        let chartChecked;
        if (this.props.chartKey == "1") {chartData = this.props.chart.data1; chartChecked= this.props.chart.checked1;}
        if (this.props.chartKey == "2") {chartData = this.props.chart.data2; chartChecked= this.props.chart.checked2;}
        if (this.props.chartKey == "3") {chartData = this.props.chart.data3; chartChecked= this.props.chart.checked3;}
        if (this.props.chartKey == "4") {chartData = this.props.chart.data4; chartChecked= this.props.chart.checked4;}
        return (
            <div className="lv-container row">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 row">
                    <Checkbox className="checkbox" checked={chartChecked} checkedIcon={<Checked />} uncheckedIcon={<UnChecked />} onCheck={this.updateCheck.bind(this)}/>
                </div>
                <div className="name-row col-xs-5 col-sm-5 col-md-5 col-lg-5 row">
                    <label className="chart-name col-xs-12 col-sm-12 col-md-12 col-lg-12" style={chartLabelStyle}> {ci.label}</label>
                    <div className="chart-high col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="chart-header">HIGH</div>
                        <div>{this.MaxValue(ci.dataKey, chartData)}</div>
                    </div>
                    <div className="chart-low col-xs-6 col-sm-6 col-md-6 col-lg-6">                            
                        <div className="chart-header">LOW</div>
                        <div>{this.MinValue(ci.dataKey, chartData)}</div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 row">
                    <div className="chart-current col-xs-9 col-sm-9 col-md-9 col-lg-9">
                        <div className="chart-header">CURRENT</div>
                        <div className="chart-latest">{this.latestValue(ci.dataKey, chartData)}<span className="chart-unit"> {ci.chartUnit} </span></div>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div className={this.state.change}>({this.ChangePercent(ci.dataKey, chartData)})</div>
                    </div>
                    <div className="chart-update">{this.latestValue(ci.timeStamp, chartData)}</div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(LatestMiniView)