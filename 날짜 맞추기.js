function todayMonthDate() { 
  let today = new Date();
  let todayMonth = today.getMonth() + 1;
  let todayDate = today.getDate();

  let inputMonth = parseInt(document.getElementById('month').value, 10);
  let inputDate = parseInt(document.getElementById('date').value, 10);

  console.log(today, todayMonth, todayDate, inputMonth, inputDate);

  if (isNaN(inputMonth) || isNaN(inputDate)) {
    console.log("잘못된 입력입니다.");
    return;
  }

  // 로딩 화면 표시
  document.querySelector('.loading').style.display = 'flex';
  document.querySelector('.overlay').style.display = 'block';

  // 2초 후에 로딩 화면을 숨기고 정답 여부 모달을 표시
  setTimeout(() => {
    document.querySelector('.loading').style.display = 'none';

    if (todayMonth === inputMonth && todayDate === inputDate) {
      console.log(`일치`);
      document.querySelector('.correct').style.display = 'block';
      document.getElementById('info').style.display = 'block';
    } else {
      console.log(`불일치`);
      document.querySelector('.wrong').innerHTML = `아쉽습니다! 오늘은 ${todayMonth}월 ${todayDate}일입니다.😥`;
      document.querySelector('.wrong').style.display = 'block';
      document.getElementById('info').style.display = 'block';
    }

    // 2초 후 모달창 자동 닫기
    setTimeout(() => {
      closeModal();
    }, 2000);
  }, 2000);
}

// 모달창 닫기 함수
function closeModal() {
  document.querySelector('.overlay').style.display = 'none';
  document.querySelector('.loading').style.display = 'none';
  document.querySelector('.correct').style.display = 'none';
  document.getElementById('info').style.display = 'none';
  document.querySelector('.wrong').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// 오버레이 클릭 시 닫기
document.querySelector('.overlay').addEventListener('click', closeModal);
