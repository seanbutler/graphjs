"use strict"

const Node = require('./node.js');
const Arc = require('./arc.js');

let janeway = new Node();
janeway.set('name', "Katherine Janeway");
janeway.set('race', 'Human');
janeway.set('rank', 'Captain');
janeway.set('ship', 'Voyager');

let tuvok = new Node();
tuvok.set('name', "Tuvok");
tuvok.set('race', 'Vulcan');
tuvok.set('rank', 'Lt Commander');
tuvok.set('ship', 'Voyager');


let friendship = new Arc();
friendship.set('relationship', 'friends');
friendship.links(tuvok, janeway);


let torres = new Node();
torres.set('name', "B'elanna Torres");
torres.set('race', 'Klingon/Human');
torres.set('rank', 'Chief');
torres.set('ship', 'Voyager');

let paris = new Node();
paris.set('name', "Tom Paris");
paris.set('race', 'Human');
paris.set('rank', 'Observer');
paris.set('ship', 'Voyager');

let relation = new Arc();
relation.set('relationship', 'married');
relation.links(torres, paris);

console.log(torres);
console.log(paris);
console.log(relation);
