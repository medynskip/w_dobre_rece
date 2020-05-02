import React from 'react';

export default () => {

    const orgs = [
        {
            title: 'Lorem Ipsum 1',
            subtitle: 'Lorem ipsum',
            tags: 'Egestas, sed, tempus'
        }, {
            title: 'Lorem Ipsum 1',
            subtitle: 'Lorem ipsum',
            tags: 'Egestas, sed, tempus'
        }, {
            title: 'Lorem Ipsum 1',
            subtitle: 'Lorem ipsum',
            tags: 'Egestas, sed, tempus'
        }
    ]

    return (

        <div id="partners">
            <h3>Komu pomagamy?</h3>
            <img src="./../../images/Decoration.svg" alt='' />
            <button>Fundacjom</button>
            <button>Organizacjom pozarządowym</button>
            <button>Lokalnym zbiórkom</button>
            <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            {orgs.map((el, i) => {
                return (<div key={i}>
                    <span>Organizacja {el.title}</span>
                    <span>{el.subtitle}</span>
                    <span>{el.tags}</span>
                </div>
                )
            })}
            <span>pagination</span>
        </div>



    )
}