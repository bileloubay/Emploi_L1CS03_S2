const liste = {
    'c': {
        "Alg": { "nom": "Algèbre 2", "prof": "Hejer METOUI", "salle": "A207" },
        "Anal": { "nom": "Analyse 2", "prof": "Lobna DERBAL", "salle": "A209" },
        "Algo": { "nom": "Algorithmique, Structures de Données et Compléxité", "prof": "Amen BEL HADJ ALI", "salle": "A329" },
        "Py": { "nom": "Programmation Python", "prof": "Emna BOUHAJEB", "salle": "B402" },
        "SE": { "nom": "Système d'Exploitation 2", "prof": "Yousra NAJJAR", "salle": "B303" },
        "Res": { "nom": "Fondements des Réseaux", "prof": "Mourad OUERTANI", "salle": "C302" },
        "BD": { "nom": "Fondements des Bases de Données", "prof": "Riadh ZAAFRANI", "salle": "C302" }

    },

    "tp": {
        "AtP": { "nom": "Atelier Programmation 2", "prof": "Kaouther BOURIEL", "salle": "A117" },
        "Py": { "nom": "Programmation Python", "prof": "Thouraiya KHEMIRI", "salle": "A104" },
        "SE": { "nom": "Système d'Exploitation 2", "prof": "Rim BEN ELAKHAL", "salle": "A117" },
        "Res": { "nom": "Fondements des Réseaux", "prof": "Mouadh FERCHICHI", "salle": "A401" },
        "Cult": { "nom": "Culture et Compétences Numériques", "prof": "Nadia BOULIFA", "salle": "A402" }
    },

    "td": {
        "Alg": { "nom": "Algèbre 2", "prof": "Mariem NENNI", "salle": "B103" },
        "Anal": { "nom": "Analyse 2", "prof": "Mariem NENNI", "salle": "A127" },
        "Algo": { "nom": "Algorithmique, Structures de Données et Compléxité", "prof": "Amen BEL HADJ ALI", "salle": "A329" },
        "BD": { "nom": "Fondements des Bases de Données", "prof": "Nadia BRIDAA", "salle": "B103" },
        "Fr": { "nom": "Techniques de Communication 2", "prof": "Samar TLILI", "salle": "A208" },
    },

    "ci": {
        "AtP": { "nom": "Atelier Programmation 2", "prof": "Thouraiya KHEMIRI", "salle": "A209" },
        "Ang": { "nom": "Anglais 2", "prof": "Imene BOUSAOUDIA", "salle": "C202" },
    }
}

const jour = {
    "Lundi": [
        [[1, "c", "Res"], [1]],
        [1, "c", "Res"],
        [[1, "ci", "AtP"], [1]],
        [1, "td", "Fr"],
        [[1], [1, "c", "Py"]],
        [1]
    ],
    "Mardi": [
        [[[0.5, "tp", "AtP"], [0.5, "tp", "Py"]], [[0.5, "tp", "Py"], [0.5, "tp", "AtP"]]],
        [[[0.5, "tp", "AtP"], [0.5, "tp", "Py"]], [[0.5, "tp", "Py"], [0.5, "tp", "AtP"]]],
        [1, "c", "BD"],
        [1, "c", "Anal"],
        [[[0.5, "tp", "Res"], [1]], [[1], [0.5, "tp", "Res"]]],
        [1]
    ],
    "Mercredi": [
        [1, "c", "Alg"],
        [[[0.5, "tp", "AtP"], [1]], [[1], [0.5, "tp", "AtP"]]],
        [1, "td", "BD"],
        [1],
        [1],
        [1]
    ],
    "Jeudi": [
        [1, "td", "Anal"],
        [1, "c", "SE"],
        [1, "td", "Alg"],
        [1, "c", "Algo"],
        [1],
        [1]
    ],
    "Vendredi": [
        [1, "td", "Algo"],
        [1, "ci", "Ang"],
        [[[1, "tp", "Cult"], [1, "tp", "SE"]], [[1, "tp", "SE"], [1, "tp", "Cult"]]],
        [[[1, "tp", "Cult"], [1, "tp", "SE"]], [[1, "tp", "SE"], [1, "tp", "Cult"]]],
        [1],
        [1]
    ]
}

const tempN = ["08:00 - 09:30", "09:40 - 11:10", "11:20 - 12:50", "La pause méridienne (50 minutes)", "13:40 - 15:10", "15:20 - 16:50", "17:00 - 18:30"]
const tempR = ["08:00 - 09:10", "09:15 - 10:25", "10:30 - 11:40", "11:50 - 13:00", "13:05 - 14:15", "14:20 - 15:30"]
var temp = tempR;
var current_table = "jour-aj";

const tablesem = document.querySelector("#tabsem>tbody");
const tablejour = document.querySelector("#tabjour>tbody");
const navsem = document.querySelectorAll("nav ol");
const detail = document.querySelector("h1>#detail");

const to_ramadan = () => {
    const ramlib = document.querySelector("#ramadan>b");
    if (ramlib.textContent == "Normal") {
        ramlib.textContent = "Ramadan"
        temp = tempR;
        switch (current_table) {
            case "jour-aj":
                display_today()
                break;
            case "jour-dem":
                display_tomorrow()
                break;
            case "jour-hier":
                display_yesterday()
                break;
            default:
                // alert(current_table)
                if (current_table.length == 2) {
                    display_sem(current_table)
                    // alert("semaine");
                } else {
                    display_jour(current_table)
                    // alert("jour");
                }
                break;
        }
    } else {
        ramlib.textContent = "Normal"
        temp = tempN;
        switch (current_table) {
            case "jour-aj":
                display_today()
                break;
            case "jour-dem":
                display_tomorrow()
                break;
            case "jour-hier":
                display_yesterday()
                break;
            default:
                // alert(current_table)
                if (current_table.length == 2) {
                    display_sem(current_table)
                    // alert("semaine");
                } else {
                    display_jour(current_table)
                    // alert("jour");
                }
                break;
        }
    }
}

const get_week_detail = () => {
    let spec = "b";
    if (document.querySelector("h1>#detail").textContent.indexOf("A et B") != -1) {
        spec = '2';
    } else if (document.querySelector("h1>#detail").textContent.indexOf('A') != -1) {
        spec = 'a'
    }
    // console.log(document.querySelector("h1>#detail").textContent+ "\t..\t" + spec);
    return spec;
}

const next_week_detail = () => {
    let spec = "2";
    if (document.querySelector("h1>#detail").textContent.indexOf("A et B") != -1) {
        spec = 'a';
    } else if (document.querySelector("h1>#detail").textContent.indexOf('A') != -1) {
        spec = 'b'
    }
    return spec;
}


const detail_swipe = () => {
    spec = next_week_detail()
    // console.log(tablejour.innerHTML);

    if (document.querySelector("h1>#detail").textContent == "(Aujourd'hui)") {
        document.querySelector("h1>#detail").textContent = "(Demain)"
        display_tomorrow()
    } else if (document.querySelector("h1>#detail").textContent == "(Demain)") {
        document.querySelector("h1>#detail").textContent = "(Hier)"
        display_yesterday()
    } else if (document.querySelector("h1>#detail").textContent == "(Hier)") {
        document.querySelector("h1>#detail").textContent = "(Aujourd'hui)"
        display_today()
    } else if (tablejour.innerHTML == "") {
        display_sem(spec + 'w')
    } else {
        let jour = document.querySelector("h1>#detail").textContent.split(' ')[0];
        jour = jour.substring(1, jour.length)
        display_jour(spec + jour)
    }
}

const get_week_ab = (dt) => {
    let dtb_start = new Date("01-12-2026");
    let dtb_end = new Date("01-18-2026");
    // let dtb_start = new Date("01-19-2026");
    let dta_end = new Date("01-25-2026");
    temp_dt = dt;
    // console.log(dta_start);
    // console.log(dtb_end);
    // console.log(temp_dt);
    // console.log((dta_start <= temp_dt && temp_dt <= dtb_end));
    // temp_dt.setDate(temp_dt.getDate() - 7)

    while (!(dtb_start <= temp_dt && temp_dt <= dta_end)) {
        temp_dt.setDate(temp_dt.getDate() - 14)
    }

    if ((dtb_start <= temp_dt && temp_dt <= dtb_end)) {
        return 'b'
    } else {
        return 'a'
    }
    // console.log(temp_dt);

}

const display_today = (dt = "", det = "") => {
    if (dt == "") {
        dt = new Date();
    }
    if (det == "") {
        det = "Aujourd'hui";
    }

    // dt = new Date("01-24-2026");
    // console.log(dt);
    let today = dt.toLocaleDateString("fr-FR", { weekday: "long" });
    today = today[0].toUpperCase() + today.substring(1, today.length)
    if ("SD".indexOf(today[0]) != -1) {
        document.querySelector("#tabjourframe").style.display = 'inherit';
        document.querySelector("#tabsemframe").style.display = 'none';
        tablejour.innerHTML = "";
        tablesem.innerHTML = "";
        setDetail("", "", det);
        tablejour.innerHTML = `<tr><td class='thd' colspan='2'>Pas de cours les ${today.toLowerCase()}s</td></tr>`
    } else {
        let month = dt.toLocaleDateString("fr-FR", { month: "long" });
        w = get_week_ab(dt);
        // console.log(w);
        stdate = `Le ${dt.getDate()} ${month} ${dt.getFullYear()}`
        display_jour(w + today, stdate, det)
    }
    current_table = "jour-aj"
}

const display_tomorrow = () => {
    let dt = new Date();
    dt.setDate(dt.getDate() + 1)
    display_today(dt, "Demain")
    current_table = "jour-dem";
}

const display_yesterday = () => {
    dt = new Date();
    dt.setDate(dt.getDate() - 1)
    display_today(dt, "Hier")
    current_table = "jour-hier";
}

const adjmat = (mat, type, cls, cs) => {
    let lib;
    switch (cls) {
        case "sg1":
            lib = "<i>Gr1</i>";
            break;
            
        case "sg2":
            lib = "<i >Gr2</i>";
            break;
    
        case "sa":
            lib = "<i>sA</i>";
            break;
            
        case "sb":
            lib = "<i>sB</i>";
            break;
    
        default:
            lib = "";
            break;
    }
    
    st += `
    <td colspan="${cs}">
        <div class="lesson">
            <span class="nom">${mat.nom}</span>
            <span class="prof">── ${mat.prof} ──</span>
            <span class="salle">${mat.salle}</span>
            <span class="type ${cls}">${type.toUpperCase()+lib}</span>
        </div>
    </td>`;
}

const adeqless = (lesson, sem) => {
    if (lesson.length == 1) {
        st += `<td colspan="${lesson[0] * 2}" class="vd"></td>`;
    } else if (lesson.length == 2) {
        let cs = 1
        console.log(sem);

        if (lesson[1].length == 2 && "b" == sem) {
            if (lesson[1][0].length == 1) {
                st += `<td colspan="${cs}" class="vd"></td>`;
            } else {
                adjmat(liste[lesson[1][0][1]][lesson[1][0][2]], lesson[1][0][1], "sg1", 1);
            }
            if (lesson[1][1].length == 1) {
                st += `<td colspan="${cs}" class="vd"></td>`;
            } else {
                adjmat(liste[lesson[1][1][1]][lesson[1][1][2]], lesson[1][1][1], "sg2", 1);
            }

        } else if (lesson[0].length == 2 && "a" == sem) {

            if (lesson[0][0].length == 1) {
                st += `<td colspan="${cs}" class="vd"></td>`;
            } else {
                adjmat(liste[lesson[0][0][1]][lesson[0][0][2]], lesson[0][0][1], "sg1", 1);
            }
            if (lesson[0][1].length == 1) {
                st += `<td colspan="${cs}" class="vd"></td>`;
            } else {
                adjmat(liste[lesson[0][1][1]][lesson[0][1][2]], lesson[0][1][1], "sg2", 1);
            }
        } else if (lesson[0].length == 2 && "2" == sem) {
            if (lesson[0][0].length == 1 && lesson[0][1].length != 1) {
                adjmat(liste[lesson[0][1][1]][lesson[0][1][2]], lesson[0][1][1], "s2", 2);
            } else if (lesson[0][0].length != 1 && lesson[0][1].length == 1) {
                adjmat(liste[lesson[0][0][1]][lesson[0][0][2]], lesson[0][0][1], "s2", 2);

            } else {
                if (lesson[0][0].length == 1) {
                    st += `<td colspan="${cs}" class="vd"></td>`;
                } else {
                    adjmat(liste[lesson[0][0][1]][lesson[0][0][2]], lesson[0][0][1], "sg1", 1);
                }
                if (lesson[0][1].length == 1) {
                    st += `<td colspan="${cs}" class="vd"></td>`;
                } else {
                    adjmat(liste[lesson[0][1][1]][lesson[0][1][2]], lesson[0][1][1], "sg2", 1);
                }
            }
        } else {
            let cs = lesson[0] * 2;
            if ("ab".indexOf(sem) != -1) {
                cs = 2;
            } else if (sem == 2) {
                cs = 1;
            }
            if ("a2".indexOf(sem) != -1) {
                if (lesson[0].length == 1) {
                    st += `<td colspan="${cs}" class="vd"></td>`;
                } else {
                    adjmat(liste[lesson[0][1]][lesson[0][2]], lesson[0][1], "sa", cs);
                }
            }

            if ("b2".indexOf(sem) != -1) {
                if (lesson[1].length == 1) {
                    st += `<td colspan="${cs}" class="vd"></td>`;
                } else {
                    adjmat(liste[lesson[1][1]][lesson[1][2]], lesson[1][1], "sb", cs);
                }
            }
        }
    } else {
        adjmat(liste[lesson[1]][lesson[2]], lesson[1], "s2", lesson[0] * 2);
    }
    // console.log(lesson + '  ' + lesson[0] + '  ');
};

const display_headers_row = () => {
    tablesem.innerHTML = "";
    tablejour.innerHTML = "";
    document.querySelector("#tabjourframe").style.display = 'none';
    document.querySelector("#tabsemframe").style.display = 'inherit';
    let st = "<tr><td class='thd-corner'><span id='c1'>Temps</span><span id='c2'>Jour</span></td>";
    temp.forEach(t => {
        if (isNaN(t[0])) {
            st += `<td class="ps" colspan="2" rowspan="6"><div>${t}</div></td>`;
        } else {
            st += `<td class="thd" colspan="2" rowspan="1">${t}</td>`;
        }
    });
    st += "</tr>";
    tablesem.innerHTML += st;
}

const display_headers_col = (jour, stdate = "") => {
    document.querySelector("#tabjourframe").style.display = 'inherit';
    document.querySelector("#tabsemframe").style.display = 'none';
    tablejour.innerHTML = "";
    tablesem.innerHTML = "";
    let st = "<tr><td class='thd-corner'><span id='c1'>Jour</span><span id='c2'>Temps</span></td>";
    st += `<td class="thd cursor-pointer" colspan="2" rowspan="1" onclick="display_sem('${get_week_detail()}w')">${jour + stdate}</td>`;
    st += "</tr>";
    tablejour.innerHTML += st;
}

const display_row = (j, sem) => {
    st = `<tr>`;
    st += `<td class='thd cursor-pointer' onclick="display_jour('${get_week_detail() + j}')">${j}</td>`;
    // console.log(j);

    jour[j].forEach(less => {
        adeqless(less, sem);
    })
    st += `</tr>`;
    // console.log(st);

    tablesem.innerHTML += st;
}

const display_col = (j, sem) => {
    l = 0;
    st = "";
    // console.log(st);

    temp.forEach(t => {
        st += `<tr>`;
        if (isNaN(t[0])) {
            // st += `<td class="ps" colspan="2" rowspan="6"><div>${t}</div></td>`;
            st += `<td class="ps" colspan="3" rowspan="1" style="text-align: center;">${t}</td>`;
        } else {
            st += `<td class="thd" rowspan="1">${t}</td>`;
            adeqless(jour[j][l], sem);
            l++;

        }
        st += `</tr>`;
    });
    tablejour.innerHTML += st;
}

const setDetail = (sem, jour = "", det = "") => {
    if (det != "") {
        document.querySelector("h1>#detail").innerText = `(${det})`;
    } else {
        let s, plr = "", eplr = 'a';
        switch (sem) {
            case 'a':
                s = "A";
                break;

            case 'b':
                s = "B";
                break;

            default:
                s = "A et B";
                plr = 's';
                eplr = 'es';
                break;
        }
        if (jour == "") {
            document.querySelector("h1>#detail").innerText = `(L${eplr} semaine${plr} ${s})`;

        } else {
            document.querySelector("h1>#detail").innerText = `(${jour} de l${eplr} semaine${plr} ${s})`;

        }
    }
}

const display_sem = (spec) => {
    current_table = spec;
    setDetail(spec[0]);
    display_headers_row();
    Object.keys(jour).forEach(j => {
        display_row(j, spec[0])
    });
}

const display_jour = (spec, stdate = "", det = "") => {

    current_table = spec;
    let jour = spec.substring(1, spec.length);
    // console.log(spec + "\t" + jour);
    setDetail(spec[0], jour, det);
    display_headers_col(jour, "<br>" + stdate);
    // console.log(document.querySelector("h1>#detail").textContent);

    display_col(jour, spec[0])
}

semcls = ['a', 'b', '2'];
Object.keys(jour).forEach(j => {
    for (let s = 0; s <= 2; s++) {
        navsem[s].innerHTML += `<li class="s${semcls[s]} cursor-pointer" onclick="display_jour('${semcls[s] + j}')">${j}</li>`;
        // console.log(j+"\t"+semcls[s]+j);

    }
});

// display_jour("2Lundi")
display_sem("2w")
navobj = document.querySelector("nav");
navobj.style.transform = "translateX(-100%)";

const nav_door = () => {
    sign = document.getElementById("nav-open").querySelector('b');
    if (navobj.style.transform == "translateX(-100%)") {
        navobj.style.transform = "translateX(0)";
        sign.style.transform = "rotate(0deg)";
    } else {
        navobj.style.transform = "translateX(-100%)";
        sign.style.transform = "rotate(45deg)";
    }
}

document.getElementById("nav-open").addEventListener("click", () => {
    nav_door();
})

document.getElementById("nav-title").addEventListener("click", () => {
    nav_door();
})

document.querySelector("main").addEventListener("click", () => {
    sign = document.getElementById("nav-open").querySelector('b');
    if (sign.style.transform == "rotate(0deg)") {
        navobj.style.transform = "translateX(-100%)";
        sign.style.transform = "rotate(45deg)";
    }
})

olli_list = document.querySelectorAll("ol>li");
olli_list.forEach(olli => {
    // console.log(olli);

    let bgc = getComputedStyle(olli).backgroundColor;
    let clr = getComputedStyle(olli).color;
    // console.log(olli.textContent + '    ' + bgc + '    ' + clr);

    olli.addEventListener("mouseover", () => {
        olli.style.backgroundColor = clr;
        olli.style.color = bgc;
        olli.style.borderColor = bgc;
    })
    
    olli.addEventListener("mouseout", () => {
        olli.style.backgroundColor = bgc;
        olli.style.color = clr;
        olli.style.borderColor = clr;
    })
});

uldsli_list = document.querySelectorAll("ul>.divsem>li");
ds_list = document.querySelectorAll(".divsem");
let i = 0;
for (let i = 0; i < ds_list.length; i++) {
    ds_list[i].addEventListener("mouseover", () => {
        ds_list[i].style.backgroundColor = "var(--back-fade)";
        // ds_list[i].style.color = "var(--back)";
        // ds_list[i].style.border = "2px solid var(--back)";
        // ds_list[i].style.borderTop = "0px solid var(--back)";
        uldsli_list[i].style.backgroundColor = "var(--back-fade)";
        // uldsli_list[i].style.color = "var(--back)";
    })

    ds_list[i].addEventListener("mouseout", () => {
        ds_list[i].style.backgroundColor = "var(--back)";
        // ds_list[i].style.color = "var(--nav-c)";
        uldsli_list[i].style.backgroundColor = "var(--back)";
        // uldsli_list[i].style.color = "var(--nav-c)";
    })
};


// uldsli_list = document.querySelectorAll("ul>.divsem>li");
// ds_list = document.querySelectorAll(".divsem");
// olli_list.forEach(olli => {
//     // console.log(olli);

//     let bgc = getComputedStyle(olli).backgroundColor;
//     let clr = getComputedStyle(olli).color;
//     // console.log(olli.textContent + '    ' + bgc + '    ' + clr);

//     olli.addEventListener("mouseover", ()=>{
//         olli.style.backgroundColor = clr;
//         olli.style.color = bgc;
//     })

//     olli.addEventListener("mouseout", ()=>{
//         olli.style.backgroundColor = bgc;
//         olli.style.color = clr;
//     })
// });

display_today();