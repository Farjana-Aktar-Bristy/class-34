/* object create method 1 */
const eshikhon = { name: 'eshikhon.com', Id: 11014, job: 'training institute' };
console.log(eshikhon);

const material = Object.create(eshikhon)
console.log(material.job);

/* object create method 2 */
class people {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

const newPeople = new people('Bristy', 16060);
console.log(newPeople);