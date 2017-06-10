/**
 * Created by dejan on 10/6/17.
 */

import React from 'react';

import {
    Text,
    ViewPropTypes,
} from 'react-native';

import moment from 'moment';

export default class Stopwatch extends React.Component {
    static propTypes = {
        style: Text.propTypes.style,
    };

    interval;

    constructor(props) {
        super(props);

        this.state = {
            startTime: null,
            elapsed: null,
        };

        this._tick = this._tick.bind(this);
        this.stop = this.stop.bind(this);
    }

    componentDidMount() {
        this.start();
    }

    componentWillUnmount() {
        this.stop();
    }

    _tick() {
        this.setState({
            elapsed: new Date() - this.state.startTime
        });
    }

    getFormattedDate() {
        if( this.state.elapsed ) {
            return moment.utc(this.state.elapsed).format('HH:mm:ss');
        }
    }

    start() {
        this.setState({
            startTime: this.state.elapsed
                ? new Date() - this.state.elapsed
                : new Date()
        });

        this.interval = this.interval ? this.interval : setInterval(this._tick, 100);
    }

    stop() {
        clearInterval(this.interval);
    }

    render() {
        let {style} = this.props;

        return (
            <Text style={style}>{this.getFormattedDate()}</Text>
        );
    }
}
