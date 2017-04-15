var grimoire = {

AGT:{
    name: "Agatha"
    ,fullname: "Agatha Lietva"
    ,file: "AGT"
    ,age:"34"
    ,gender:"Female"
    ,race:"Human (Hansha)"
    ,location:"Harpshire City"
    ,description:"Lorem Ipsum Dolor Sit Amet Consectetur"
    ,link:""

},
LTH:{
    name: "Lithium"
    ,fullname: "a"
    ,file: "LTH"
    ,age:""
    ,gender:""
    ,race:""
    ,location:""
    ,description:""
    ,link:""

},
SCR:{
    name: "Scarner"
    ,fullname: "a"
    ,file: "SCR"
    ,age:""
    ,gender:""
    ,race:""
    ,location:""
    ,description:""
    ,link:""

},
    DRM:{
    name: "Dramelia"
    ,fullname: "a"
    ,file: "DRM"
    ,age:""
    ,gender:""
    ,race:""
    ,location:""
    ,description:""
    ,link:""

},
   DNV: {
    name: "Donovan"
    ,fullname: "a"
    ,file: "DNV"
    ,age:""
    ,gender:""
    ,race:""
    ,location:""
    ,description:""
    ,link:""

},
   LJN: {
    name: "Leejarna"
    ,fullname: "a"
    ,file: "LJN"
    ,age:""
    ,gender:""
    ,race:""
    ,location:""
    ,description:""
    ,link:""

},
    NTS:{
    name: "Natannise"
    ,fullname: "a"
    ,file: "NTS"
    ,age:""
    ,gender:""
    ,race:""
    ,location:""
    ,description:""
    ,link:""

},
    RDK:{
    name: "Rodeak"
    ,fullname: "a"
    ,file: "RDK"
    ,age:""
    ,gender:""
    ,race:""
    ,location:""
    ,description:""
    ,link:""

},
    ANS:{
    name: "Annise"
    ,fullname: "a"
    ,file: "ANS"
    ,age:""
    ,gender:""
    ,race:""
    ,location:""
    ,description:""
    ,link:""

},
    SKS:{
    name: "Sykes"
    ,fullname: "a"
    ,file: "SKS"
    ,age:""
    ,gender:""
    ,race:""
    ,location:""
    ,description:""
    ,link:""

},
    MSY:{
    name: "Missy"
    ,fullname: "a"
    ,file: "MSY"
    ,age:""
    ,gender:""
    ,race:""
    ,location:""
    ,description:""
    ,link:""

},
    PPS:{
    name: "Pipes"
    ,fullname: "a"
    ,file: "PPS"
    ,age:""
    ,gender:""
    ,race:""
    ,location:""
    ,description:""
    ,link:""

},
    NTN:{
    name: "Nathan"
    ,fullname: "NTN"
    ,file: "NTN"
    ,age:""
    ,gender:""
    ,race:""
    ,location:""
    ,description:""
    ,link:""

},
    PHS:{
    name: "Phuse"
    ,fullname: "PHS"
    ,file: "PHS"
    ,age:""
    ,gender:""
    ,race:""
    ,location:""
    ,description:""
    ,link:""

},
    RKN:{
    name: "Reckna"
    ,fullname: "a"
    ,file: "RKN"
    ,age:""
    ,gender:""
    ,race:""
    ,location:""
    ,description:""
    ,link:""

},
    AFK:{
    name: "Afflock"
    ,fullname: "a"
    ,file: "AFK"
    ,age:""
    ,gender:""
    ,race:""
    ,location:""
    ,description:""
    ,link:""

},
    THM:{
    name: "Tharma"
    ,fullname: "a"
    ,file: "THM"
    ,age:""
    ,gender:""
    ,race:""
    ,location:""
    ,description:""
    ,link:""

},
    ARB:{
    name: "Arbalesh"
    ,fullname: "a"
    ,file: "ARB"
    ,age:""
    ,gender:""
    ,race:""
    ,location:""
    ,description:""
    ,link:""

},
    AGN:{
    name: "Agnelle"
    ,fullname: "a"
    ,file: "AGN"
    ,age:""
    ,gender:""
    ,race:""
    ,location:""
    ,description:""
    ,link:""

},
    KLS:{
    name: "Klaus"
    ,fullname: "a"
    ,file: "KLS"
    ,age:""
    ,gender:""
    ,race:""
    ,location:""
    ,description:""
    ,link:""

},
    ATM:{
    name: "Artemisya"
    ,fullname: "a"
    ,file: "ATM"
    ,age:""
    ,gender:""
    ,race:""
    ,location:""
    ,description:""
    ,link:""

},
   CRB:{
    name: "Carbon"
    ,fullname: "a"
    ,file: "CRB"
    ,age:""
    ,gender:""
    ,race:""
    ,location:""
    ,description:""
    ,link:""

},
    BLK:{
    name: "Belka"
    ,fullname: "a"
    ,file: "BLK"
    ,age:""
    ,gender:""
    ,race:""
    ,location:""
    ,description:""
    ,link:""

}

    }


function listRoster(input){
    return `
            <DIV>
                ${input.name}
            </DIV>
`
}

function slideRoster(input){




return `
            <DIV class="imgcon">
            <img src="mugs/${input.file}.png">
            </DIV>
`


}

function picRoster(input){



return `
      <DIV class="rostim">
            <img src="mugs/${input.file}.png">
    <div>${input.fullname}</div>
           </DIV>
`
}



function cardRoster(input){



return `
      <DIV class="carder">
    <div class="name"><span> </span> ${input.fullname}</div>

    <div class="g"><span>Age</span> ${input.age}</div>
    <div class="g"><span>Gender</span> ${input.gender}</div>
    <div class="g"><span>Race</span> ${input.race}</div>
    <div class="g"><span>Location</span> ${input.location}</div>
    <div class="des"><span> </span> ${input.description}</div>
           <div class="img"> <img src="mugs/${input.file}.png"></div>
           </DIV>
`
}


