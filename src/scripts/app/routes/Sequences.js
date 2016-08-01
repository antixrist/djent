import React, { Component } from 'react';

import Panel from '../components/Panel';
import SequencePanel from '../containers/SequencePanel';

export default class Sequences extends Component {
    sequences = [];

    componentWillMount = () => {
        this.assignSequences(this.props.sequences);
    }

    componentWillUpdate = (nextProps) => {
        this.assignSequences(nextProps.sequences);
    }

    assignSequences = (sequences) => {
        this.sequences = sequences
            .filter(sequence => sequence.id !== 'total');
    }

    addNewSequence = () => {
        this.props.actions.addSequence();
    }

    render = () => {
        const sequences = this.sequences
            .map((sequence, i) => (
                <div key={i} className={`group-padding-y ${i === 0 ? 'u-pt0' : ''}`}>
                    <SequencePanel sequence={ sequence } isDeletable={i !== 0}/>
                </div>
            ));
        const addSequenceButton = this.sequences.length < 6
            ? <button className="button-primary button-primary--full button-primary--gamma" onClick={this.addNewSequence}>Add New Sequence</button>
            : null;

        return (
            <Panel>
                <h2 className="title-primary">
                    Sequences
                </h2>

                { sequences }

                { addSequenceButton }
            </Panel>
        );
    }
}
