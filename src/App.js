import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tree from 'react-d3-tree';

const CONTAINER_STYLE = {
    width: '100%',
    height: '100vh',
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.mouseClick = this.mouseClick.bind(this);
        this.state = {
            data: require('./sampleData').treeData
        }
    }
    componentDidMount() {
        const dimensions = this.treeContainer.getBoundingClientRect();
        this.setState({
            translate: {
                x: dimensions.width / 2,
                y: dimensions.height / 2,
            }
        });
    }
    mouseClick(nodeData, event) {
        console.log(nodeData);
        event.persist();
        console.log(event);
        console.log(event.shiftKey);
    }

    render() {
        return (
            <div id="treeWrapper" style={CONTAINER_STYLE} ref={tc => (this.treeContainer = tc)}>
                <Tree
                    data={this.state.data}
                    onClick={this.mouseClick}
                    translate={this.state.translate}
                />
            </div>
        )
    }
}