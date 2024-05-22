import Item from './Item';

function List () {
    return (
        <>
            <h1>My List</h1>
            <ul>
                <Item marca="Apple" ano_lancamento={1985}/>
                <Item marca="Samsung" ano_lancamento={1964}/>
                <Item marca="Huawei" />
                <Item marca="Teste" ano_lancamento={1999} />
                <Item />
            </ul>
        </>
    )
}

export default List;