let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || [];
let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      let search = basket.find((x) => x.id === id) || [];

      return `
    <div id=product-id-${id} class="item">
      <img width="220" src=${img} alt="">  
      <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-quantity">
          <h2>${price}</h2>
          <div class="buttons">
            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
            <div id=${id} class="quantity">${
        search.item === undefined ? 0 : search.item
      }</div>
            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
          </div>
        </div>
      </div>
    </div>`;
    })
    .join(""));
};
generateShop();
/*increment, decrement*/
let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  update(selectedItem.id); /*might delete*/
  localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};
let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation();

/**
 * !once u click go to the detail page
 */
// 클릭 이벤트 처리 함수
function handleClick1() {
  // 특정 URL로 이동
  window.location.href =
    "https://frabjous-longma-abd4cf.netlify.app/HTML/detail.html?id=1";
}
// HTML 요소 가져오기
http: var itemElement = document.getElementById("product-id-a1");

// 클릭 이벤트 리스너 추가 (한 번만)
itemElement.addEventListener("click", handleClick1, { once: true });

/**
 * !once u click go to the detail page
 */
// 클릭 이벤트 처리 함수
function handleClick2() {
  // 특정 URL로 이동
  window.location.href =
    "https://frabjous-longma-abd4cf.netlify.app/HTML/detail.html?id=2";
}

// HTML 요소 가져오기
var itemElement = document.getElementById("product-id-a2");

// 클릭 이벤트 리스너 추가 (한 번만)
itemElement.addEventListener("click", handleClick2, { once: true });

/**
 * !once u click go to the detail page
 */
// 클릭 이벤트 처리 함수
function handleClick3() {
  // 특정 URL로 이동
  window.location.href =
    "https://frabjous-longma-abd4cf.netlify.app/HTML/detail.html?id=3";
}

// HTML 요소 가져오기
var itemElement = document.getElementById("product-id-a3");

// 클릭 이벤트 리스너 추가 (한 번만)
itemElement.addEventListener("click", handleClick3, { once: true });

/**
 * !once u click go to the detail page
 */
// 클릭 이벤트 처리 함수
function handleClick4() {
  // 특정 URL로 이동
  window.location.href =
    "https://frabjous-longma-abd4cf.netlify.app/HTML/detail.html?id=4";
}

// HTML 요소 가져오기
var itemElement = document.getElementById("product-id-a4");

// 클릭 이벤트 리스너 추가 (한 번만)
itemElement.addEventListener("click", handleClick4, { once: true });

/**
 * !once u click go to the detail page
 */
// 클릭 이벤트 처리 함수
function handleClick5() {
  // 특정 URL로 이동
  window.location.href =
    "https://frabjous-longma-abd4cf.netlify.app/HTML/detail.html?id=5";
}

// HTML 요소 가져오기
var itemElement = document.getElementById("product-id-a5");

// 클릭 이벤트 리스너 추가 (한 번만)
itemElement.addEventListener("click", handleClick5, { once: true });

/**
 * !once u click go to the detail page
 */
// 클릭 이벤트 처리 함수
function handleClick6() {
  // 특정 URL로 이동
  window.location.href =
    "https://frabjous-longma-abd4cf.netlify.app/HTML/detail.html?id=6";
}

// HTML 요소 가져오기
var itemElement = document.getElementById("product-id-a6");

// 클릭 이벤트 리스너 추가 (한 번만)
itemElement.addEventListener("click", handleClick6, { once: true });

/**
 * !once u click go to the detail page
 */
// 클릭 이벤트 처리 함수
function handleClick7() {
  // 특정 URL로 이동
  window.location.href =
    "https://frabjous-longma-abd4cf.netlify.app/HTML/detail.html?id=7";
}

// HTML 요소 가져오기
var itemElement = document.getElementById("product-id-a7");

// 클릭 이벤트 리스너 추가 (한 번만)
itemElement.addEventListener("click", handleClick7, { once: true });
/**
 * !once u click go to the detail page
 */
// 클릭 이벤트 처리 함수
function handleClick8() {
  // 특정 URL로 이동
  window.location.href =
    "https://frabjous-longma-abd4cf.netlify.app/HTML/detail.html?id=8";
}

// HTML 요소 가져오기
var itemElement = document.getElementById("product-id-a8");

// 클릭 이벤트 리스너 추가 (한 번만)
itemElement.addEventListener("click", handleClick8, { once: true });

/**
 * !once u click go to the detail page
 */
// 클릭 이벤트 처리 함수
function handleClick9() {
  // 특정 URL로 이동
  window.location.href =
    "https://frabjous-longma-abd4cf.netlify.app/HTML/detail.html?id=9";
}

// HTML 요소 가져오기
var itemElement = document.getElementById("product-id-a9");

// 클릭 이벤트 리스너 추가 (한 번만)
itemElement.addEventListener("click", handleClick9, { once: true });

/**
 * !once u click go to the detail page
 */
// 클릭 이벤트 처리 함수
function handleClick10() {
  // 특정 URL로 이동
  window.location.href =
    "https://frabjous-longma-abd4cf.netlify.app/HTML/detail.html?id=10";
}

// HTML 요소 가져오기
var itemElement = document.getElementById("product-id-a10");

// 클릭 이벤트 리스너 추가 (한 번만)
itemElement.addEventListener("click", handleClick10, { once: true });

/**
 * !once u click go to the detail page
 */
// 클릭 이벤트 처리 함수
function handleClick11() {
  // 특정 URL로 이동
  window.location.href =
    "https://frabjous-longma-abd4cf.netlify.app/HTML/detail.html?id=11";
}

// HTML 요소 가져오기
var itemElement = document.getElementById("product-id-a11");

// 클릭 이벤트 리스너 추가 (한 번만)
itemElement.addEventListener("click", handleClick11, { once: true });

/**
 * !once u click go to the detail page
 */
// 클릭 이벤트 처리 함수
function handleClick12() {
  // 특정 URL로 이동
  window.location.href =
    "https://frabjous-longma-abd4cf.netlify.app/HTML/detail.html?id=12";
}

// HTML 요소 가져오기
var itemElement = document.getElementById("product-id-a12");

// 클릭 이벤트 리스너 추가 (한 번만)
itemElement.addEventListener("click", handleClick12, { once: true });

/**
 * !once u click go to the detail page
 */
// 클릭 이벤트 처리 함수
function handleClick13() {
  // 특정 URL로 이동
  window.location.href =
    "https://frabjous-longma-abd4cf.netlify.app/HTML/detail.html?id=13";
}

// HTML 요소 가져오기
var itemElement = document.getElementById("product-id-a13");

// 클릭 이벤트 리스너 추가 (한 번만)
itemElement.addEventListener("click", handleClick13, { once: true });

/**
 * !once u click go to the detail page
 */
// 클릭 이벤트 처리 함수
function handleClick14() {
  // 특정 URL로 이동
  window.location.href =
    "https://frabjous-longma-abd4cf.netlify.app/HTML/detail.html?id=14";
}

// HTML 요소 가져오기
var itemElement = document.getElementById("product-id-a14");

// 클릭 이벤트 리스너 추가 (한 번만)
itemElement.addEventListener("click", handleClick14, { once: true });

/**
 * !once u click go to the detail page
 */
// 클릭 이벤트 처리 함수
function handleClick15() {
  // 특정 URL로 이동
  window.location.href =
    "https://frabjous-longma-abd4cf.netlify.app/HTML/detail.html?id=15";
}

// HTML 요소 가져오기
var itemElement = document.getElementById("product-id-a15");

// 클릭 이벤트 리스너 추가 (한 번만)
itemElement.addEventListener("click", handleClick15, { once: true });

/**
 * !once u click go to the detail page
 */
// 클릭 이벤트 처리 함수
function handleClick16() {
  // 특정 URL로 이동
  window.location.href =
    "https://frabjous-longma-abd4cf.netlify.app/HTML/detail.html?id=16";
}

// HTML 요소 가져오기
var itemElement = document.getElementById("product-id-a16");

// 클릭 이벤트 리스너 추가 (한 번만)
itemElement.addEventListener("click", handleClick16, { once: true });

/**
 * !once u click go to the detail page
 */
// 클릭 이벤트 처리 함수
function handleClick17() {
  // 특정 URL로 이동
  window.location.href =
    "https://frabjous-longma-abd4cf.netlify.app/HTML/detail.html?id=17";
}

// HTML 요소 가져오기
var itemElement = document.getElementById("product-id-a17");

// 클릭 이벤트 리스너 추가 (한 번만)
itemElement.addEventListener("click", handleClick17, { once: true });

/**
 * !once u click go to the detail page
 */
// 클릭 이벤트 처리 함수
function handleClick18() {
  // 특정 URL로 이동
  window.location.href =
    "https://frabjous-longma-abd4cf.netlify.app/HTML/detail.html?id=18";
}

// HTML 요소 가져오기
var itemElement = document.getElementById("product-id-a18");

// 클릭 이벤트 리스너 추가 (한 번만)
itemElement.addEventListener("click", handleClick18, { once: true });

/**
 * !once u click go to the detail page
 */
// 클릭 이벤트 처리 함수
function handleClick19() {
  // 특정 URL로 이동
  window.location.href =
    "https://frabjous-longma-abd4cf.netlify.app/HTML/detail.html?id=19";
}

// HTML 요소 가져오기
var itemElement = document.getElementById("product-id-a19");

// 클릭 이벤트 리스너 추가 (한 번만)
itemElement.addEventListener("click", handleClick19, { once: true });

/**
 * !once u click go to the detail page
 */
// 클릭 이벤트 처리 함수
function handleClick20() {
  // 특정 URL로 이동
  window.location.href =
    "https://frabjous-longma-abd4cf.netlify.app/HTML/detail.html?id=20";
}

// HTML 요소 가져오기
var itemElement = document.getElementById("product-id-a20");

// 클릭 이벤트 리스너 추가 (한 번만)
itemElement.addEventListener("click", handleClick20, { once: true });

/**
 * !once u click go to the detail page
 */
// 클릭 이벤트 처리 함수
function handleClick21() {
  // 특정 URL로 이동
  window.location.href =
    "https://frabjous-longma-abd4cf.netlify.app/HTML/detail.html?id=21";
}

// HTML 요소 가져오기
var itemElement = document.getElementById("product-id-a21");

// 클릭 이벤트 리스너 추가 (한 번만)
itemElement.addEventListener("click", handleClick21, { once: true });

/**
 * !once u click go to the detail page
 */
// 클릭 이벤트 처리 함수
function handleClick22() {
  // 특정 URL로 이동
  window.location.href =
    "https://frabjous-longma-abd4cf.netlify.app/HTML/detail.html?id=22";
}

// HTML 요소 가져오기
var itemElement = document.getElementById("product-id-a22");

// 클릭 이벤트 리스너 추가 (한 번만)
itemElement.addEventListener("click", handleClick22, { once: true });

/**
 * !once u click go to the detail page
 */
// 클릭 이벤트 처리 함수
function handleClick23() {
  // 특정 URL로 이동
  window.location.href =
    "https://frabjous-longma-abd4cf.netlify.app/HTML/detail.html?id=23";
}

// HTML 요소 가져오기
var itemElement = document.getElementById("product-id-a23");

// 클릭 이벤트 리스너 추가 (한 번만)
itemElement.addEventListener("click", handleClick23, { once: true });

/**
 * !once u click go to the detail page
 */
// 클릭 이벤트 처리 함수
function handleClick24() {
  // 특정 URL로 이동
  window.location.href =
    "https://frabjous-longma-abd4cf.netlify.app/HTML/detail.html?id=24";
}

// HTML 요소 가져오기
var itemElement = document.getElementById("product-id-a24");

// 클릭 이벤트 리스너 추가 (한 번만)
itemElement.addEventListener("click", handleClick24, { once: true });

/**
 * !once u click go to the detail page
 */
// 클릭 이벤트 처리 함수
function handleClick25() {
  // 특정 URL로 이동
  window.location.href =
    "https://frabjous-longma-abd4cf.netlify.app/HTML/detail.html?id=25";
}

// HTML 요소 가져오기
var itemElement = document.getElementById("product-id-a25");

// 클릭 이벤트 리스너 추가 (한 번만)
itemElement.addEventListener("click", handleClick25, { once: true });

/**
 * !once u click go to the detail page
 */
// 클릭 이벤트 처리 함수
function handleClick26() {
  // 특정 URL로 이동
  window.location.href =
    "https://frabjous-longma-abd4cf.netlify.app/HTML/detail.html?id=26";
}

// HTML 요소 가져오기
var itemElement = document.getElementById("product-id-a26");

// 클릭 이벤트 리스너 추가 (한 번만)
itemElement.addEventListener("click", handleClick26, { once: true });

/**
 * !once u click go to the detail page
 */
// 클릭 이벤트 처리 함수
function handleClick27() {
  // 특정 URL로 이동
  window.location.href =
    "https://frabjous-longma-abd4cf.netlify.app/HTML/detail.html?id=27";
}

// HTML 요소 가져오기
var itemElement = document.getElementById("product-id-a27");

// 클릭 이벤트 리스너 추가 (한 번만)
itemElement.addEventListener("click", handleClick27, { once: true });

/**
 * !once u click go to the detail page
 */
// 클릭 이벤트 처리 함수
function handleClick28() {
  // 특정 URL로 이동
  window.location.href =
    "https://frabjous-longma-abd4cf.netlify.app/HTML/detail.html?id=28";
}

// HTML 요소 가져오기
var itemElement = document.getElementById("product-id-a28");

// 클릭 이벤트 리스너 추가 (한 번만)
itemElement.addEventListener("click", handleClick28, { once: true });

/**
 * !once u click go to the detail page
 */
