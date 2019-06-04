const React = require('react'); // 파일을 분리할 때 module을 가져오고
const { useState, useRef } = React;

const WordRelay = () => {
    const [word, setWord] = useState('sophia');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(word[word.length-1] === value[0]) {
            setResult('딩동댕');
            setWord(value);
            setValue('');
            inputRef.current.focus();
        } else {
            setResult('땡');
            setValue('');
            inputRef.current.focus();
        }
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    return (<>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <label htmlFor="wordInput">글자를 입력하세요</label>
                <input ref={inputRef} value={value} id="wordInput" className="wordInput" onChange={onChangeInput} />
                <button>입력!!</button>
            </form>
            <div>{result}</div>
        </>
    );

}

module.exports = WordRelay;  // 파일을 밖에서도 쓸수 있음