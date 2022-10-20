// Data
const row = document.querySelector(".row")
console.log(row)

const teamMember = [
    {name:"Wayne Barnett",
    job:"Founder & CEO",
    photo:"wayne-barnett-founder-ceo.jpg"
    },
    {name:"Angela Caroll",
    job:"Chief Editor",
    photo:"angela-caroll-chief-editor.jpg"
    },
    {name:"Walter Gordon",
    job:"Office Manager",
    photo:"walter-gordon-office-manager.jpg"
    },
    {name:"Angela Lopez",
    job:"Social Media Manager",
    photo:"angela-lopez-social-media-manager.jpg"
    },
    {name:"Scott Estrada",
    job:"Developer",
    photo:"scott-estrada-developer.jpg"
    },
    {name:"Barbara Ramos",
    job:"Graphic Designer",
    photo:"barbara-ramos-graphic-designer.jpg"
    }
]
// estrapolo dall array con ciclo for i singoli oggetti
let thisObject;
for(let memberIndex = 0; memberIndex < teamMember.length; memberIndex++){
    thisObject = teamMember[memberIndex]
    const cardName = `<div class="names">${thisObject.name}</div>`;
    const cardJob = `<div>${thisObject.job}</div>`;
    const cardPhoto = `<div class="photo"><img src="img/${thisObject.photo}"></div>`;
    const card = `<div class="card">${cardPhoto}${cardName}${cardJob}</div>`;
    row.innerHTML += card
    for(let key in thisObject){
       let thisObjectElement = thisObject[key]
    }
}
