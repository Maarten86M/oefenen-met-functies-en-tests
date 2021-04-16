// Leeg test bestand

const { sum, findByName } = require('../index');

test("telt 2 sommen op en geeft dan een uitkomst hiervan",function () {
    // Arrange
    const number1 = 4;
    const number2 = 8;

    // Act
    const total = sum(number1, number2);

    // Assert (bewering)
    expect(total).toBe(12);
})



// functie uitgeschreven
test('find names wil return a object from an array',function () {
    //arrangs
    const usernames = [
        {name: "jan", id:1 },
        {name: "Henk", id:2 },
        {name: "Piet", id:3 }
    ];
    const userToFind = "jan";

    // acts
    const result = findByName(usernames, userToFind);

    //assert
    expect(result).toEqual({name: "jan", id:1 });
})

