import React from 'react';

export default () => {

    const steps = [
        {
            icon: 'Icon-1.png',
            title: 'Wybierz rzeczy',
            subtitle: 'ubrania, zabawki, sprzęt i inne'
        }, {
            icon: 'Icon-2.png',
            title: 'Spakuj je',
            subtitle: 'skorzystaj z worków na śmieci'
        }, {
            icon: 'Icon-3.png',
            title: 'Zdecyduj komu chcesz pomóc',
            subtitle: 'wybierz zaufane miejsce'
        }, {
            icon: 'Icon-4.png',
            title: 'Zamów kuriera',
            subtitle: 'kurier przyjedzie w dogodnym terminie'
        }
    ]


    return (
        <div>
            <div>
                <h3>Wystarczą 4 proste kroki</h3>
                <img src="./../../images/Decoration.svg" />
            </div>
            <div>
                {steps.map((el, i) => {
                    return (
                        <div key={i}>
                            <img src={"./../images/" + el.icon} />
                            <span>{el.title}</span>
                            <span>{el.subtitle}</span>
                        </div>
                    )
                })}
            </div>
            <div>
                <button>ODDAJ RZECZY</button>
            </div>
        </div>
    )
}