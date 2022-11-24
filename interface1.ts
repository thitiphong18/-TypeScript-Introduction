interface Rectangle {
    width: number;
    height: number;
}
interface ColoredRectangle extends Rectangle {
    color: string 
}
const rectangle: Rectangle = {
    width: 20,
    height: 10,
}
console.log(rectangle);
const coloredRectangle: ColoredRectangle = {
    width: 20,
    height: 10,
    color: "red"
}
console.log(coloredRectangle);



