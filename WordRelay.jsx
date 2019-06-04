const React = require('react'); // 파일을 분리할 때 module을 가져오고
const { Component } = React;

class WordRelay extends React.Component {
    state = {
        word:'Sophia',
        value:'',
        result:'',
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        if(this.state.word[this.state.word.length-1] === this.state.value[0]) {
            this.setState({
                result:'딩동',
                word:this.state.value,
                value:''
            });
            this.input.focus();
        } else {
            this.setState({
                result:'땡',
                value:''
            });
            this.input.focus();
        }
    };

    onChangeInput = (e) => {
        this.setState({ value:e.target.value });
    };

    input;

    onRefInput = (c) => {
        this.input = c;
    };

    render() {
        return (<>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
                    <button>입력!!</button>
                </form>
                <div>{this.state.result}</div>
            </>
        );
    }
}

module.exports = WordRelay;  // 파일을 밖에서도 쓸수 있음