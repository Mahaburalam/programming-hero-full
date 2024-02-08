import React from 'react';

const PersonalInfo = () => {
    const myInfo = [
        {
          "id": "6592e22460c6174bb0fbc305",
          "isActive": true,
          "balance": "$3,379.25",
          "age": 22,
          "eyeColor": "brown",
          "name": "Williams Benson",
          "gender": "male",
          "company": "CRUSTATIA",
          "email": "williamsbenson@crustatia.com",
          "phone": "+1 (860) 506-3055",
          "address": "392 Verona Place, Motley, Northern Mariana Islands, 643",
          "about": "Reprehenderit eu et elit irure mollit. Fugiat consectetur elit laborum irure ipsum aliqua laboris eiusmod do. Dolor anim deserunt laboris ut adipisicing magna ipsum duis ut ipsum mollit. Nulla cupidatat amet occaecat adipisicing pariatur pariatur culpa exercitation culpa consectetur dolor. Veniam consequat est esse Lorem velit cillum ipsum nulla qui eu occaecat. Est adipisicing labore nisi id anim.\r\n"
        },
        {
          "id": "6592e2243dd81fb883fa5e65",
          "isActive": false,
          "balance": "$3,632.58",
          "age": 35,
          "eyeColor": "blue",
          "name": "Marisa Myers",
          "gender": "female",
          "company": "CEPRENE",
          "email": "marisamyers@ceprene.com",
          "phone": "+1 (834) 563-2165",
          "address": "547 Garland Court, Hachita, Wisconsin, 1004",
          "about": "Do velit ut nostrud dolor ullamco. Esse aliquip eiusmod enim voluptate fugiat. Ipsum anim labore adipisicing Lorem quis esse exercitation occaecat sit ad esse ea ea consectetur.\r\n"
        },
        {
          "id": "6592e22425718f07d7b540ae",
          "isActive": false,
          "balance": "$1,386.00",
          "age": 38,
          "eyeColor": "green",
          "name": "Cooper Knowles",
          "gender": "male",
          "company": "SNACKTION",
          "email": "cooperknowles@snacktion.com",
          "phone": "+1 (877) 557-2028",
          "address": "361 Autumn Avenue, Staples, Ohio, 7805",
          "about": "Anim do aute ea et tempor eiusmod velit aliqua id in proident. Reprehenderit qui ex et officia sit non cupidatat id incididunt excepteur. Enim veniam exercitation officia fugiat est esse incididunt cillum minim amet ut qui fugiat.\r\n"
        },
        {
          "id": "6592e22420c97c7ea18412af",
          "isActive": false,
          "balance": "$3,856.95",
          "age": 38,
          "eyeColor": "blue",
          "name": "Deanne Garner",
          "gender": "female",
          "company": "HANDSHAKE",
          "email": "deannegarner@handshake.com",
          "phone": "+1 (884) 558-2618",
          "address": "828 Tapscott Avenue, Unionville, Louisiana, 7855",
          "about": "Ullamco aute aute qui consectetur irure do nisi voluptate. Commodo esse enim id magna reprehenderit mollit deserunt laboris. Occaecat adipisicing adipisicing ipsum do consequat ea et sunt labore. Occaecat eu aliqua ut veniam incididunt qui do reprehenderit sit cillum in eiusmod. Consequat laborum laboris reprehenderit nostrud amet. Excepteur adipisicing exercitation occaecat minim velit nulla ea labore anim officia.\r\n"
        },
        {
          "id": "6592e224d265a50f26bcec2c",
          "isActive": false,
          "balance": "$3,552.14",
          "age": 36,
          "eyeColor": "brown",
          "name": "Harrison Hancock",
          "gender": "male",
          "company": "QUILM",
          "email": "harrisonhancock@quilm.com",
          "phone": "+1 (871) 565-3460",
          "address": "123 Montieth Street, Churchill, Iowa, 7081",
          "about": "Nisi consequat pariatur ipsum amet elit incididunt proident adipisicing officia non fugiat aliquip ullamco. Est commodo eiusmod eu cillum velit adipisicing ipsum non mollit nisi aute velit. Aliquip tempor duis nulla amet sint. Est amet proident est magna incididunt proident Lorem eiusmod anim in dolore sit reprehenderit ut. Ex proident tempor irure occaecat aliqua.\r\n"
        },
        {
          "id": "6592e224fa0174d176b50592",
          "isActive": false,
          "balance": "$3,322.21",
          "age": 35,
          "eyeColor": "green",
          "name": "Etta Ortega",
          "gender": "female",
          "company": "SEALOUD",
          "email": "ettaortega@sealoud.com",
          "phone": "+1 (934) 507-2272",
          "address": "841 Kent Avenue, Tooleville, Connecticut, 9664",
          "about": "Labore adipisicing et consequat velit. Aute commodo velit pariatur fugiat esse nulla consectetur adipisicing. Qui incididunt sit ut ea est ullamco. Ipsum Lorem enim cillum nostrud.\r\n"
        }
      ]
    return (
        <div>
            {
                myInfo.map(info =><ShowInfo
                key={info.id}
                showinfo={info}
                ></ShowInfo>)
            }
        </div>
    );
};

const ShowInfo = (props) =>{
    // console.log(props);
    const {age, about, address, phone, email, company, gender, name} = props.showinfo;
    return(
        <div className='border rounded-4 bg-info-subtle p-2 m-4'>
            <p>Name:{name}</p>
            <p>Sex:{gender}</p>
            <p>Age:{age}</p>
            <p>Phone:{phone}</p>
            <p>Email:{email}</p>
            <p>Address:{address}</p>
            <p>Company:{company}</p>
            <p>About:{about}</p>
        </div>
    )
}

export default PersonalInfo;