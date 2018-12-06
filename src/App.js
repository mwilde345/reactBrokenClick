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
        // give mouseClick access to this
        this.mouseClick = this.mouseClick.bind(this);
        // feed data to the tree
        this.state = {
            data: require('./sampleData').treeData
        }
    }
    componentDidMount() {
        // this whole method just handles the centering for the graph on the page
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
        // i can see the shiftKey value is set correctly here
        console.log(event);
        // but then this is null
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