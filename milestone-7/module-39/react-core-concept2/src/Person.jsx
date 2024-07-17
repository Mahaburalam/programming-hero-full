const Person = (person) => {
    // console.log(person);
    const { name, phone, username, website, email} = person.person;
    return (
        <div style={{
            border: "3px dotted seagreen",
            borderRadius: "12px",
            padding: "7px",
            margin:'5px'
          }}>
            <p>Name: {name}</p>
            <p>Phone Number: {phone}</p>
            <p>User Name: {username}</p>
            <p>Web Address: {website}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default Person;