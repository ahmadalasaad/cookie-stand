// 'use strict';

// let Seattle = {
//     name: 'Seattle',
//     min: 23,
//     max: 65,
//     avg: 6.3,
//     hourCust: [],
//     cus: 0,
//     total: 0,

//     getcus: function () {
//         this.cus = randomCus(this.min, this.max);
//     }

// }

// let Tokyo = {
//     name: 'Tokyo',
//     min: 3,
//     max: 24,
//     avg: 1.2,
//     hourCust: [],
//     cus: 0,
//     total: 0,
//     getcus: function () {
//         this.cus = randomCus(this.min, this.max);
//     }
// }

// let Dubai = {
//     name: 'Dubai',
//     min: 11,
//     max: 38,
//     avg: 3.7,
//     hourCust: [],
//     cus: 0,
//     total: 0,
//     getcus: function () {
//         this.cus = randomCus(this.min, this.max);
//     }
// }

// let Paris = {
//     name: 'Paris',
//     min: 20,
//     max: 38,
//     avg: 2.3,
//     hourCust: [],
//     cus: 0,
//     total: 0,
//     getcus: function () {
//         this.cus = randomCus(this.min, this.max);
//     }
// }

// let Lima = {
//     name: 'Lima',
//     min: 2,
//     max: 16,
//     avg: 4.6,
//     hourCust: [],
//     cus: 0,
//     total: 0,
//     getcus: function () {
//         this.cus = randomCus(this.min, this.max);
//     }

// }

// function randomCus(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let sum = 0;

// let hour = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
// for (let i = 0; i < hour.length; i++) {
//     Seattle.getcus();
//     Seattle.hourCust[i] = Seattle.cus;
//     Tokyo.getcus();
//     Tokyo.hourCust[i] = Tokyo.cus;
//     Dubai.getcus();
//     Dubai.hourCust[i] = Dubai.cus;
//     Paris.getcus();
//     Paris.hourCust[i] = Paris.cus;

//     Lima.getcus();
//     Lima.hourCust[i] = Lima.cus;


// }

// let sea = document.getElementById('Seattle');
// let header2 = document.createElement('h2');
// header2.textContent = Seattle.name;
// sea.appendChild(header2);


// let sea1 = document.getElementById('Tokyo');
// let header3 = document.createElement('h2');
// header3.textContent = Tokyo.name;
// sea1.appendChild(header3);

// let sea2 = document.getElementById('Dubai');
// let header4 = document.createElement('h2');
// header4.textContent = Dubai.name;
// sea2.appendChild(header4);

// let sea3 = document.getElementById('Paris');
// let header5 = document.createElement('h2')
// header5.textContent = Paris.name;
// sea3.appendChild(header5)

// let sea4 = document.getElementById('Lima');
// let header6 = document.createElement('h2');
// header6.textContent = Lima.name;
// sea4.appendChild(header6);


// let unOrderedList = document.createElement('ul');


// sea4.appendChild(unOrderedList);

// for (let i = 0; i < hour.length; i++) {
//     let listItem = document.createElement('li');
//     unOrderedList.appendChild(listItem);
//     listItem.textContent = `${hour[i]} ${Math.floor(Lima.hourCust[i] * Lima.avg)} cookies`;
//     Lima.total = Lima.total + Math.floor(Lima.hourCust[i] * Lima.avg);

// }

// //////////
// let listItem1 = document.createElement('li');
// unOrderedList.appendChild(listItem1);
// listItem1.textContent = `Total: ${Lima.total}`;
// //////////

// let unOrderedList1 = document.createElement('ul');
// sea.appendChild(unOrderedList1);
// for (let i = 0; i < hour.length; i++) {
//     let listItem = document.createElement('li');
//     unOrderedList1.appendChild(listItem);
//     listItem.textContent = `${hour[i]} ${Math.floor(Seattle.hourCust[i] * Seattle.avg)} cookies`;
//     Seattle.total = Seattle.total + Math.floor(Seattle.hourCust[i] * Seattle.avg);

// }
// ///////////
// let listItem = document.createElement('li');
// unOrderedList1.appendChild(listItem);
// listItem.textContent = `Total: ${Seattle.total}`;
// ////////////
// let unOrderedList2 = document.createElement('ul');
// sea1.appendChild(unOrderedList2);

// for (let i = 0; i < hour.length; i++) {
//     let listItem = document.createElement('li');
//     unOrderedList2.appendChild(listItem);
//     listItem.textContent = `${hour[i]} ${Math.floor(Tokyo.hourCust[i] * Tokyo.avg)} cookies`;
//     Tokyo.total = Tokyo.total + Math.floor(Tokyo.hourCust[i] * Tokyo.avg);
// }
// //////////
// let listItem2 = document.createElement('li');
// unOrderedList2.appendChild(listItem2);
// listItem2.textContent = `Total: ${Tokyo.total}`;
// //////////

// let unOrderedList3 = document.createElement('ul');
// sea2.appendChild(unOrderedList3);

// for (let i = 0; i < hour.length; i++) {
//     let listItem = document.createElement('li');
//     unOrderedList3.appendChild(listItem);
//     listItem.textContent = `${hour[i]} ${Math.floor(Dubai.hourCust[i] * Dubai.avg)} cookies`;
//     Dubai.total = Dubai.total + Math.floor(Dubai.hourCust[i] * Dubai.avg);



// }

// //////////
// let listItem3 = document.createElement('li');
// unOrderedList3.appendChild(listItem3);
// listItem3.textContent = `Total: ${Dubai.total}`;
// //////////
// let unOrderedList4 = document.createElement('ul');
// sea3.appendChild(unOrderedList4);

// for (let i = 0; i < hour.length; i++) {
//     let listItem = document.createElement('li');
//     unOrderedList4.appendChild(listItem);
//     listItem.textContent = `${hour[i]} ${Math.floor(Paris.hourCust[i] * Paris.avg)} cookies`;
//     Paris.total = Paris.total + Math.floor(Paris.hourCust[i] * Paris.avg);

// }

// //////////
// let listItem4 = document.createElement('li');
// unOrderedList4.appendChild(listItem4);
// listItem4.textContent = `Total: ${Paris.total}`;
// //////////
// console.log(Lima.total)
// console.log(Seattle.total)
// console.log(Dubai.total)
// console.log(Paris.total)
// console.log(Tokyo.total)
// console.log(Seattle.hourCust);
///////////////CLASS06 done ///////////////////////

/////////////////CLASS-07 START//////////////////

'use strict';

let workingHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let parent = document.getElementById('ctable');
let tableEl = document.createElement('table');
parent.appendChild(tableEl);

let headerthElement = document.createElement('tr');
tableEl.appendChild(headerthElement);
let headertdHourElement = document.createElement('td');
headerthElement.appendChild(headertdHourElement);
headertdHourElement.textContent = '';

let all = [];
function Location(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.cus = [];
    this.cookiesPerHour = [];
    this.total = 0;
    all.push(this);
}

Location.prototype.randomcus = function () {

    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};

//Location.prototype.cookiesHr = function () {
//  return Math.floor(this.avg * this.randomcus());
//}

Location.prototype.render = function () {


    let trElement = document.createElement('tr');
    tableEl.appendChild(trElement);
    let thelement = document.createElement('th');
    thelement.textContent = this.name;
    trElement.appendChild(thelement);

    for (let i = 0; i < workingHour.length; i++) {
        this.cus.push(this.randomcus());
        //this.cookiesHr();
        this.cookiesPerHour.push(Math.floor(this.cus[i] * this.avg));
        let tdElement = document.createElement('td');
        tdElement.textContent = this.cookiesPerHour[i];
        trElement.appendChild(tdElement);



        this.total += this.cookiesPerHour[i];
    }

    let tdElement = document.createElement('td');
    tdElement.textContent = this.total;
    trElement.appendChild(tdElement);
    tableEl.appendChild(trElement);
};


let Seattle = new Location('Seattle', 23, 65, 6.3);
let Tokyo = new Location('Tokyo', 3, 24, 1.2);
let Dubai = new Location('Dubai', 11, 38, 3.7);
let Paris = new Location('Paris', 20, 38, 2.3);
let Lima = new Location('Lima', 2, 16, 4.6);
///////
function worH() {
    for (let i = 0; i < workingHour.length; i++) {

        headertdHourElement = document.createElement('td');
        headerthElement.appendChild(headertdHourElement);
        headertdHourElement.textContent = workingHour[i];
    }
    headertdHourElement = document.createElement('td');
    headerthElement.appendChild(headertdHourElement);
    headertdHourElement.textContent = 'Daily location total';

}
//////
worH();
Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();

function totalOfTotal() {

    let raw = document.createElement('tr');
    tableEl.appendChild(raw);
    let firstTd = document.createElement('td');
    raw.appendChild(firstTd);
    firstTd.textContent = 'Total';
    let tOT = 0;
    for (let i = 0; i < workingHour.length; i++) {

        let total = 0;
        for (let j = 0; j < all.length; j++) {
            let x = all[j].cookiesPerHour[i];
            total += x;

        }
        let Td = document.createElement('td');
        raw.appendChild(Td);
        Td.textContent = total;
        tOT += total;
    }

    let lastTd = document.createElement('td');
    raw.appendChild(lastTd);
    lastTd.textContent = tOT;
}

totalOfTotal();