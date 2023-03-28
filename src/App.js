import { useRef, useState } from "react";
import styled from "styled-components";

const LI = styled.li`
&.on {
    color: #ddd;
    text-decoration: line-through;
}
`

const App = () => {
    const [list, setList] = useState([]);
    const [itm, setItm] = useState({
        title: ''
    });

    const num = useRef(1);

    const onChange = e => {
        const { value, name } = e.target
        setItm({
            id: num.current,
            [name]: value,
            done: false,
        })
    }

    const onClick = () => {
        if (itm.title.length < 3) {
            alert('more..')
            return
        }

        setList([
            ...list,
            itm
        ]);

        setItm({
            title: '',
        })

        num.current++;
    }

    const onDelete = (id) => {
        alert('삭제하시겠습니까?')
        const r = list.filter(it => it.id !== id);
        setList(r);
    }

    const onModify = (id) => {
        console.log(id);
        const r = list.map(it => it.id === id ? { ...it, done: true } : it);
        setList(r);
    }

    console.log(list)
    return (
        <div>
            <ul>
                {
                    list.map(it => {
                        return (
                            <LI key={it.id} className={it.done ? 'on' : ''}>
                                {it.title}
                                <button onClick={() => onDelete(it.id)}>DELETE</button>
                                <button onClick={() => onModify(it.id)}>DO</button>
                            </LI>)
                    })
                }
            </ul>
            <input type="text" name='title' value={itm.title || ''} onChange={onChange} />
            <button onClick={onClick}>추가</button>
        </div>
    )
}

export default App;

//list.push(4)