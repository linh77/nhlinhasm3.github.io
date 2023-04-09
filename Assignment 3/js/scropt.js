function handleSubmit() {
  //lay gia tri cua input email va chuyen sang in thuong
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();

  //lay element cu the p hien thi loi
  const errorEmail = document.getElementById("error-email");

  //dieu kien de la mot email
  const checkEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //dung match de chek email vua nhap
  const check = emailValue.match(checkEmail);

  //lay phan chua thong tin
  const sectionContent = document.querySelector(".section-content");
  console.log("check", sectionContent);

  //lay element de kiem soat submit
  const submitControl = document.querySelector(".submit-email");
  if (check) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui long nhap Email";
  }
}

function handleMouseOver(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.querySelector("button").style.display = "inline-block";
}

function handleMouseOut(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.style.display = "none";
}

function handleViewMore(element) {
  const parentElement = element.closest(".container_job");
  const viewMore = parentElement.querySelector(".view-more");
  if (viewMore.classList.value.includes("view-less")) {
    viewMore.classList.remove("view-less");
    element.style.backgroundColor = "yellow";
    element.style.color = "black";
    element.innerHTML = "View less";
    const sectionContent = parentElement.querySelectorAll(".display");
    sectionContent.forEach((element) => {
      element.style.display = "block";
    });
  } else {
    viewMore.classList.add("view-less");
    element.innerHTML = "View more";
    element.style.backgroundColor = "#199cdb";
    const sectionContent = parentElement.querySelectorAll(".display");
    sectionContent.forEach((element) => {
      element.style.display = "none";
    });
  }
}
