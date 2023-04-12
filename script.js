//complete this code
class Rectangle {
	constructor(width,height){
		this.width = width;
		this.height = height;
	}
	get getters(){
		return 
	}
	getArea(width,height){
		let area = this.width * this.height;
		return area;
	}
}

class Square extends Rectangle {
	constructor(area){
		this.area = area;
	}
	super(getArea());
	getPerimrter(){
		let perimeter = 4*this.area;
		
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
