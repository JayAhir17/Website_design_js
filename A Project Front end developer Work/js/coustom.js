let ap ='';
// let allcatdata= JSON.parse(localStorage.getItem('catInfo'));
let alldata =JSON.parse(localStorage.getItem("catInfo"))
console.log(alldata);
let cat1= `<li class="active" data-filter="*">All</li>`;
let j = [".apple",".veg",".seeds",".whole"];
let l = 0;
alldata.map((i)=>{
    ap +=`
    <li><a href="#">${i.name}</a></li>`
    cat1 +=`<li data-filter=${j[l++]}>${i.name}</li>`
})
document.getElementById("allcat").innerHTML=ap
document.getElementById("allcat1").innerHTML=cat1

let allPr = JSON.parse(localStorage.getItem('productInfo'))

let pr = '';
let allCatwisePr = '';

allPr.map((i)=>{
    pr+= `
    <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg" data-setbg=${i.image} style="background-image:url(${i.image})">
                            <ul class="featured__item__pic__hover">
                                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div class="featured__item__text">
                            <h6><a href="#">${i.pname}</a></h6>
                            <h5>$${i.price}</h5>
                        </div>
                    </div>
                </div>
    `
})



let k=["apple","veg","seeds","whole"];
let t=0;
alldata.map((i)=>{
    
            allPr.map((j)=>{
                    if(j.category == i.id){
                        allCatwisePr += `<div class="col-lg-3 col-md-4 col-sm-6 mix ${k[t++]}">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg" data-setbg=${j.image} style="background-image:url(${j.image})">
                            <ul class="featured__item__pic__hover">
                                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                <li><a href="#" onclick="addToCart(${j.pid})"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div class="featured__item__text">
                            <h6><a href="#">${j.pname}</a></h6>
                            <h5>$${j.price}</h5>
                        </div>
                    </div>
                </div>`

                    }
            })
                    
                                        
                                        
    
})


document.getElementById("allpr").innerHTML=allCatwisePr

let cartData = []
const addToCart=(id)=>{
    let getCartData = JSON.parse(localStorage.getItem('cartInfo')) || [];
    let len = getCartData != null ? getCartData.length+1 : 1;
    let checkData = '';
    if(getCartData != null){
        checkData = getCartData.find((i)=>{
            return i.pid == id
        })
    }
    if(checkData != undefined){
        //qty ++
        let data = getCartData.map((i)=>{
            if(i.pid == id){
                i.qty += 1;
            }   
            return i;
        })
        cartData = data
    } else {
        //push
        let obj = {
            cartid:len,
            pid:id,
            qty:1
        }
     cartData.push(obj)
    }
    
    localStorage.setItem("cartInfo",JSON.stringify(cartData))|| [];
getCounter()
    
}
function getCounter(){
    let getCartData = JSON.parse(localStorage.getItem('cartInfo'))|| [];
    let cartcounterEl =document.getElementById("cartCounter")
    if(getCartData){
    let finall = getCartData.length
    console.log(finall);
    }
    
    if(cartcounterEl){
    cartcounterEl.innerHTML = finall;
    }
}
getCounter()