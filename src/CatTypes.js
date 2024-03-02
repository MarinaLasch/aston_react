const CatTypes= () => {
    const cats =  [
    { id: 1, name: 'Сиамская' },
    { id: 2, name: 'Cибирская' },
    { id: 3, name: 'Британская' },
    { id: 4, name: 'Абиссинская' },
    { id: 5, name: 'Невская маскарадная' },
    { id: 6, name: 'Египетская Мау' },
    { id: 7, name: 'Персидская' },
    { id: 8, name: 'Саванна' },
    { id: 9, name: 'Украинский левкой' },
    { id: 10, name: 'Пуделькэт' }
];
    return (
        <>
            <h2> Породы кошек</h2>
            <ul>
                {cats.map(cat => (
                    <li key={cat.id}>{cat.name}</li>
                ))}
            </ul>
        </>

    );
};

export default CatTypes;