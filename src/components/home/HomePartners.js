import React, { useEffect, useState } from 'react';

const Loading = () => {
    return (
        <h1>Loading ... </h1>
    )
}

const Items = ({ elements }) => {

    return (
        elements.map((el, i) => {
            return (
                <div key={i}>
                    <h4>{el.name}</h4>
                    <h4>{el.subtitle}</h4>
                    <h4>{el.tags}</h4>
                    <hr />
                </div>
            )
        }
        )
    )
}

const Pagination = ({ items, changePage }) => {

    const handleClick = (e) => {
        const page = parseInt(e.target.name)
        changePage(page)
    }

    const pages = Math.floor((2 + parseInt(items)) / 3);
    const buttons = []

    for (let i = 1; i <= pages; i++) {
        buttons.push(<button name={i} onClick={handleClick} key={i}>{i}</button>)
    }

    return (
        <div>
            {buttons}
        </div>
    )

}

export default () => {

    const [tab, setTab] = useState('fundacje');
    const [page, setPage] = useState(1);
    const [elements, setElements] = useState([]);
    const [maxItems, setMaxItems] = useState(0);


    useEffect(() => {
        getItems(tab, page)
    }, [tab, page])

    const getItems = (item, page) => {
        const url = `http://localhost:3000/${item}?_page=${page}&_limit=3`;
        fetch(url)
            .then(res => {
                setMaxItems(res.headers.get('X-Total-Count'));
                return res.json();
            })
            .then(data => {
                setElements([...data])
            })
    }

    const handleClick = (e) => {
        setElements([]);
        setPage(1)
        setTab(e.target.name);
        // getItems(tab, page);
    }

    const changePage = (i) => {
        setPage(i);
        // getItems(tab, page);
    }

    return (
        <div id="partners" className="container partners">
            <div className="row">
                <h3>Komu pomagamy?</h3>
                <img src="./../../images/Decoration.svg" alt='' />
                <button name="fundacje" onClick={handleClick}>Fundacjom</button>
                <button name="organizacje" onClick={handleClick}>Organizacjom pozarządowym</button>
                <button name="lokalne" onClick={handleClick}>Lokalnym zbiórkom</button>
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                {elements.length < 1 ? <Loading /> : <Items elements={elements} />}
                <span>
                    {maxItems ? <Pagination items={maxItems} changePage={changePage} /> : null}
                </span>
            </div>
        </div>

    )
}