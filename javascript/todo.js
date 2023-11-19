 // straw slide
        $(function () {
            $('.straw_slide_inner').slick({
                dots: true,
                infinite: true,
                pauseOnHover: true,
                speed: 500,
                fade: true,
                cssEase: 'linear',
                autoplay: true,
                autoplaySpeed: 2500,
                prevArrow: $('.straw_btn_prev'),
                nextArrow: $('.straw_btn_next')

            });
        });

//warring
let warring = 0;

    function warringCheck() {
        let radioButtons = document.querySelectorAll('.warringinput');

        let selectedValue = "";
        for (let i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                selectedValue = radioButtons[i].value;
                break;
            }
        }

        if (selectedValue === "") {
            alert('체크해주세요');
        } else if (selectedValue === 'good') {
            alert('그렇군요');
        } else if (selectedValue === 'not_bad') {
            alert('괜찮아요');
        } else if (selectedValue === 'war') {
            alert('안괜찮아요');
        } else {
            alert('아껴봐요');
        }


        for (let i = 0; i < radioButtons.length; i++) {
            radioButtons[i].checked = false;
        }
    }


        //TODO LIST Slide
        $(function () {
            let currentIndex = 0;
            let timer;

            function nextslide(index) {
                $('.todo_box_slide').stop().animate({
                    left: -100 * index + '%'
                }, 200);
                currentIndex = index;
            }

            function autoslide() {
                timer = setInterval(function () {
                    let nextIndex = (currentIndex + 1) % 3;
                    nextslide(nextIndex)
                }, 200);

            }

            function stopslide() {
                clearInterval(timer);
            }

            $('.todolist_next').click(function (e) {
                e.preventDefault
                if (currentIndex === 2) {
                    currentIndex = 0;
                    nextslide(currentIndex);
                } else {
                    nextslide(currentIndex + 1);
                }
            });

            $('.todolist_prev').click(function (e) {
                e.preventDefault
                if (currentIndex === 0) {
                    currentIndex = 2;
                    nextslide(currentIndex);
                } else {
                    nextslide(currentIndex - 1);
                }
            });
            // autoslide()
        });
          




//마일리지(로컬스토리지)



document.addEventListener('DOMContentLoaded', function() {
      // 로컬 스토리지에서 저장된 데이터 로드
      loadTodoState();
      // 로컬 스토리지에서 저장된 마일리지 로드
      loadMileage();

      // 체크박스에 이벤트 리스너 연결
      const checkboxes = document.querySelectorAll('.todoinput');
      checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', handleCheckboxChange);
      });

      // '적립 확인' 버튼에 이벤트 리스너 연결
      const accumulateButton = document.getElementById('accumulateButton');
      accumulateButton.addEventListener('click', accumulateMileage);

      // '적립된 마일리지 확인' 버튼에 이벤트 리스너 연결
      const checkMileageButton = document.getElementById('checkMileageButton');
      checkMileageButton.addEventListener('click', checkMileage);

      // '적립 초기화' 버튼에 이벤트 리스너 연결
      const resetMileageButton = document.getElementById('resetMileageButton');
      resetMileageButton.addEventListener('click', resetMileage);
    });

    function handleCheckboxChange(event) {
      const checkbox = event.target;
      const label = document.querySelector(`label[for="${checkbox.id}"]`);

      if (checkbox.checked) {
        // 완료된 작업 클래스를 라벨에 추가
        label.classList.add('completed');
      } else {
        // 완료된 작업 클래스를 라벨에서 제거
        label.classList.remove('completed');
      }

      // 업데이트된 상태를 로컬 스토리지에 저장
      saveTodoState();
    }

    function saveTodoState() {
      const checkboxes = document.querySelectorAll('.todoinput');
      const todoState = {};

      checkboxes.forEach(function(checkbox) {
        todoState[checkbox.id] = checkbox.checked;
      });

      localStorage.setItem('todoState', JSON.stringify(todoState));
    }

    function loadTodoState() {
      const savedState = localStorage.getItem('todoState');

      if (savedState) {
        const todoState = JSON.parse(savedState);

        for (const checkboxId in todoState) {
          const checkbox = document.getElementById(checkboxId);

          if (checkbox) {
            checkbox.checked = todoState[checkboxId];

            const label = document.querySelector(`label[for="${checkboxId}"]`);
            if (todoState[checkboxId]) {
              label.classList.add('completed');
            }
          }
        }
      }
    }

    function accumulateMileage() {
      let mileage = getSavedMileage(); // 현재 저장된 마일리지 불러오기
      // todolist checkbox를 모두 담은 배열(NodeList)
      const checkboxlist = document.querySelectorAll('.todoinput');

      // 배열의 길이만큼 for문 반복
      for (let i = 0; i < checkboxlist.length; i++) {
        if (checkboxlist[i].checked) {
          // checkbox가 체크된 상태인지 확인
          // 체크된 상태면 마일리지 변수에 10점 추가
          mileage += 10;
        }
      }

      // 저장된 마일리지 업데이트
      saveMileage(mileage);

      // 알림으로 적립된 마일리지 표시
      alert(`적립되었습니다. 현재 마일리지: ${mileage}점`);

      // 모든 체크박스를 체크 해제
      for (let i = 0; i < checkboxlist.length; i++) {
        checkboxlist[i].checked = false;
      }
    }

    function saveMileage(mileage) {
      localStorage.setItem('mileage', mileage);
    }

    function getSavedMileage() {
      const savedMileage = localStorage.getItem('mileage');
      return savedMileage ? parseInt(savedMileage, 10) : 0;
    }

    function loadMileage() {
      const savedMileage = getSavedMileage();

      if (savedMileage) {
        // 로컬 스토리지에 저장된 마일리지가 있으면 불러와서 알림으로 표시
        alert(`현재 마일리지는 ${savedMileage}점입니다.`);
      }
    }

    function checkMileage() {
      const savedMileage = getSavedMileage();

      if (savedMileage) {
        // 로컬 스토리지에 저장된 마일리지가 있으면 불러와서 알림으로 표시
        alert(`현재 마일리지는 ${savedMileage}점입니다.`);
      } else {
        alert('아직 적립된 마일리지가 없습니다.');
      }
    }

    function resetMileage() {
      // 적립된 마일리지 초기화
      saveMileage(0);
      alert('적립된 마일리지가 초기화되었습니다.');
    }








        // <!-- 타이핑 라이브러리 시간초 -->
        TypeHangul.type("#text-target", { intervalType: 30 });



        // 쓰레기 배출량 그래프
        const Utils = {
            years: (startYear) => {
                let years = [];
                for (let i = 0; i < 5; i++) {
                    years.push(startYear + i);
                }
                return years;
            },
        };

        const wasteEmissionData = [1000, 1300, 2300, 4900, 5200];

        const data = {
            labels: Utils.years(2018),
            datasets: [
                {
                    label: "연도별 쓰레기 배출량 (톤)",
                    data: wasteEmissionData,
                    fill: true, // 배경색 채우기
                    backgroundColor: "rgba(75, 192, 192, 0.2)", // 투명한 배경색
                    borderColor: "rgb(75, 192, 192)",
                    tension: 0.3, // 곡선의 긴장도 조정
                    pointBackgroundColor: "rgb(255, 99, 132)", // 데이터 포인트 색상
                    pointBorderColor: "#fff", // 데이터 포인트 테두리 색상
                    pointHoverBackgroundColor: "#fff", // 데이터 포인트 호버 색상
                    pointHoverBorderColor: "rgb(255, 99, 132)", // 데이터 포인트 호버 테두리 색상
                    pointRadius: 5, // 데이터 포인트 크기
                    pointHoverRadius: 7, // 데이터 포인트 호버 시 크기
                },
            ],
        };

        const config = {
            type: "line",
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                aspectRatio: 0.8, // 원하는 비율로 조절하세요 (예: 2는 가로가 세로의 2배)
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                size: 20,
                            },
                        },
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        };

        new Chart(document.getElementById("myChart"), config);

        // 쓰레기 배출량 끝
        // cartoon 오른쪽 왼쪽 출력하기
        window.onscroll = function () {
            const leftBoxes = document.querySelectorAll(".straw-child-leftbox");
            const rightBoxes = document.querySelectorAll(".straw-child-rightbox");
            const windowHeight = window.innerHeight;

            const showElement = (el) => {
                const elementTop = el.getBoundingClientRect().top;
                if (elementTop < windowHeight - 350) {
                    console.log(window.scrollY);
                    el.classList.add("visible");
                }
            };

            leftBoxes.forEach(showElement);
            rightBoxes.forEach(showElement);
        };
// cartoon 오른쪽 왼쪽 출력하기 끝
        


//애니메이션 효과

// section slide
let observer = new IntersectionObserver((e) => {
    e.forEach((box) => {
        console.log(e)
        if (box.isIntersecting) {
            box.target.classList.add('slide_top');
        } else {
            //  box.target.classList.remove('slide_top');
        }
    });
});


let sections = document.querySelectorAll('section');
for (let i = 0; i < sections.length; i++) {
    observer.observe(sections[i]);
}

//btn shadow
let allBtn = document.querySelectorAll('button');
let currentIndex = 0;

document.addEventListener('mouseover', function (event) {
    let currentElement = event.target;

    if (currentElement.tagName === 'BUTTON') {
        currentElement.classList.add('shadow-drop-2-center');
    }
});

document.addEventListener('mouseout', function (event) {
    let currentElement = event.target;

    if (currentElement.tagName === 'BUTTON') {
        currentElement.classList.remove('shadow-drop-2-center');
    }
});



