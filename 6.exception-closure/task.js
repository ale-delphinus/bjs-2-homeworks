﻿function parseCount(quantityProduct) {
    if(Number.isNaN(Number.parseFloat(quantityProduct))) {
        throw new Error("Невалидное значение");
    }
    return parseFloat(quantityProduct);
}

function validateCount(quantityProduct) {
    try{
        return parseCount(quantityProduct);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if(a + b < c || a + c < b || c + b < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter () {
        return this.a + this.b + this.c;
    }

    get area () {
        let p = this.perimeter / 2;
        return Number((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
    }
}

function getTriangle(a, b, c) {
   try{
     return new Triangle(a, b, c);
   } catch(error) {

    return get area() {
        return "Ошибка! Треугольник не существует";}
    
    return get perimeter () {
        return "Ошибка! Треугольник не существует";}
    }
}
