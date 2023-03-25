let slideIndex = [1, 1];
let slideId = ["mySlides1", "mySlides2"];
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}

// buttontop
// Lấy button
const btnTop = document.getElementById("btnTop");

// Thêm sự kiện click vào button
btnTop.addEventListener("click", function () {
  // Cuộn trang về phần đầu tiên
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Thêm sự kiện scroll vào window
window.addEventListener("scroll", function () {
  // Nếu vị trí của trang lớn hơn 100px thì hiển thị button, ngược lại thì ẩn button
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
});