$(function(){
	var Item = {//讀取資料後放入Item中
		name:["a","b","c","d","e","f"],
		price:[0,1,2,3,4,5],
		species:["a","b","c","d","e","f"]		
		
	};	
					//我沒用store.js 因為抓不到data index.js裡 傳給store.ejs的data
				for ( var i = 0 ; i < data.length ; i++){
						Item.name[i]= data[i].Tname ;
						Item.price[i]= data[i].price ; 
						Item.species[i]=data[i].TeaSpecies;
						console.log(Item.name[i]);
						console.log(Item.name[i]);	
						console.log(Item.name[i]);	　　
				} 	
	
	
	
	$("#Item1_name").text(Item.name[0]);
	$("#Item1_price").text(Item.price[0]);
	$("#Item1_species").text(Item.species[0]);
	
	$("#Item2_name").text(Item.name[1]);
	$("#Item2_price").text(Item.price[1]);
	$("#Item2_species").text(Item.species[1]);
	
	$("#Item3_name").text(Item.name[2]);
	$("#Item3_price").text(Item.price[2]);
	$("#Item3_species").text(Item.species[2]);
	
	$("#Item4_name").text(Item.name[3]);
	$("#Item4_price").text(Item.price[3]);
	$("#Item4_species").text(Item.species[3]);
	
	$("#Item5_name").text(Item.name[4]);
	$("#Item5_price").text(Item.price[4]);
	$("#Item5_species").text(Item.species[4]);
	
	$("#Item6_name").text(Item.name[5]);
	$("#Item6_price").text(Item.price[5]);
	$("#Item6_species").text(Item.species[5]);
});