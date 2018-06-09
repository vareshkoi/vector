export const Index = ({ DOM, onion }) => {
    const $ = onion.state$.debug();
    const start$ = DOM.select('.tester')
        .events('mousedown')
        .map(ev => s => {
            ev.preventDefault()
            console.log(ev);
            const coord = [ev.x, ev.y];
            console.log(coord);
            return {
                ...s,
                start: coord
            };
        });
    return {
        DOM: $.map(s => (
            <div className="page-wrapp">
                <div className="tester" />
            </div>
        )),
        onion: start$
    };
};
