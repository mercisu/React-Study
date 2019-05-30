const React = require('react'); // 파일을 분리할 때 module을 가져오고
const { Component } = React;

class WordRelay extends React.Component {
    state = {
        text:'Hello, webpack',
    };

    render() {
        return <h1>{this.state.text}</h1>
    }
}

module.exports = WordRelay;  // 파일을 밖에서도 쓸수 있음