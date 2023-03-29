const student = {
    id: 101,
    name: 'Bristy',
    money: 5000,
    isRich: true,
    subject: ['Bangla', 'English', 'Math', 'Science', 'ICT'],
    bestFriends: {
        name: 'Farjana Aktar',
        subject: 'Social Science'
    },
    takeExam: function () {
        console.log(this.name, 'taking exam');
    },
    treat: function (expense, tips) {
        this.money = this.money - expense - tips;
        return this.money;
    }
};

// student.takeExam();
const remainingAmount = student.treat(2000, 100);
console.log(remainingAmount);