import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

export default class Freeze extends Component {
    render() {
        const confirmation = this.props.confirmation;

        return (
            <div className="confirmSend">
                { this.props.queueLength }

                <div className="confirmSmartContract bold">
                    <FormattedMessage id='queue.freeze.title' />
                </div>

                <div className="confirmGroup">

                </div>

                { this.props.buttons }
            </div>
        );
    }
}