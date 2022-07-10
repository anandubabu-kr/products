let images = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg",
]
let currentImg = '/images/image-product-1.jpg';

let items = []

let counter = document.getElementById('count')
let count = parseInt(counter.value)
let price = '$125.00'
let productTitile = 'Fall Limited Edition Sneakers'
let cart = document.getElementsByClassName('cart-items')[0]

function activateMenu() {
    let menu = document.getElementsByClassName('menu')[0]
    let closeButton = document.getElementsByClassName('close-button')[0]
    menu.classList.toggle('active')
    closeButton.classList.toggle('active')
}

function subtract() {
    if (count <= 1) return
    count -= 1
    counter.value = count
}

function add() {
    if (count >= 10) return
    count += 1
    counter.value = count
}

function activateCart() {
    let cartContainer = document.getElementsByClassName('cart-container')[0]
    cartContainer.classList.toggle('active')

}

function activeteLightBox() {
    let lightBox = document.getElementsByClassName('product__lightbox')[0];
    lightBox.classList.toggle('active')

}

function changeImg(sliderID, imgId) {
    currentImg = images[imgId - 1]
    document.getElementById(sliderID).src = currentImg
}

function imgNavigate(sliderId, action) {
    let slider = document.getElementById(sliderId);
    let imgId = parseInt(currentImg.match((/[0-9]/)))
    // let imgId=images.indexOf(currentImg)+1
    if (action == 'next') {
        if (imgId === images.length) {
            imgId = 1
        }
        currentImg = images[imgId - 1 + 1]
        console.log('url : ', currentImg, 'id now : ', imgId)
    }
    if (action == 'prev') {
        if (imgId === 1) {
            imgId = images.length
        }
        currentImg = images[imgId - 1 - 1]
        console.log('url : ', currentImg, 'id now : ', imgId)
    }
    // if()
    slider.src = currentImg
}

function addToCart() {
    if (count <= 0 || count >= 10) {
        alert('Please select itmes within the limit !')
        return
    }
    let total = 125.00 * count;
    items.push({
        thumbImg: './images/image-product-1-thumbnail.jpg',
        title: productTitile,
        price: price,
        quantity: count,
        total: total,
    })
    console.log('item added !', items.length)
    updateCart()
}

function updateCart() {
    // console.log('creation started !')
    let lastIndex = items.length - 1
    let item = items[lastIndex]
    // console.log(item)

    let itemContainer = document.createElement('div');
    itemContainer.classList.add('item');

    let image = document.createElement('img');
    image.src = item.thumbImg;
    itemContainer.appendChild(image);

    let itemData = document.createElement('div');

    let title = document.createElement('p');
    title.innerHTML = item.title;
    itemData.appendChild(title)
    let priceInfo = document.createElement('p');
    let totalPrice = document.createElement('span');
    totalPrice.classList.add('price');
    let priceStr = item.price + ' x ' + item.quantity + ' '
    priceInfo.innerHTML = priceStr;
    priceStr = '$' + item.total
    totalPrice.innerHTML = priceStr
    priceInfo.appendChild(totalPrice)

    itemData.appendChild(priceInfo)
    itemContainer.appendChild(itemData)

    let deleteButton = document.createElement('button', { id: lastIndex });
    deleteButton.classList.add('delete__button')
    deleteButton.id = lastIndex
    deleteButton.addEventListener("click", (event) => {
        removeItem(event)
    })
    itemContainer.appendChild(deleteButton)
    cart.insertBefore(itemContainer, cart.children[0])


}

function removeItem(event) {
    items.pop()
    let parent = event.target.closest('div.item')
    cart.removeChild(parent)
}

function checkOut() {
    if (items.length === 0) { alert('Can\'t Checkout! \n Nothing in the cart !!'); return }
    items = []
    cart.innerHTML=''
    alert('Checkout successfull !')
}

{/* <div class="item">
    <img src="./images/image-product-1-thumbnail.jpg" alt="">
        <div>
            <p>Fall Linuer </p>
            <p> 243 2342 <span class='price'>

            </span>
                23423 </p>
        </div>
        <span class="delete__button"></span>
</div> */}
// console.log('/images/image-product-1.jpg'.match(/[0-9]/))