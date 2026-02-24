const imageInput = document.getElementById("imageInput");
const previewImage = document.getElementById("previewImage");
const submitBtn = document.getElementById("submitBtn");

imageInput.addEventListener("change", function(){
  const file = this.files[0];
  if(file){
    const reader = new FileReader();
    reader.onload = function(e){
      previewImage.src = e.target.result;
    }
    reader.readAsDataURL(file);
  }
});

submitBtn.addEventListener("click", function(){

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value.trim();
  const bio = document.getElementById("bio").value.trim();

  if(name === "" || email === "" || age === "" || bio === ""){
    alert("Please fill all fields properly!");
    return;
  }

  cardImage.src = previewImage.src;
  cardName.innerText = name;
  cardEmail.innerText = email;
  cardAge.innerText = "Age: " + age;
  cardBio.innerText = bio;

  document.getElementById("profileCard").style.display = "block";

  const toast = document.getElementById("toast");
  toast.style.display = "block";
  setTimeout(()=>{ toast.style.display="none"; }, 3000);
});
