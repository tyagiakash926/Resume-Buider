export const initialState = {
    auth :{
        isAuth : false,
        user : null,
        message:""
    },
    document : {
        docId : "12345",
        uid : "1" ,
        skinCode : "skin1" ,
    },
    contactDetails : {
        fname:"Sushant",
        lname:"Beriwal",
        summary:"Web Developer Continuous development of new products, and to provide high-quality, reasonably priced merchandise for the goal to make ARICLE become the focus of market attention.",
        emailpd:"abcd@test.com",
        phone:"1234567",
        profession:"Web Developer",
        street:"Central St",
        city:"New Delhi",
        state:"Delhi",
        country:"India",
        pin:"110041"
    },
    educationDetails:{
        collegeName:"IPU",
        degree:"B.Tech in Electronic Communication And Technology",
        cgpa:"10",
        city:"New Delhi",
        state:"Delhi",
        graduationMonth:"August",
        graduationYear:"2020"
    },
    skills: [{ skill: 'Charles' }, { skill: 'David' }],
    projects: [{ projectName: 'Charles' , description : 'hlo there is many ways to do urslf busy!!!' }, { projectName: 'David' , description : 'yes Charles is right' }]
}