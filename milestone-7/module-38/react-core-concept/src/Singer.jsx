const Singer = ({singer}) => {
    console.log(singer);
    const {name, age} = singer;
    return (
        <div>
            <p>Singer Name : {name}</p>
            <p>Singer Age : {age}</p>
        </div>
    );
};

export default Singer;