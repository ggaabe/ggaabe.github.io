(function(){
    var app = angular.module('store', []);
    
    app.controller('StoreController', function(){
	    this.products = gems;
	});
    var gems =  [
     {
	name: 'Dodecahedron',
	price: 2,
	description: 'Some gems have hidden qualities beyond their luster, beyond their shone... Dodeca is one of those gems.',
	images:
	{
		full: 'dodecahedron.jpg',
		thumb: 'dodecahedron-thumb.jpg',
	},
	canPurchase: true,
     },
     {
	 name: "Pentagonal Gem",
	 price: 5.95,
	 description: ". . .",
	 canPurchase: false,
     }
];




}) ();