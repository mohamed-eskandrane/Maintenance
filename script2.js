const base = `https://docs.google.com/spreadsheets/d/1EVkSj2EHtF9Rej8cFV0B3wPMY4G67Nb71eK6IGsFI3k/gviz/tq?`;
let UrlSection = base + "&sheet=Section&tq=" + encodeURIComponent('Select *');
let DataSection = [];
let UrlFloor = base + "&sheet=Floor&tq=" + encodeURIComponent('Select *');
let DataFloor = [];
let UrlClass = base + "&sheet=Class&tq=" + encodeURIComponent('Select *');
let DataClass = [];
let UrlProblem = base + "&sheet=Problem&tq=" + encodeURIComponent('Select *');
let DataProblem = [];
let UrlTechnique_Problem = base + "&sheet=Technique_Problem&tq=" + encodeURIComponent('Select *');
let DataTechnique_Problem = [];
let UrlGeneral = base + "&sheet=General&tq=" + encodeURIComponent('Select *');
let DataGeneral = [];

document.addEventListener('DOMContentLoaded', init)
function init() {
  if (typeof(Storage) !== "undefined") {
    ConvertMode();
    }
    let Loading=document.getElementById("LoadingFormBrowser");
    let FormLoad=document.getElementById("FormLoad");
    Loading.className="fa fa-refresh fa-spin";
    LoadSection();
    Loadfloor();
    LoadClass();
    LoadProblem();
    let Ti =new Date().getTime().valueOf();
    let Ti1 =new Date().getTimezoneOffset().valueOf();
    let Ti2 =Ti1*60*1000 * -1 + Ti
    document.getElementById("CodeR").value =Ti;
    document.getElementById("DateR").valueAsDate =new Date(Ti2);
    const myTimeout = setTimeout(function(){ 
      FormLoad.style.display="none";
      Loading.className="fa fa-refresh";
    clearTimeout(myTimeout);
    }, 2500);
}


// **********************Loading*****************
function LoadSection(){
  DataSection=[];
  fetch(UrlSection)
  .then(res => res.text())
  .then(rep => {
      const jsonSection = JSON.parse(rep.substring(47).slice(0, -2));
      const colzSection = [];
      jsonSection.table.cols.forEach((headingSection) => {
          if (headingSection.label) {
              let columnSection = headingSection.label;
              colzSection.push(columnSection);
          }
      })
      jsonSection.table.rows.forEach((rowData) => {
          const rowSection = {};
          colzSection.forEach((ele, ind) => {
              rowSection[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
          })
          DataSection.push(rowSection);
      })
      if (isNaN(DataSection[0].Auto_Code)==false){LoadSectionName();}
  })
}

function LoadSectionName(){
  let Section_Name,Auto_Code;
  let optionClass;
  let SectionList =document.getElementById("SectionList");
  SectionList.innerHTML="";
  for (let index = 0; index < DataSection.length; index++) {
    Auto_Code=DataSection[index].Auto_Code;
    Section_Name=DataSection[index].Section_Name;
    if(Auto_Code!=""){
      optionClass=document.createElement("option");
      optionClass.value=Section_Name;
      optionClass.textContent=Section_Name;
      SectionList.appendChild(optionClass);
    }
  }
}

function Loadfloor(){
  DataFloor=[];
  fetch(UrlFloor)
  .then(res => res.text())
  .then(rep => {
      const jsonFloor = JSON.parse(rep.substring(47).slice(0, -2));
      const colzFloor = [];
      jsonFloor.table.cols.forEach((headingFloor) => {
          if (headingFloor.label) {
              let columnFloor = headingFloor.label;
              colzFloor.push(columnFloor);
          }
      })
      jsonFloor.table.rows.forEach((rowData1) => {
          const rowFloor = {};
          colzFloor.forEach((ele, ind) => {
              rowFloor[ele] = (rowData1.c[ind] != null) ? rowData1.c[ind].v : '';
          })
          DataFloor.push(rowFloor);
      })
      if (isNaN(DataFloor[0].Auto_Code)==false){LoadFloorName();}
  })
}

function LoadFloorName(){
  let Floor_Name,Auto_Code;
  let optionClass;
  let Floor =document.getElementById("Floor");
  Floor.innerHTML="<option value=''>اختر طابق من القائمة</option>";
  for (let index = 0; index < DataFloor.length; index++) {
    Auto_Code=DataFloor[index].Auto_Code;
    Floor_Name=DataFloor[index].Floor_Name;
    if(Auto_Code!=""){
      optionClass=document.createElement("option");
      optionClass.value=Auto_Code;
      optionClass.textContent=Floor_Name;
      Floor.appendChild(optionClass);
    }
  }
}

function LoadClass(){
  DataClass=[];
  fetch(UrlClass)
  .then(res => res.text())
  .then(rep => {
      const jsonClass = JSON.parse(rep.substring(47).slice(0, -2));
      const colzClass = [];
      jsonClass.table.cols.forEach((headingClass) => {
          if (headingClass.label) {
              let columnClass = headingClass.label;
              colzClass.push(columnClass);
          }
      })
      jsonClass.table.rows.forEach((rowData2) => {
          const rowClass = {};
          colzClass.forEach((ele, ind) => {
              rowClass[ele] = (rowData2.c[ind] != null) ? rowData2.c[ind].v : '';
          })
          DataClass.push(rowClass);
      })
      if (isNaN(DataClass[0].Auto_Code)==false){LoadClassName();}
  })
}

function LoadClassName(){
  let Class_number,Auto_Code;
  let optionClass;
  let Class_NumberList =document.getElementById("Class_NumberList");
  Class_NumberList.innerHTML="";
  for (let index = 0; index < DataClass.length; index++) {
    Auto_Code=DataClass[index].Auto_Code;
    Class_number=DataClass[index].Class_number;
    if(Auto_Code!=""){
      optionClass=document.createElement("option");
      optionClass.value=Class_number;
      optionClass.textContent=Class_number;
      Class_NumberList.appendChild(optionClass);
    }
  }
}

function LoadProblem(){
  DataProblem=[];
  fetch(UrlProblem)
  .then(res => res.text())
  .then(rep => {
      const jsonProblem = JSON.parse(rep.substring(47).slice(0, -2));
      const colzProblem = [];
      jsonProblem.table.cols.forEach((headingProblem) => {
          if (headingProblem.label) {
              let columnProblem = headingProblem.label;
              colzProblem.push(columnProblem);
          }
      })
      jsonProblem.table.rows.forEach((rowData3) => {
          const rowProblem = {};
          colzProblem.forEach((ele, ind) => {
              rowProblem[ele] = (rowData3.c[ind] != null) ? rowData3.c[ind].v : '';
          })
          DataProblem.push(rowProblem);
      })
      if (isNaN(DataProblem[0].Auto_Code)==false){LoadProblemName();}
  })
}

function LoadProblemName(){
  let Problem_Name,Auto_Code;
  let optionClass;
  let problemList =document.getElementById("problem");
  problemList.innerHTML="<option value=''>اختر نوع المشكلة من القائمة</option>";
  for (let index = 0; index < DataProblem.length; index++) {
    Auto_Code=DataProblem[index].Auto_Code;
    Problem_Name=DataProblem[index].Problem_Name;
    if(Auto_Code!=""){
      optionClass=document.createElement("option");
      optionClass.value=Auto_Code;
      optionClass.textContent=Problem_Name;
      problemList.appendChild(optionClass);
    }
  }
}

function LoadTechnique_Problem(){
  DataTechnique_Problem=[];
  fetch(UrlTechnique_Problem)
  .then(res => res.text())
  .then(rep => {
      const jsonTechnique_Problem = JSON.parse(rep.substring(47).slice(0, -2));
      const colzTechnique_Problem = [];
      jsonTechnique_Problem.table.cols.forEach((headingTechnique_Problem) => {
          if (headingTechnique_Problem.label) {
              let columnTechnique_Problem = headingTechnique_Problem.label;
              colzTechnique_Problem.push(columnTechnique_Problem);
          }
      })
      jsonTechnique_Problem.table.rows.forEach((rowData4) => {
          const rowTechnique_Problem = {};
          colzTechnique_Problem.forEach((ele, ind) => {
              rowTechnique_Problem[ele] = (rowData4.c[ind] != null) ? rowData4.c[ind].v : '';
          })
          DataTechnique_Problem.push(rowTechnique_Problem);
      })
      if (isNaN(DataTechnique_Problem[0].Auto_Code)==false){LoadTechnique();}
  })
}

function LoadTechnique(){
  let Technique_Problem,Auto_Code;
  let optionClass;
  let problemList =document.getElementById("Technique_ProblemList");
  problemList.innerHTML="<option value=''>اختر المشكلة من القائمة</option>";
  for (let index = 0; index < DataTechnique_Problem.length; index++) {
    Auto_Code=DataTechnique_Problem[index].Auto_Code;
    Technique_Problem=DataTechnique_Problem[index].Technique_Problem;
    if(Auto_Code!=""){
      optionClass=document.createElement("option");
      optionClass.value=Auto_Code;
      optionClass.textContent=Technique_Problem;
      problemList.appendChild(optionClass);
    }
  }
}

function LoadGeneral(){
  DataGeneral=[];
  fetch(UrlGeneral)
  .then(res => res.text())
  .then(rep => {
      const jsonGeneral = JSON.parse(rep.substring(47).slice(0, -2));
      const colzGeneral = [];
      jsonGeneral.table.cols.forEach((headingGeneral) => {
          if (headingGeneral.label) {
              let columnGeneral = headingGeneral.label;
              colzGeneral.push(columnGeneral);
          }
      })
      jsonGeneral.table.rows.forEach((rowData5) => {
          const rowGeneral = {};
          colzGeneral.forEach((ele, ind) => {
              rowGeneral[ele] = (rowData5.c[ind] != null) ? rowData5.c[ind].v : '';
          })
          DataGeneral.push(rowGeneral);
      })
      if (isNaN(DataGeneral[0].Auto_Code)==false){LoadGeneralD();}
  })
}

function LoadGeneralD(){
  let General,Auto_Code;
  let optionClass;
  let problemList =document.getElementById("Technique_ProblemList");
  problemList.innerHTML="<option value=''>اختر المشكلة من القائمة</option>";
  for (let index = 0; index < DataGeneral.length; index++) {
    Auto_Code=DataGeneral[index].Auto_Code;
    General=DataGeneral[index].General;
    if(Auto_Code!=""){
      optionClass=document.createElement("option");
      optionClass.value=Auto_Code;
      optionClass.textContent=General;
      problemList.appendChild(optionClass);
    }
  }
}

function SelectOneOrTwo(MyValue){
if(MyValue=="1"){
  LoadTechnique_Problem();
}else{
  LoadGeneral();
}
}
// ***********************Mode*********************
function ConvertMode(){
  if (localStorage.getItem("FColor")==1){
    ConvertModeToSun();
  }else{
    ConvertModeToMoon();
  }
}

function ConvertModeToSun(){
  localStorage.setItem("FColor", 1);
  document.getElementById("Moon").style.display="inline-block";
  document.getElementById("Sun").style.display="none";
  document.querySelector(':root').style.setProperty('--FColor', "wheat"); 
  document.querySelector(':root').style.setProperty('--EColor', "white");
  document.querySelector(':root').style.setProperty('--loginColor', "whitesmoke"); 
  document.querySelector(':root').style.setProperty('--FontColor', "#f2a20b"); 
  document.querySelector(':root').style.setProperty('--Font2Color', "#a53333"); 
  document.querySelector(':root').style.setProperty('--Font3Color', "#a53333");
  document.querySelector(':root').style.setProperty('--THColor', "wheat");  
  document.querySelector(':root').style.setProperty('--TDColor', "yellow"); 
} 
function ConvertModeToMoon(){
  localStorage.setItem("FColor", 2);
  document.getElementById("Sun").style.display="inline-block";
  document.getElementById("Moon").style.display="none";
  document.querySelector(':root').style.setProperty('--FColor', "#141e30"); 
  document.querySelector(':root').style.setProperty('--EColor', "#243b55");
  document.querySelector(':root').style.setProperty('--loginColor', "#00000080"); 
  document.querySelector(':root').style.setProperty('--FontColor', "white"); 
  document.querySelector(':root').style.setProperty('--Font2Color', "#d3f6f8"); 
  document.querySelector(':root').style.setProperty('--Font3Color', "black"); 
  document.querySelector(':root').style.setProperty('--THColor', "gray");  
  document.querySelector(':root').style.setProperty('--TDColor', "Red"); 
}  

// ********************purchasesWi


function GetSection_Code(SName){
  let Section1 =document.getElementById("Section1");
  for (let index = 0; index < DataSection.length; index++) {
    if(DataSection[index].Section_Name==SName ){
      Section1.value= DataSection[index].Auto_Code;
      return;
    }
  }
  Section1.value='';
}

function GetClass_Code_Name(CNumber){
  let Class_Number1 =document.getElementById("Class_Number1");
  let Class_Name =document.getElementById("Class_Name");
  for (let index = 0; index < DataClass.length; index++) {
    if(DataClass[index].Class_number==CNumber ){
      Class_Number1.value= DataClass[index].Auto_Code;
      Class_Name.value= DataClass[index].Class_Name;
      return;
    }
  }
  Class_Number1.value= '';
  Class_Name.value= '';
}

function IsSection_True(SName){
  let Section =document.getElementById("Section");
  for (let index = 0; index < DataSection.length; index++) {
    if(DataSection[index].Section_Name==SName ){
      return;
    }
  }
  Section.value='';
}

function IsClass_True(CNumber){
  let Class_Number =document.getElementById("Class_Number");
  for (let index = 0; index < DataClass.length; index++) {
    if(DataClass[index].Class_number==CNumber ){
      return;
    }
  }
  Class_Number.value='';
}
