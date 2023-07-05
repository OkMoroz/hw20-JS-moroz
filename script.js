"use strict";
class SuperMath {
  constructor() {}

  check(obj) {
    const { X, Y, znak } = obj;

    const confirmed = confirm(
      `Хочете зробити математичну дію ${znak} ${X} та ${Y}?`
    );
    if (confirmed) {
      const result = this.calculate({ X, Y, znak });
      alert(`Результат: ${result}`);
    } else {
      this.input();
    }
  }

  input() {
    let X, Y, znak;

    X = prompt("Введіть число X:");
    if (X === null) {
      alert("Ви скасували дію");
      return;
    }
    if (X.trim() === "") {
      alert("Поле X не заповнено. Спробуйте ще раз.");
      return;
    }
    X = +X;
    if (isNaN(X)) {
      alert(`Не число. Спробуйте ще раз.`);
      return;
    }

    Y = prompt("Введіть число Y:");
    if (Y === null) {
      alert("Ви скасували дію");
      return;
    }
    if (Y.trim() === "") {
      alert("Поле Y не заповнено. Спробуйте ще раз.");
      return;
    }
    Y = +Y;
    if (isNaN(Y)) {
      alert(`Не число. Спробуйте ще раз.`);
      return;
    }
    znak = prompt("Введіть знак (+, -, *, /, %):");
    if (znak === null) {
      alert("Ви скасували дію");
      return;
    }
    if (znak.trim() === "") {
      alert("Поле знак не заповнено. Спробуйте ще раз.");
      return;
    }

    if (!this.validateOperation(znak)) {
      alert(
        `Ви ввели некоректний знак ${znak}. Неможливо зробити обчислення. Спробуйте ще раз.`
      );
      return;
    }

    if (znak === "/" && parseFloat(Y) === 0) {
      alert("На нуль ділити не можна!");
      return;
    }

    this.check({ X, Y, znak });
  }

  validateOperation(znak) {
    const validOperations = ["+", "-", "*", "/", "%"];
    return validOperations.includes(znak);
  }

  calculate({ X, Y, znak }) {
    switch (znak) {
      case "+":
        return X + Y;
      case "-":
        return X - Y;
      case "/":
        return X / Y;
      case "*":
        return X * Y;
      case "%":
        return X % Y;
    }
  }
}

const p = new SuperMath();
const obj = {
  X: 12,
  Y: 3,
  znak: "/",
};
p.check(obj);
