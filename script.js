let inputbox = document.getElementById("inputbox");
let inputbox1 = document.getElementById("inputbox1");
let inputbox2 = document.getElementById("inputbox2");
let table=document.getElementById("stable");
table.style.padding="5px";
table.style.gap="10px";
let btn = document.getElementById("btn");
btn.style.backgroundColor="lightblue";
btn.style.width="100%"
btn.style.padding="5px"

btn.addEventListener("click", function (event) {
    event.preventDefault();

    let gender = document.querySelector('input[name="gender"]:checked');
    let courseDropdown = document.getElementById("course");
    
    
    let selectedCourse = courseDropdown.value;
    

    let tr = document.createElement("tr");

    let tdName = document.createElement("td");
    tdName.textContent = inputbox.value;

    let tdAge = document.createElement("td");
    tdAge.textContent = inputbox1.value;

    let tdGender = document.createElement("td");
    tdGender.textContent = gender ? gender.value : "Not selected";
    let tdCourse = document.createElement("td");
tdCourse.textContent = selectedCourse;


    let tdEmail = document.createElement("td");
    tdEmail.textContent = inputbox2.value;
    let tdAction = document.createElement("td");
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.backgroundColor = "red";
    deleteBtn.style.color = "white";
    deleteBtn.style.border = "none";
    deleteBtn.style.padding = "5px 10px";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.addEventListener("click", function() {
        tr.remove();  // removes the entire row
    });

    tdAction.appendChild(deleteBtn);
    

    tr.appendChild(tdName);
    tr.appendChild(tdAge);
    tr.appendChild(tdGender);
    tr.appendChild(tdCourse);
    tr.appendChild(tdEmail);
    tr.appendChild(tdAction);

    document.getElementById("container").appendChild(tr);

    console.log("Saved Data:", inputbox.value, inputbox1.value, tdGender.textContent, inputbox2.value);


    document.querySelector('form').reset();
});
