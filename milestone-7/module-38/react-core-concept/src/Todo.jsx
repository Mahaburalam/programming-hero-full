const Todo = (props) => {
    console.log(props);
    let {isShopping, items} = props;
    items = "Apple"
    return (
        <div>
            <p>Shopping: {isShopping}</p>
            <p>Shopping Item : {items}</p>
        </div>
    );
};

export default Todo;