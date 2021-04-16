// functie 1
function sum(num1, num2) {
    return num1 + num2;
}

// functie 2
function findByName(names, user) {

    for (let i = 0; i < names.length; i ++){
        const currentUser = names[i];
        {
            if (currentUser.name === user) {
                return currentUser
                console.log(currentUser);
            }
        }
    }
}

module.exports = {
    sum: sum,
    findByName: findByName,
}