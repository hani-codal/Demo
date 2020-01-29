//printError

//let counter = 0;
var rw = -1;
var fner = lner = pher = ger = ber = her = ener = emailer = true; //work as a flag for an error 
let itemArray = JSON.parse(localStorage.getItem("items")) || []; //main array
var gender;

//variables for local storage 

let cell1_1, cell2_2, cell3_3, cell4_4, cell5_5, cell6_6, cell7_7, cell8_8, cell9_9;


//function for error print

function printError(eid, hintmsg) {
    document.getElementById(eid).innerHTML = hintmsg;
}

//function for firstname

function checkFname() {
    var fn = document.getElementById("fn").value;
    if (fn == "") {
        document.getElementById("fner").hidden = false;
        printError("fner", "Please enter your name");
    } else {
        var fnr = /^[a-zA-Z0-9]+$/;
        if (fn.match(fnr)) {
            cell1_1 = fn;
            fner = false;
            document.getElementById("fner").hidden = true;
            }
        else {
            //fner = true;
            document.getElementById("fner").hidden = false;
            printError("fner", "*invalid name");
        }
    }
}

//function for last name

function checkLname() {
    var ln = document.getElementById("lname").value;
    if (ln == "") {
        document.getElementById("lner").hidden = false;
        printError("lner", "*Please enter your last name");
    }
    else {
        var lnr = /^[A-Za-z0-9]*$/;
        if (ln.match(lnr)) {
            cell2_2 = ln;
            lner = false;
            document.getElementById("lner").hidden = true;
            }
        else {
            document.getElementById("lner").hidden = false;
            printError("lner", " *invalid");
        }
    }
}

//function for phone number

function checkPhoneNO() {
    var ph = document.getElementById("pn").value;
    if (ph == "") {
        document.getElementById("pher").hidden = false;
        printError("pher", "*Please enter your phn number");
    }
    else {
        var phr = /^\d{10}$/;
        if (ph.match(phr)) {
            cell3_3 = Number(ph);
            pher = false;
            document.getElementById("pher").hidden = true;
            }
        else {
            document.getElementById("pher").hidden = false;
            printError("pher", " *enter valid number");
        }
    }
}

//function for gender

function checkGender() {    
    var g = document.getElementsByName("gen"); 
    //for (i = 0; i < g.length; i++) {
     g.forEach(function (item){  
    if (item.checked) {
            gender = item.value;
           // gender = item;
            console.log("gender",gender);
            cell4_4 = item.value;
           // cell4_4 = item; 
           ger = false;
            document.getElementById("ger").hidden = true;
        }
    });  
}

//function for branch
var branch_select;
function checkBranch(){
    var b = document.querySelector('#br');
    var b_select = b.options[b.selectedIndex].text;
    if (b_select == "Please select") {
        ber = true;
        branch_select = "";
         
        document.getElementById("ber").hidden = false;
        printError("ber", "* Please choose your field");       
    }
    else {
        cell5_5 = b_select;
        branch_select = b_select;
        ber = false;
    }
    if(ber == false){
        document.getElementById("ber").hidden = true;
    }
}

//function for checkhobby

var  h = document.getElementsByName("hb");
var allHb = document.getElementsByName("hball");
function checkHobby(){
     
    var allHbArray = new Array();
    h.forEach((item,i)=>{  
    if(item.checked == false){
            allHb[0].checked = false;
         }

    if (item.checked == true) {
        allHbArray[i] = item.value;
        }
    });
    if(h[0].checked == true && h[1].checked == true && h[2].checked == true && h[3].checked == true) {
        allHb[0].checked = true;
    }
    if (allHbArray == "") {
        document.getElementById("her").hidden = false;
        printError("her", "*Please select one or multiple");
    }
    else {
        cell6_6 = allHbArray;
        her = false;
        document.getElementById("her").hidden = true;
    }
}

//function for select all hobbies 

function myAllHobbies(){
    var allHb = document.getElementsByName("hball");
    if(allHb[0].checked){
        h.forEach(item=>{
             item.checked = true;
            });
}
    else{
        h.forEach(item=>{
            item.checked = false;
        });
    }
}


//function for enrollment number

function checkEnroll() {
    var e = document.getElementById("en").value;
    console.log("eeee",e);
    if (e == "") {
        document.getElementById("ener").hidden = false;
        printError("ener", "*Please enter enroll number");
    }
    else {
        var enroll = /^\d{12}$/;
        if (e.match(enroll)) {
            cell7_7 = e;
            ener = false;
            document.getElementById("ener").hidden = true;
        }
        else {
            document.getElementById("ener").hidden = false;
            printError("ener", "*enter valid number");
        }
    }
}

//function for mail
var mailDisable;
function checkEmali(){
    var mail = document.getElementById("email").value;
    if(mail == ""){
        document.getElementById("emailer").hidden = false;
        printError("emailer","please enter your mail id...");
        }
        else{
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
                cell8_8 = mail;
                mailDisable = mail;
                emailer = false;
                document.getElementById("emailer").hidden = true;
            }
            else{
                document.getElementById("emailer").hidden = false;
                printError("emailer", "*enter valid mail id");
            }
        }
}

//function for get certificate

function getCertificate(){
    var certificate = document.getElementById("crt").value;
    cell9_9 = certificate;

} 

//function for errors on load event

function errorLoad(){
    printError("ger", " *select your gender");
    printError("ber", "* Please choose your field");
    printError("her", "*Please select one or multiple");
    
}

//function for update errors disable

function disableUpdateErrors(){
    console.log("error called")
    document.getElementById("fner").hidden = true;
    document.getElementById("lner").hidden = true;
    document.getElementById("pher").hidden = true;
    document.getElementById("ger").hidden = true;
    document.getElementById("ber").hidden = true;
    document.getElementById("her").hidden = true;
    document.getElementById("emailer").hidden = true;
}

//function for   update 

function myUpdate(){
    checkFname();
    checkLname();
    checkPhoneNO();
    checkGender();
    checkHobby();
    checkBranch();
    checkEnroll();
    checkEmali();
    getCertificate();
    document.getElementById("myButton").hidden = false;
    document.getElementById("myupdate").hidden = true;
}

//records insert into localstore

function localstore() {
    let items = { "firstName": cell1_1, "lastName": cell2_2, "phnNo": cell3_3, "gender": cell4_4, "branch": cell5_5, "hobbies": cell6_6, "enroll": cell7_7, "email" : cell8_8 ,"certificate": cell9_9 };
    itemArray.push(items);
    localStorage.setItem(`items`, JSON.stringify(itemArray));
}

//to store edited data in local storage

function localstore1() {
    let items = { "firstName": cell1_1, "lastName": cell2_2, "phnNo": cell3_3, "gender": cell4_4, "branch": cell5_5, "hobbies": cell6_6, "enroll": cell7_7, "email" : cell8_8, "certificate": cell9_9 };
    itemArray.splice((rw), 1, items);
    localStorage.setItem(`items`, JSON.stringify(itemArray));
    alert(`row ${rw + 1} is updated`);
}

//for table data
var table = document.getElementById("mytable");
function tableFunction() {
    clearTable();
    var data = JSON.parse(localStorage.getItem('items'));    
    var cell = [] ;
        data.forEach((data,i)=>{
        var row = table.insertRow(i + 1);
        cell[0] = row.insertCell(0);
        cell[0].innerHTML = (i + 1);
        cell[1] = row.insertCell(1);
        cell[1].innerHTML = data.firstName;
        cell[2] = row.insertCell(2);
        cell[2].innerHTML = data.lastName;
        cell[3] = row.insertCell(3);
        cell[3].innerHTML = data.phnNo;
        cell[4] = row.insertCell(4);
        cell[4].innerHTML = data.gender;
        cell[5] = row.insertCell(5);
        cell[5].innerHTML = data.branch;
        cell[6] = row.insertCell(6);
        cell[6].innerHTML = data.hobbies;
        cell[7] = row.insertCell(7);
        cell[7].innerHTML = data.enroll;
        cell[8] = row.insertCell(8);
        cell[8].innerHTML = data.email;
        cell[9] = row.insertCell(9);
        cell[9].innerHTML = data.certificate;
        cell[10] = row.insertCell(10);
        cell[10].innerHTML = "<td><button style='background-color :red' onclick = 'mydelete(this) '>delete</button></td>";
        cell[11] = row.insertCell(11);
        cell[11].innerHTML = "<td><button style='background-color :green' onclick =' myedit(this)' >edit</button></td>";
        });
        

        
}

function addRowColor(){
    var row =table.rows.length-1;
    table.rows[row].style.backgroundColor = "#87bdd8"; 
   setTimeout(function (){ 
      table.rows[row].style.backgroundColor = "white"; 
       },4000);

}
function editRowColor(){
    table.rows[rw+1].style.backgroundColor = "#87bdd8"; 
   setTimeout(function (){ 
      table.rows[rw+1].style.backgroundColor = "white"; 
       },4000);

}

//for last row

// function table_fun1() {
//     var data = JSON.parse(localStorage.getItem('items'));
//     var table = document.getElementById("mytable1");
//     var cell = [];
//     var v = data.length - 1;
//     var row = table.insertRow(1);
//     cell[0] = row.insertCell(0);
//     cell[0].innerHTML = data[v].firstName;
//     cell[1] = row.insertCell(1);
//     cell[1].innerHTML = data[v].lastName;
//     cell[2] = row.insertCell(2);
//     cell[2].innerHTML = data[v].phnNo;
//     cell[3] = row.insertCell(3);
//     cell[3].innerHTML = data[v].gender;
//     cell[4] = row.insertCell(4);
//     cell[4].innerHTML = data[v].branch;
//     cell[5] = row.insertCell(5);
//     cell[5].innerHTML = data[v].hobbies;
//     cell[6] = row.insertCell(6);
//     cell[6].innerHTML = data[v].enroll;
//     cell[7] = row.insertCell(7);
//     cell[7].innerHTML = data[v].email;
//     cell[8] = row.insertCell(8);
//     cell[8].innerHTML = data[v].certificate;
// }

//delete function

function mydelete(button) {
    var row = button.parentNode.parentNode;
    if (confirm("are you sure?")) {
        var table = document.getElementById("mytable");
        selectedItems = row.rowIndex - 1;
        table.deleteRow(row.rowIndex);
        itemArray.splice(selectedItems, 1);
        localStorage.setItem("items", JSON.stringify(itemArray));
        for (var i = table.rows.length - 1; i > 0; i--) {
            table.deleteRow(i);
        }
        tableFunction();
        alert("client deleted ...");
    }
}

//edit function

function myedit(button) {
    disableUpdateErrors();
    document.getElementById("myButton").hidden = true;
    document.getElementById("myupdate").hidden = false;
    var row = button.parentNode.parentNode;
    if (confirm("are you sure ?")) {
        i = row.rowIndex - 1;
        rw = row.rowIndex - 1;
        document.getElementById("fn").setAttribute('value', itemArray[i].firstName);
        document.getElementById("lname").setAttribute('value', itemArray[i].lastName);
        document.getElementById("pn").setAttribute('value', itemArray[i].phnNo);
        document.getElementById("en").setAttribute('value', itemArray[i].enroll);
        document.getElementById("email").setAttribute('value',itemArray[i].email);
        document.getElementById("crt").setAttribute('title', itemArray[i].certificate);
        var radioValue = document.getElementsByName("gen");

        //radio using switch 

        var radioGen = itemArray[i].gender;
        switch (radioGen) {
            case 'male': radioValue = document.getElementById("m");
                radioValue.checked = true;
                break;
            case 'female': radioValue = document.getElementById("f");
                radioValue.checked = true;
                break;
            case 'other': radioValue = document.getElementById("o");
                radioValue.checked = true;
        }        

        //dropdown using switch

        var dropdownValue = document.getElementById("br");
        var dropdownBranch = itemArray[i].branch;
        switch (dropdownBranch) {
            case 'Computer': dropdownValue = document.getElementById("ce");
                dropdownValue.selected = true;
                break;
            case 'Information tech.': dropdownValue = document.getElementById("it");
                dropdownValue.selected = true;
                break;
            case 'Mechanical': dropdownValue = document.getElementById("me");
                dropdownValue.selected = true;
                break;
            case 'Electrical': dropdownValue = document.getElementById("el");
                dropdownValue.selected = true;
                break;
        }        

        //check box using switch
        
        var checkboxArray = itemArray[i].hobbies;
        var countChecked =0;
        var checkboxValue = document.getElementsByName("hb");
        for (var i = 0; i < 4; i++) {
        switch (checkboxArray[i]) {
                case 'Dancing': checkboxValue = document.getElementById("hbd");
                    checkboxValue.checked = true;
                    countChecked ++;
                    break;
                case 'Painting': checkboxValue = document.getElementById("hbp");
                    checkboxValue.checked = true;
                    countChecked ++;
                    break;
                case 'Cooking': checkboxValue = document.getElementById("hbc");
                    checkboxValue.checked = true;
                    countChecked++;
                    break;
                case 'Gaming': checkboxValue = document.getElementById("hbg");
                    checkboxValue.checked = true;
                    countChecked++;
                    break;
                
                                   
            }

        }
       if(countChecked == 4){  
       document.getElementById("hball").checked = true;
        }
        scrollUp();
    } else {
        alert("not edited");
    }
}

//for clear form

function clearForm() {
    document.getElementById("form1").reset();
    document.getElementById("fn").setAttribute('value', "");
    document.getElementById("lname").setAttribute('value', "");
    document.getElementById("pn").setAttribute('value', "");
    document.getElementById("email").setAttribute('value',"");
    var g = document.getElementsByName("gen"); 
    g.forEach(function(item){  
    gender="";
            item.checked = false;            
            //document.getElementById("ger").hidden = false;        
    });  
    checkBranch();
    h.forEach(item=> {
        item.checked == false;
           allHb[0].checked = false;
        });
        checkHobby();
    document.getElementById("en").setAttribute('value', "");
    document.getElementById("crt").setAttribute('title',"");
    document.getElementById("ber").hidden = true;
    document.getElementById("her").hidden = true;

    stopTypeing();
}

//for disable enable

function stopTypeing() {
    var fn = document.getElementById("fn").value;
    var ln = document.getElementById("lname").value;
    var ph = document.getElementById("pn").value;
    var e = document.getElementById("en").value;
    if (fn.length > 0 && ln.length > 0 && ph.length == 10 && e.length == 12  
 && gender.length >0 && branch_select.length >0 && mailDisable.length >0 &&(ger == false) && (ber == false) && (her == false)) {
        document.getElementById("myButton").disabled = false;
    }
    else {
        document.getElementById("myButton").disabled = true;
    }
}
//scroll up
function scrollUp(){
    window.scrollTo(0,0);
}

//scroll down
 function scrollDown(){
     window.scrollTo(0,6000000000000);
 }

//clear table

var table;
function clearTable() {
    table = document.getElementById("mytable");
    for (var i = table.rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }
}

//for clear search body text

function mySearchRefresh() {
    table = document.getElementById("mytable2");
    for (var i = table.rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }
}

//function for all search 

function myAllSearch() {
    var searchItem = document.getElementById("search1").value.toLowerCase();
    var cell = [];
    table = document.getElementById("mytable2");
    var count = 1;
    if (searchItem == "") {
        mySearchRefresh();
    } else {
           
       itemArray.forEach((itemArray)=> {
            if (((itemArray.firstName.toLowerCase()).startsWith(searchItem))  || ((itemArray.lastName.toLowerCase()).startsWith(searchItem)) 
            || (((itemArray.phnNo).toString()).startsWith(searchItem)) || ((itemArray.enroll.toString()).startsWith(searchItem))
             || ((itemArray.gender.toLowerCase()).startsWith(searchItem)) || ((itemArray.branch.toLowerCase()).startsWith(searchItem)) 
             || (((itemArray.hobbies).toString().toLowerCase()).includes(searchItem)) || (itemArray.email.toLowerCase()).startsWith(searchItem)) {
                var row = table.insertRow(count);
                cell[0] = row.insertCell(0);
                cell[0].innerHTML = count++;
                cell[1] = row.insertCell(1);
                cell[1].innerHTML = itemArray.firstName;
                cell[2] = row.insertCell(2);
                cell[2].innerHTML = itemArray.lastName;
                cell[3] = row.insertCell(3);
                cell[3].innerHTML = itemArray.phnNo;
                cell[4] = row.insertCell(4);
                cell[4].innerHTML = itemArray.gender;
                cell[5] = row.insertCell(5);
                cell[5].innerHTML = itemArray.branch;
                cell[6] = row.insertCell(6);
                cell[6].innerHTML = itemArray.hobbies;
                cell[7] = row.insertCell(7);
                cell[7].innerHTML = itemArray.enroll;
                cell[8] = row.insertCell(8);
                cell[8].innerHTML = itemArray.email;
                cell[9] = row.insertCell(9);
                cell[9].innerHTML = itemArray.certificate;
                }
        });
        if (count == 1) {
            alert("not data found");
           // document.getElementById("search1").setAttribute('value', "");
        }
    }
}

//search for specific field

function mySearch() {
    var j;
    var searchHobby = "";
    mySearchRefresh();
    var searchFn1 = document.getElementById('searchFn').value.toLowerCase();
    var searchLn1 = document.getElementById('searchLn').value.toLowerCase();
    var searchHb1 = document.getElementsByName('searchHb');
  //  var searchGen1 = document.getElementsByName('search_gen');
    //var searchGen1Check ;
    for (var k = 0; k < searchHb1.length; k++) {
        if (searchHb1[k].checked) {
            searchHobby += searchHb1[k].value + ",";
        }
    }
    // for(var k =0;k<searchGen1.length;k++){
    //     if(searchGen1[k].checked){
    //         searchGen1Check = searchGen1[k].value;          
    //     }
    // }
    var cell = [];
    var count = 1;
    table = document.getElementById("mytable2");
   

    if (searchFn1 == "" && searchLn1 == ""  && (searchHobby.length == 0)) {
        alert("enter searching string");
    }

    else {
         itemArray.forEach(itemArray => {
            var str_searchbox = "";
            for (var k = 0; k < itemArray.hobbies.length; k++) {
                str_searchbox += itemArray.hobbies[k] + ",";
            }

            if (((itemArray.firstName.toLowerCase()) == (searchFn1) && searchLn1 == "" && searchHobby == "" )
                || ((itemArray.lastName.toLowerCase()) == (searchLn1) && searchFn1 == "" && searchHobby == "" )
                || ((str_searchbox.includes(searchHobby) && searchLn1 == "" && searchFn1 == "" ))
                
                || ((searchLn1 == "")  &&((itemArray.firstName.toLowerCase()) == (searchFn1)) && (str_searchbox.includes(searchHobby)))
                || ((searchFn1 == "")  && ((itemArray.lastName.toLowerCase()) == (searchLn1)) && (str_searchbox.includes(searchHobby)))
                || ((searchHobby == "") && ((itemArray.lastName.toLowerCase()) == (searchLn1)) && ((itemArray.firstName.toLowerCase()) == (searchFn1)))
                ||(((itemArray.lastName.toLowerCase()) == (searchLn1)) && ((itemArray.firstName.toLowerCase()) == (searchFn1)) && (str_searchbox.includes(searchHobby)))
            ) {
                    var row = table.insertRow(count);
                    cell[0] = row.insertCell(0);
                    cell[0].innerHTML = count++;
                    cell[1] = row.insertCell(1);
                    cell[1].innerHTML = itemArray.firstName;
                    cell[2] = row.insertCell(2);
                    cell[2].innerHTML = itemArray.lastName;
                    cell[3] = row.insertCell(3);
                    cell[3].innerHTML = itemArray.phnNo;
                    cell[4] = row.insertCell(4);
                    cell[4].innerHTML = itemArray.gender;
                    cell[5] = row.insertCell(5);
                    cell[5].innerHTML = itemArray.branch;
                    cell[6] = row.insertCell(6);
                    cell[6].innerHTML = itemArray.hobbies;
                    cell[7] = row.insertCell(7);
                    cell[7].innerHTML = itemArray.enroll;
                    cell[8] = row.insertCell(8);
                    cell[8].innerHTML = itemArray.email;
                    cell[9] = row.insertCell(9);
                    cell[9].innerHTML = itemArray.certificate;
                
            }
        });
    }
    }

//for firstname sort

var flag = 0;
function fnameSort() {
    clearTable();
    table = document.getElementById("mytable");
    cell = [];
    var temp;
    var count = 1;    

//for ascending sort 

    if(flag == 0){
    for (var i = 0; i < itemArray.length; i++) {        
        for(var k=i+1;k<itemArray.length;k++){
            if (itemArray[i].firstName.toLowerCase() > itemArray[k].firstName.toLowerCase()) {        
            temp = itemArray[i];
            itemArray[i] = itemArray[k];
            itemArray[k] = temp;            
        }
    }
        var row = table.insertRow(count);
        var cell =[];
        cell[0] = row.insertCell(0);
        cell[0].innerHTML = count++;
        cell[1] = row.insertCell(1);
        cell[1].innerHTML = itemArray[i].firstName;
        cell[2] = row.insertCell(2);
        cell[2].innerHTML = itemArray[i].lastName;
        cell[3] = row.insertCell(3);
        cell[3].innerHTML = itemArray[i].phnNo;
        cell[4] = row.insertCell(4);
        cell[4].innerHTML = itemArray[i].gender;
        cell[5] = row.insertCell(5);
        cell[5].innerHTML = itemArray[i].branch;
        cell[6] = row.insertCell(6);
        cell[6].innerHTML = itemArray[i].hobbies;
        cell[7] = row.insertCell(7);
        cell[7].innerHTML = itemArray[i].enroll;
        cell[8] = row.insertCell(8);
        cell[8].innerHTML = itemArray[i].email;
        cell[9] = row.insertCell(9);
        cell[9].innerHTML = itemArray[i].certificate;
    }
    flag = 1;   
    }

    //for descending

    else{
        for (var i = 0; i < itemArray.length; i++) {        
            for(var k=i+1 ;k<itemArray.length ;k++){            
                if (itemArray[i].firstName.toLowerCase() < itemArray[k].firstName.toLowerCase()) {            
                temp = itemArray[i];
                itemArray[i] = itemArray[k];
                itemArray[k] = temp;                
            }
        }
        var row = table.insertRow(count);
        var cell =[];
        cell[0] = row.insertCell(0);
        cell[0].innerHTML = count++;
        cell[1] = row.insertCell(1);
        cell[1].innerHTML = itemArray[i].firstName;
        cell[2] = row.insertCell(2);
        cell[2].innerHTML = itemArray[i].lastName;
        cell[3] = row.insertCell(3);
        cell[3].innerHTML = itemArray[i].phnNo;
        cell[4] = row.insertCell(4);
        cell[4].innerHTML = itemArray[i].gender;
        cell[5] = row.insertCell(5);
        cell[5].innerHTML = itemArray[i].branch;
        cell[6] = row.insertCell(6);
        cell[6].innerHTML = itemArray[i].hobbies;
        cell[7] = row.insertCell(7);
        cell[7].innerHTML = itemArray[i].enroll;
        cell[8] = row.insertCell(8);
        cell[8].innerHTML = itemArray[i].email;
        cell[9] = row.insertCell(9);
        cell[9].innerHTML = itemArray[i].certificate;
        }
      flag = 0;
      }
}
    
//function for last name sort 
    
    function lnameSort() {
        clearTable();
        table = document.getElementById("mytable");
        cell = [];
        var temp;
        var count = 1;

        //for ascending 

        if(flag == 0){
        for (var i = 0; i < itemArray.length; i++) {
            for(var k=i+1;k<itemArray.length;k++){
                if (itemArray[i].lastName.toLowerCase() > itemArray[k].lastName.toLowerCase()) {
                temp = itemArray[i];
                itemArray[i] = itemArray[k];
                itemArray[k] = temp;
                console.log("temp of true",temp);
            }
        }
            var row = table.insertRow(count);
            var cell =[];
            cell[0] = row.insertCell(0);
            cell[0].innerHTML = count++;
            cell[1] = row.insertCell(1);
            cell[1].innerHTML = itemArray[i].firstName;
            cell[2] = row.insertCell(2);
            cell[2].innerHTML = itemArray[i].lastName;
            cell[3] = row.insertCell(3);
            cell[3].innerHTML = itemArray[i].phnNo;
            cell[4] = row.insertCell(4);
            cell[4].innerHTML = itemArray[i].gender;
            cell[5] = row.insertCell(5);
            cell[5].innerHTML = itemArray[i].branch;
            cell[6] = row.insertCell(6);
            cell[6].innerHTML = itemArray[i].hobbies;
            cell[7] = row.insertCell(7);
            cell[7].innerHTML = itemArray[i].enroll;
            cell[8] = row.insertCell(8);
            cell[8].innerHTML = itemArray[i].email;
            cell[9] = row.insertCell(9);
            cell[9].innerHTML = itemArray[i].certificate;
        }
        flag = 1;   
        }
    
        //for descending order
    
        else{    
            for (var i = 0; i < itemArray.length; i++) {            
                for(var k=i+1 ;k<itemArray.length ;k++){                
                    if (itemArray[i].lastName.toLowerCase() < itemArray[k].lastName.toLowerCase()) {                
                    temp = itemArray[i];
                    itemArray[i] = itemArray[k];
                    itemArray[k] = temp;                    
                }
            }            
            var row = table.insertRow(count);
            var cell =[];
            cell[0] = row.insertCell(0);
            cell[0].innerHTML = count++;
            cell[1] = row.insertCell(1);
            cell[1].innerHTML = itemArray[i].firstName;
            cell[2] = row.insertCell(2);
            cell[2].innerHTML = itemArray[i].lastName;
            cell[3] = row.insertCell(3);
            cell[3].innerHTML = itemArray[i].phnNo;
            cell[4] = row.insertCell(4);
            cell[4].innerHTML = itemArray[i].gender;
            cell[5] = row.insertCell(5);
            cell[5].innerHTML = itemArray[i].branch;
            cell[6] = row.insertCell(6);
            cell[6].innerHTML = itemArray[i].hobbies;
            cell[7] = row.insertCell(7);
            cell[7].innerHTML = itemArray[i].enroll;
            cell[8] = row.insertCell(8);
            cell[8].innerHTML = itemArray[i].email;
            cell[9] = row.insertCell(9);
            cell[9].innerHTML = itemArray[i].certificate;
            }
          flag = 0;
        }  
        }

// function for gender sorting

function genderSort() {
    clearTable();
    table = document.getElementById("mytable");
    cell = [];
    var temp;
    var count = 1;

    //for ascending 

    if(flag == 0){
    for (var i = 0; i < itemArray.length; i++) {
        for(var k=i+1;k<itemArray.length;k++){
            if (itemArray[i].gender > itemArray[k].gender) {
            temp = itemArray[i];
            itemArray[i] = itemArray[k];
            itemArray[k] = temp;
            console.log("temp of true",temp);
        }
    }
        var row = table.insertRow(count);
        var cell =[];
        cell[0] = row.insertCell(0);
        cell[0].innerHTML = count++;
        cell[1] = row.insertCell(1);
        cell[1].innerHTML = itemArray[i].firstName;
        cell[2] = row.insertCell(2);
        cell[2].innerHTML = itemArray[i].lastName;
        cell[3] = row.insertCell(3);
        cell[3].innerHTML = itemArray[i].phnNo;
        cell[4] = row.insertCell(4);
        cell[4].innerHTML = itemArray[i].gender;
        cell[5] = row.insertCell(5);
        cell[5].innerHTML = itemArray[i].branch;
        cell[6] = row.insertCell(6);
        cell[6].innerHTML = itemArray[i].hobbies;
        cell[7] = row.insertCell(7);
        cell[7].innerHTML = itemArray[i].enroll;
        cell[8] = row.insertCell(8);
        cell[8].innerHTML = itemArray[i].email;
        cell[9] = row.insertCell(9);
        cell[9].innerHTML = itemArray[i].certificate;
    }
    flag = 1;   
    }

    //for descending order

    else{    
        for (var i = 0; i < itemArray.length; i++) {            
            for(var k=i+1 ;k<itemArray.length ;k++){                
                if (itemArray[i].gender < itemArray[k].gender) {                
                temp = itemArray[i];
                itemArray[i] = itemArray[k];
                itemArray[k] = temp;                    
            }
        }            
        var row = table.insertRow(count);
        var cell =[];
        cell[0] = row.insertCell(0);
        cell[0].innerHTML = count++;
        cell[1] = row.insertCell(1);
        cell[1].innerHTML = itemArray[i].firstName;
        cell[2] = row.insertCell(2);
        cell[2].innerHTML = itemArray[i].lastName;
        cell[3] = row.insertCell(3);
        cell[3].innerHTML = itemArray[i].phnNo;
        cell[4] = row.insertCell(4);
        cell[4].innerHTML = itemArray[i].gender;
        cell[5] = row.insertCell(5);
        cell[5].innerHTML = itemArray[i].branch;
        cell[6] = row.insertCell(6);
        cell[6].innerHTML = itemArray[i].hobbies;
        cell[7] = row.insertCell(7);
        cell[7].innerHTML = itemArray[i].enroll;
        cell[8] = row.insertCell(8);
        cell[8].innerHTML = itemArray[i].email;
        cell[9] = row.insertCell(9);
        cell[9].innerHTML = itemArray[i].certificate;
        }
      flag = 0;
    }  
    }