// Leeg test bestand

function sum(num1, num2) {
    return num1 + num2;
}

test("telt 2 sommen op en geeft dan een uitkomst hiervan",function () {
    // Arrange
    const number1 = 4;
    const number2 = 8;

    // Act
    const total = sum(number1, number2);

    // Assert (bewering)
    expect(total).toBe(12);
})



// Act

// Assert