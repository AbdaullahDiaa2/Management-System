let title = document.getElementById("tl");
let num = document.getElementById("num");
let it2 = document.querySelector(".it2");
let time = document.querySelector(".time");
let delbtn = document.getElementById("delbtn");
let totlnumber = document.querySelector(".totlnumber");
let header = document.querySelector(".nav");
let totlnum2 = document.querySelector(".to2");
let ds3 = document.querySelector(".ds3");
let card = document.querySelector(".card");
let contn = document.querySelector(".contn");
let kid = document.getElementById("kid");
let dd = document.getElementById("dd");
let test = document.querySelector("test");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discont = document.getElementById("discont");
let count = document.getElementById("count");
let cateog = document.getElementById("cateog");
let totl = document.getElementById("totl");

let mood = "create";
let teb;
// console.log(tl,price,taxes,ads,totl);
function getnumber() {
    if (price.value != "") {
        console.log(price)
        let add = +price.value * +count.value;
        totl.innerHTML = add;
        totl.style.backgroundColor = "green"
    } else {
        totl.style.backgroundColor = "brown"
    }
}
// -----------------------
let porr;
if (localStorage.AA != null) {
    porr = JSON.parse(localStorage.AA);
} else {
    porr = [];
}
let create = document.getElementById("create");
create.onclick = function() {
        let newpor = {
            title: title.value,
            kid: kid.value,
            price: price.value,
            taxes: taxes.value,
            count: count.value,
            totl: totl.innerHTML,
        }
        if (mood === "create") {
            if (newpor.count > 1) {
                porr.push(newpor);
            } else {
                porr.push(newpor);
            }

        } else {
            porr[teb] = newpor;
            create.innerHTML = `create`;
            count.style.display = "block";

        }
        console.log(mood)

        localStorage.setItem('AA', JSON.stringify(porr))
        claerData()
        showData()
    }
    // ------------------

function claerData() {
    title.value = "";
    kid.value = "";
    price.value = "";
    taxes.value = "";
    count.value = "";
    totl.innerHTML = "";
}
// ----------------
function showData() {
    getnumber()
    let tble = "";
    for (let i = 0; i < porr.length; i++) {
        tble += ` <tr>
            <td>${i + 1}</td>
            <td> ${porr[i].title}</td>
            <td> ${porr[i].kid}</td>
            <td>${porr[i].price}</td>
            <td>${porr[i].taxes}</td>
            <td>${porr[i].count}</td>
            <td>${porr[i].totl}</td>
            <td>
                <button onclick=" updat(${i})">update</button>
            </td>
            <td><button onclick="deleteData(${i})" >delete</button>
            </td>
             </tr> `
        let bnt = document.querySelector("#claer");
        teb = i;
        if (porr.length > 0) {
            bnt.innerHTML = `<button onclick="Dataall()" id="btndl"> delete all(${porr.length})</button>`
        }
    }
    document.getElementById('tbody').innerHTML = tble;
}
// showData()
// ----------------
function deleteData(i) {
    porr.splice(i, 1);
    localStorage.AA = JSON.stringify(porr);
    showData()
}
// -------------
function Dataall() {
    porr.splice(0);
    localStorage.clear();
    console.log(porr);
    showData()
}
// ---------

function updat(i) {
    title.value = porr[i].title;
    price.value = porr[i].price;
    taxes.value = porr[i].taxes;
    count.value = porr[i].count;
    totl.innerHTML = porr[i].totl;
    create.innerHTML = `Up Data`;
    count.style.display = "none";
    getnumber()
    mood = "UpData";
    console.log(mood)
    scroll({
        top: 0,
        behavior: "smooth",

    })
}


// ----------------------
let x = 0;

let moodSeerch = "SearchTlitl";

function moode(id) {
    if (id === "SearchTlitl") {
        moodSeerch = "SearchTlitl";
    } else {
        moodSeerch = "SearchCategory";
    }
    console.log(moodSeerch)

}

function seerch(value) {
    let tble = "";
    if (moodSeerch === "SearchTlitl") {
        console.log(1)

        for (let i = 0; i < porr.length; i++) {
            if (porr[i].title.includes(value)) {
                console.log(porr[i].kid)
                tble += ` <tr>
                                <td>${i + 1}</td>
                                <td>${porr[i].title}</td>
                                <td>${porr[i].kid}</td>
                                <td>${porr[i].price}</td>
                                <td>${porr[i].taxes}</td>
                                <td>${porr[i].count}</td>
                                <td>${porr[i].totl}</td>
                                <td>
                                    <button onclick=" updat(${i})">update</button>
                                </td>
                                <td><button onclick="deleteData(${i})" >delete</button>
                                </td>
                            </tr> `
            }


        }
    } else {
        console.log(2)

        for (let i = 0; i < porr.length; i++) {
            if (porr[i].kid.includes(value)) {
                // console.log(porr[i].kid)
                tble += ` <tr>
                                <td>${i + 1}</td>
                                <td>${porr[i].title}</td>
                                <td>${porr[i].kid}</td>
                                <td>${porr[i].price}</td>
                                <td>${porr[i].taxes}</td>
                                <td>${porr[i].count}</td>
                                <td>${porr[i].totl}</td>
                                <td>
                                    <button onclick=" updat(${i})">update</button>
                                </td>
                                <td><button onclick="deleteData(${i})" >delete</button>
                                </td>
                            </tr> `
            }
        }
    }
    document.getElementById('tbody').innerHTML = tble;



}

// new pa
function showData_2() {
    let tble2 = "";
    for (let i = 0; i < porr.length; i++) {
        tble2 += ` <tr>
            <td>${i + 1}</td>
            <td> ${porr[i].title}</td>
            <td> ${porr[i].kid}</td>
            <td>${porr[i].taxes}</td>
            <td>${porr[i].count}</td>
            <td>${porr[i].count}</td>
               <td>
                 <button onclick=" add(${i})">+</button>
              </td>
               <td>
                 <button onclick="del3(${i})" id="mk">-</button>
              </td>

             </tr> `
    }
    document.getElementById('tbody2').innerHTML = tble2;
}
// showData_2()
let ff = "";
let totlnum = 0;
let g = 0;
let nm = 1;
let cont = 0;
let array2 = [];
let mmm = 0;
let h;
let k;



function add(i) {
    console.log(i)

    let lebt = "";
    document.querySelectorAll(".k2").forEach((element, index) => {

        element.innerHTML = index + 1;
    })

    h = array2.some(e => {
        return i == e;
    })



    if (h === false) {
        ++g
        cont = 1;
        array2.push(i);
        lebt = `
                <tr>
                <td>${porr[i].taxes}</td>
                <td id="con${i}" class="ks">1</td>
                <td>${porr[i].kid}</td>
                <td>${porr[i].title}</td>
                <td class="it${i} k2 ">1</td>
                <td  onclick="del(${i})" id="btndel${i}" class="btnde">
                        *
                    </td>
                </tr> 
                `

    } else {

        let km = document.querySelector(`#con${i}`);
        km.innerHTML = +km.innerHTML + 1;
        // jk.innerHTML = 0;
        document.getElementById(`mk${i}`).style.display = "block ";
        km.style.background = "#a152f5";


        console.log(i)

    }



    totlnum += +porr[i].taxes;
    totlnumber.innerHTML = ` المجموع : ${totlnum} دينار`;
    dd.innerHTML += lebt;


}
let ms = 0;


const del3 = (i) => {

    k = document.querySelector(`.it${i}`).innerHTML;
    k = +k - 1;
    let km = document.querySelector(`#con${i}`);
    km.innerHTML = +km.innerHTML - 1;
    km.style.background = "#a152f5";
    if (km.innerHTML == 0) {
        array2.splice(k, 1);
        document.getElementById(`btndel${i}`).parentElement.remove();
        document.getElementById(`mk${i}`).style.display = "none ";
        document.querySelectorAll(".k2").forEach((element, index) => {

            element.innerHTML = index + 1;
        })
    }
    ms = porr[i].taxes;
    totlnum -= ms;
    totlnumber.innerHTML = ` المجموع :${totlnum} دينار`;
}

function removall() {
    dd.innerHTML = "";
    totlnumber.innerHTML = 0;
    array2 = [];
    location.reload()
}

function trns() {
    console.log('object :>> ');
    contn.classList.toggle("ds3")
    header.classList.toggle("ds3")
    card.classList.toggle("w500")
    num.classList.toggle("ds3")
    document.querySelectorAll(".btnde").forEach(e => {
        e.classList.toggle("ds3")

    })
    console.log(document.querySelectorAll(".btnde"))

}

let time_t = new Date();
time.innerHTML = time_t;
console.log(time)



function seerch2(value) {
    let tble2 = "";
    if (moodSeerch === "SearchTlitl") {
        for (let i = 0; i < porr.length; i++) {
            if (porr[i].title.includes(value)) {
                // console.log(porr[i].kid)
                tble2 += ` <tr>
                    <td>${i + 1}</td>
                    <td>${porr[i].title}</td>
                    <td>${porr[i].kid}</td>
                   <td>${porr[i].taxes}</td>
                    <td>${porr[i].count}</td>
                    <td>
                 <button onclick="add(${i})">+</button>
                    </td>
                    <td>
                 <button onclick="del3(${i})" id="mk${i}">-</button>
                    </td>
                    </tr> `
            }
        }
    } else {
        console.log(2)

        for (let i = 0; i < porr.length; i++) {
            if (porr[i].kid.includes(value)) {
                tble2 += ` <tr>
                    <td>${i + 1}</td>
                    <td>${porr[i].title}</td>
                    <td>${porr[i].kid}</td>
                     <td>${porr[i].taxes}</td>
                    <td>${porr[i].count}</td>
                    <td>
                 <button onclick="add(${i})" >+</button>
                    </td>
                   <td>
                 <button onclick="del3(${i})" id="mk${i}">-</button>
                    </td>
                    </tr> `
            }
        }
    }
    document.getElementById('tbody2').innerHTML = tble2;

}



// -----
let trn = document.querySelectorAll(".nav li");
let lyer = document.querySelector(".lyer");

function slect() {

    trn.forEach(e => {
        e.addEventListener("click", m => {
            x = e.getAttribute("id");


            if (x === "texttrn") {
                lyer.style.transform = "translateX(0px)";

            } else if (x === "gooles") {
                lyer.style.transform = "translateX(-100px)";



            } else {
                lyer.style.transform = "translateX(-190px)";

            }

        })
    })

}

slect()

// ---
let redombg = document.querySelector(".part1");

let imgNumber = 3;
imgNumber++;
let arrbg = [];
for (let i = 1; i < imgNumber; i++) {
    arrbg.push(i + ".jpg")
}

function op() {
    bgsetInterval = setInterval(e => {
        let randomNumber = Math.floor(Math.random() * arrbg.length);
        redombg.style.backgroundImage = 'url("imges/' + arrbg[randomNumber] + ' ")';

    }, 5000);
}
op();














// function seerch(value) {
//     let tble = "";
//     // if (value === "") {

//     for (let i = 0; i < porr.length; i++) {
//         if (porr[i].title.includes(value)) {
//             console.log(porr[i].title)
//             tble += ` <tr>
//                             <td>${i + 1}</td>
//                             <td>${porr[i].title}</td>
//                             <td>${porr[i].kid}</td>
//                             <td>${porr[i].price}</td>
//                             <td>${porr[i].taxes}</td>
//                             <td>${porr[i].count}</td>
//                             <td>${porr[i].totl}</td>
//                              <td>
//                                 <button onclick=" updat(${i})">update</button>
//                             </td>
//                             <td><button onclick="deleteData(${i})" >delete</button>
//                             </td>
//                           </tr> `
//             document.getElementById('tbody').innerHTML = tble;
//         }


//     }
//     // }


// }




// function seerch(value) {
//     // console.log("t")
//     for (let i = 0; i < porr.length; i++) {
//         if (porr[i].title.includes(value)) {
//             // console.log(i)
//             // let tble = "";
//             for (let i = 0; i < porr.length; i++) {
//                 console.log(i)


//             }


//             // document.getElementById('tbody').innerHTML = tble;
//         }

//     }
// }