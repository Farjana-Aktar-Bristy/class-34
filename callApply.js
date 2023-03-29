const bristy = {
    Id: 101,
    money: 5000,
    name: 'Farjana Aktar Bristy',
    treat: function (expense) {
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    }
}

const arisha = {
    Id: 102,
    money: 1000,
    name: 'arisha'
}

const ayesha = {
    Id: 103,
    money: 10000,
    name: "ayesha"
}
bristy.treat.call(ayesha, 4000);


bristy.treat.apply(arisha, [400]);