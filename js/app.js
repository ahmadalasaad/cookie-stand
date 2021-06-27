'use strict';

let Seattle = {
    name: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    hourCust: [],
    cus: 0,
    total: 0,

    getcus: function () {
        this.cus = randomCus(this.min, this.max);
    }

}

let Tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    hourCust: [],
    cus: 0,
    total: 0,
    getcus: function () {
        this.cus = randomCus(this.min, this.max);
    }
}

let Dubai = {
    name: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    hourCust: [],
    cus: 0,
    total: 0,
    getcus: function () {
        this.cus = randomCus(this.min, this.max);
    }
}

let Paris = {
    name: 'Paris',
    min: 20,
    max: 38,
    avg: 2.3,
    hourCust: [],
    cus: 0,
    total: 0,
    getcus: function () {
        this.cus = randomCus(this.min, this.max);
    }
}

let Lima = {
    name: 'Lima',
    min: 2,
    max: 16,
    avg: 4.6,
    hourCust: [],
    cus: 0,
    total: 0,
    getcus: function () {
        this.cus = randomCus(this.min, this.max);
    }

}

function randomCus(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let sum = 0;

let hour = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
for (let i = 0; i < hour.length; i++) {
    Seattle.getcus();
    Seattle.hourCust[i] = Seattle.cus;
    Tokyo.getcus();
    Tokyo.hourCust[i] = Tokyo.cus;
    Dubai.getcus();
    Dubai.hourCust[i] = Dubai.cus;
    Paris.getcus();
    Paris.hourCust[i] = Paris.cus;

    Lima.getcus();
    Lima.hourCust[i] = Lima.cus;


}

let sea = document.getElementById('Seattle');
let header2 = document.createElement('h2');
header2.textContent = Seattle.name;
sea.appendChild(header2);


let sea1 = document.getElementById('Tokyo');
let header3 = document.createElement('h2');
header3.textContent = Tokyo.name;
sea1.appendChild(header3);

let sea2 = document.getElementById('Dubai');
let header4 = document.createElement('h2');
header4.textContent = Dubai.name;
sea2.appendChild(header4);

let sea3 = document.getElementById('Paris');
let header5 = document.createElement('h2')
header5.textContent = Paris.name;
sea3.appendChild(header5)

let sea4 = document.getElementById('Lima');
let header6 = document.createElement('h2');
header6.textContent = Lima.name;
sea4.appendChild(header6);


let unOrderedList = document.createElement('ul');


sea4.appendChild(unOrderedList);

for (let i = 0; i < hour.length; i++) {
    let listItem = document.createElement('li');
    unOrderedList.appendChild(listItem);
    listItem.textContent = `${hour[i]} ${Math.floor(Lima.hourCust[i] * Lima.avg)} cookies`;
    sum = sum + Math.floor(Lima.hourCust[i] * Lima.avg);
    if (i == (hour.length - 1)) {
        Lima.total = sum;
        listItem.textContent = `Total: ${sum}`;
        unOrderedList.appendChild(listItem);


    }
}

unOrderedList = document.createElement('ul');
sea.appendChild(unOrderedList);
for (let i = 0; i < hour.length; i++) {
    let listItem = document.createElement('li');
    unOrderedList.appendChild(listItem);
    listItem.textContent = `${hour[i]} ${Math.floor(Seattle.hourCust[i] * Seattle.avg)} cookies`;
    sum = sum + Math.floor(Seattle.hourCust[i] * Seattle.avg);
    if (i == (hour.length - 1)) {
        Seattle.total = sum;
        listItem.textContent = `Total: ${sum}`;
        unOrderedList.appendChild(listItem);


    }

}


unOrderedList = document.createElement('ul');
sea1.appendChild(unOrderedList);

for (let i = 0; i < hour.length; i++) {
    let listItem = document.createElement('li');
    unOrderedList.appendChild(listItem);
    listItem.textContent = `${hour[i]} ${Math.floor(Tokyo.hourCust[i] * Tokyo.avg)} cookies`;
    sum = sum + Math.floor(Tokyo.hourCust[i] * Tokyo.avg);
    if (i == (hour.length - 1)) {
        Tokyo.total = sum;
        listItem.textContent = `Total: ${sum}`;
        unOrderedList.appendChild(listItem);


    }

}


unOrderedList = document.createElement('ul');
sea2.appendChild(unOrderedList);

for (let i = 0; i < hour.length; i++) {
    let listItem = document.createElement('li');
    unOrderedList.appendChild(listItem);
    listItem.textContent = `${hour[i]} ${Math.floor(Dubai.hourCust[i] * Dubai.avg)} cookies`;
    sum = sum + Math.floor(Dubai.hourCust[i] * Dubai.avg);
    if (i == (hour.length - 1)) {
        Dubai.total = sum;
        listItem.textContent = `Total: ${sum}`;
        unOrderedList.appendChild(listItem);


    }


}


unOrderedList = document.createElement('ul');
sea3.appendChild(unOrderedList);

for (let i = 0; i < hour.length; i++) {
    let listItem = document.createElement('li');
    unOrderedList.appendChild(listItem);
    listItem.textContent = `${hour[i]} ${Math.floor(Paris.hourCust[i] * Paris.avg)} cookies`;
    sum = sum + Math.floor(Paris.hourCust[i] * Paris.avg);
    if (i == (hour.length - 1)) {
        Paris.total = sum;
        listItem.textContent = `Total: ${sum}`;
        unOrderedList.appendChild(listItem);

    }


}
console.log(Lima.total)
console.log(Seattle.total)
console.log(Dubai.total)
console.log(Paris.total)
console.log(Tokyo.total)