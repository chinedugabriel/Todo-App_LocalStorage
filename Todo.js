
    let check = true;
    // console.log(check);
    let showData_payLoad = JSON.parse(localStorage.getItem("payLoad"));
    let data = showData_payLoad !==[] ? showData_payLoad : (
        [{
        title : "learn React",
        description :" this would",
        completed : false
    }]
    );  

    // the function below belongs to the Add button (Add Todo)
    const addBtn = ()=>{
       let showForm = document.getElementById("form");
   document.getElementById("table").style.display="none";
       showForm.classList.add("hide");
    }
    
    // the function below belongs to the Discard button
    const discardBtn = ()=>{
     location.reload();
    }

    // the function below belongs to the submit button
    let submitBtn =()=>{
        let title = document.getElementById("title");
        let description = document.getElementById("description");

        if(check == true){

            data = [...data, {
            title : title.value,
            description : description.value,
            completed : false
        }];
        localStorage.setItem("payLoad", JSON.stringify(data));
            // console.log(data);
    
            discardBtn();
        }else{
            let id = localStorage.getItem("id");
            
            let edited_input =   { title : title.value, description : description.value,  completed : false };
            
             data.splice(id,1, edited_input);
            localStorage.setItem("payLoad", JSON.stringify(data));
            // console.log(data);
    
            discardBtn();
        }

    }
    
    let loadData = ()=>{
      let showData_payLoad = JSON.parse(localStorage.getItem("payLoad"));
        console.log("showData_payLoad", showData_payLoad);

        let data = showData_payLoad.map((val,index) => {

            return ( 
                ` <tr>
                    <td><button class="btn-delete" onclick="deleteData(${index})" >delete</button></td>
                    <td>${index+ 1}</td>
                    <td>${val.title}</td>
                    <td>${val.description}</td>
                    <td>Not Completed</td>
                    <td><button class="btn" onclick = "Done_btn()">Done</button></td>
                    <td><button class="btn" onclick = "edit(${index})">Edit</button> &nbsp; &nbsp;<button  class="btn">View</button></td>
                  </tr>
                `
            )
        });
       
        document.getElementById("row").innerHTML = data;
    }
    
    // the function below belongs to the Delete button
    const deleteData = (id)=>{
        let showData_payLoad = JSON.parse(localStorage.getItem("payLoad"));
      
      let newData =   showData_payLoad.filter((item,index) =>{
            return id !== index;
        })

        localStorage.setItem("payLoad", JSON.stringify(newData));
        discardBtn();

    }

    // the function below belongs to the Edit button
    const edit = (id) =>{
        let showData_payLoad = JSON.parse(localStorage.getItem("payLoad"));
      
        let newdata = data[id];
        let title = document.getElementById("title");
        let description = document.getElementById("description");
        addBtn();
        title.value = newdata.title;
        description.value = newdata.description;
        document.getElementById("submit").innerHTML = "Update";
        console.log(newdata);
        localStorage.setItem("id", id);
        check = false;
        localStorage.setItem("payLoad", JSON.stringify(newData));
        discardBtn();
    }
    
    // The function below belongs to Done button for status_Action
const Done_btn = () => {
    // alert("working");
}