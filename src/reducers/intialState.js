export const initialState = {
    auth :{
        isAuth : false,
        user : null,
        message:""
    },
    document : {
        docId : "",
        uid : "" ,
        skinCode : "" ,
    },
    contactDetails : {
        fname:"",
        lname:"",
        summary:"",
        emailpd:"",
        phone:"",
        profession:"",
        street:"",
        city:"",
        state:"",
        country:"",
        pin:""
    },
    educationDetails:{
        collegeName:"",
        degree:"",
        cgpa:"",
        city:"",
        state:"",
        graduationMonth:"",
        graduationYear:""
    },
    skills: [{ skill: '' }, { skill: '' }],
    projects: [{ projectName: '' , description : '' }, { projectName: '' , description : '' }]
}