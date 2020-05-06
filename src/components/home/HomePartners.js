import React, { useEffect, useState } from 'react';

import Loader from './../ui/loader'
import Tab from './../ui/tab'

const Items = ({ elements }) => {

    return (
        elements.map((el, i) => {
            return (
                <div className="single-company" key={i}>
                    <div className="top-details">
                        <span className="name">{el.name}</span>
                        <span className="tags">{el.tags}</span>
                    </div>
                    <div>{el.subtitle}</div>
                </div>
            )
        }
        )
    )
}

const Pagination = ({ page, items, changePage }) => {

    const handleClick = (e) => {
        const page = parseInt(e.target.name)
        changePage(page)
    }

    // const activeClass = () => {
    //     return page === name ? 'active pager' : 'pager';
    // }

    const pages = Math.floor((2 + parseInt(items)) / 3);
    const buttons = []

    for (let i = 1; i <= pages; i++) {
        const activeClass = page === i ? 'active pager' : 'pager';
        buttons.push(<button name={i} className={activeClass} onClick={handleClick} key={i}>{i}</button>)
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
    }

    const changePage = (i) => {
        setPage(i);
    }

    return (
        <div id="partners" className="container partners">
            <div className="row">
                <h3>Komu pomagamy?</h3>
                <div className="tabs">
                    <Tab text={'Fundacjom'} name={'fundacje'} active={tab} handleClick={handleClick} />
                    <Tab text={'Organizacjom pozarządowym'} name={'organizacje'} active={tab} handleClick={handleClick} />
                    <Tab text={'Lokalnym zbiórkom'} name={'lokalne'} active={tab} handleClick={handleClick} />
                </div>
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                {elements.length < 1 ? <Loader /> : <Items elements={elements} />}
                <span>
                    {maxItems ? <Pagination page={page} items={maxItems} changePage={changePage} /> : null}
                </span>
            </div>
        </div>

    )
}