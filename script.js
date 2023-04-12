//complete this code
class Rectangle {
	constructor(width,height){
		this.width = width;
		this.height = height;
	}
	get heigth(){
		return this.height; 
	}
	get width(){
		return this.width;
	}
	getArea(width,height){
		let area = this.width * this.height;
		return area;
	}
}

class Square extends Rectangle {

	constructor(area){
		super(getArea());
		this.area = area;
	}
	
	getPerimrter(this.area){
		let perimeter = 4*this.area;
		
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
