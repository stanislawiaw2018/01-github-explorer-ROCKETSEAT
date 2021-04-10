import { useEffect, useState } from 'react';

export function Counter() {

    const [counter, setCounter] = useState(0);
    useEffect(() => {
        verify()
        //    alterTitle()
    }, [counter])
    useEffect(() => {
        document.title = `Github Explorer clique ${counter} vezes`
    })

    // function alterTitle(){
    //     document.title = `Github Explorer clique ${counter} vezes`
    // }

    function verify() {
        const btn = document.getElementById('btn-des')
        if (counter === 0) {

            { console.log(`entrou aqui ${btn.disabled}`) }
            btn.disabled = true;
            { console.log(`alterou propriedade ${btn.disabled}`) }

        } else {
            btn.disabled = false
        }
    }

    function Increment() {
        setCounter(counter + 1);
    }

    function Decrement() {

        { counter > 0 ? setCounter(counter - 1) : setCounter(0) }
    }
    return (
        <li className="counter">
            <h2>{counter}</h2>
            <div>

                <button className="btn-card" id='btn-inc'
                    type='button'
                    onClick={Increment}
                >
                    Increment +1
                </button>
                &nbsp;
                &nbsp;
                <button className="btn-card" id='btn-des'
                    type='button'
                    onClick={Decrement}

                >
                    Decrement -1
                </button>

            </div>

        </li>
    )
}