import React from 'react';

import Button from './../ui/button';

export default () => {

    const steps = [
        {
            icon: 'ico1.png',
            title: 'Wybierz rzeczy',
            subtitle: 'ubrania, zabawki, sprzęt i inne'
        }, {
            icon: 'ico2.png',
            title: 'Spakuj je',
            subtitle: 'skorzystaj z worków na śmieci'
        }, {
            icon: 'ico3.png',
            title: 'Zdecyduj komu chcesz pomóc',
            subtitle: 'wybierz zaufane miejsce'
        }, {
            icon: 'ico4.png',
            title: 'Zamów kuriera',
            subtitle: 'kurier przyjedzie w dogodnym terminie'
        }
    ]


    return (
        <div className="container steps">
            <div className="row">
                <h3>Wystarczą 4 proste kroki</h3>
            </div>
            <div className="row grey-bkg">
                {steps.map((el, i) => {

                    return (
                        <div className="col-3" key={i}>
                            <img src={require(`../../images/${el.icon}`)} alt={el.title} />
                            <span>{el.title}</span>
                            <span>{el.subtitle}</span>
                        </div>
                    )
                })}
            </div>
            <div className="row">
                <Button text="ODDAJ RZECZY" target="/login" />
            </div>
        </div>
    )
}