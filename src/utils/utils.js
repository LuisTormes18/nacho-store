export function getTotalCartValue(products){
	const total = products.map(P=> P.price * P.quantity ).reduce((acum, price)=>{

		acum= acum + price
		return acum
	})

	console.log(total);
	return total;
}