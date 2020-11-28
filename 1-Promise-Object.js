const inventory={
  sunglasses:1900,
  pant:1088,
  bags:1344,
};
function executorFonction(resolve,reject){
  if (inventory.sunglasses>0){
    resolve(' Sunglasses order processed')

  }else { reject("That item is sold out")}
}
function orderSunglasses(){
return newPromise= new Promise(executorFonction)
}
let orderPromise=orderSunglasses()
module.exports=orderPromise