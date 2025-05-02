import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent  implements OnInit{
  profile!: FormGroup;
  formOpen:boolean=false
  url: boolean=false
  event:boolean=false
file: any;

sampleuserData:any


  constructor(private fb:FormBuilder){
    this.profile = this.fb.group({
      username:[''],
      job:[''],
      dob:[''],
      Education:[''],
      contact:[''],
      email:[''],
      emergancy:[''],
      blood_Group:[''],
      Address:[''],
      City:[''],
      State:[''],
      Country:[''],
      Pincode:[''],
      Hobbies:['']



    })
  }
  ngOnInit(): void {
    this.sampleuserData={
      "username":"Ranjith Behara",
      "job":"Engineering Manager",
      "dob":"10/24/1989",
      "Education":"Master of Technology",
      "contact":"7207298976",
      "email":"ranjith.behara@innovapptive.com",
      "emergancy":"7207298976",
      "blood_Group":"B positive",
      "Address":"kukatpally",
      "City":"Hyderbad",
      "State":"Telangana",
      "Country":"India",
      "Pincode":"500072",
      "Hobbies":"Cooking"

    }
    console.log("this is the corresponding sampleuserData",this.sampleuserData);
    
    if(this.profile.value!=null){
      this.profile.controls['username'].setValue(this.sampleuserData.username)
      this.profile.controls['job'].setValue(this.sampleuserData.job)
      this.profile.controls['dob'].setValue(this.sampleuserData.dob)
      this.profile.controls['Education'].setValue(this.sampleuserData.Education)
      this.profile.controls['contact'].setValue(this.sampleuserData.contact)
      this.profile.controls['email'].setValue(this.sampleuserData.email)
      this.profile.controls['emergancy'].setValue(this.sampleuserData.emergancy)
      this.profile.controls['blood_Group'].setValue(this.sampleuserData.blood_Group)
      this.profile.controls['Address'].setValue(this.sampleuserData.Address)
      this.profile.controls['City'].setValue(this.sampleuserData.City)
      this.profile.controls['State'].setValue(this.sampleuserData.State)
      this.profile.controls['Country'].setValue(this.sampleuserData.Country)
      this.profile.controls['Pincode'].setValue(this.sampleuserData.Pincode)
      this.profile.controls['Hobbies'].setValue(this.sampleuserData.Hobbies)

    }
  }
  formeenable(){
    if(this.formOpen==false){
      this.formOpen=true;
    }else{
      this.formOpen=false
    }
  }
  submiteditedform(){
    this.sampleuserData={
      "username":this.profile.value.username,
      "job":this.profile.value.job,
      "dob":this.profile.value.dob,
      "Education":this.profile.value.Education,
      "contact":this.profile.value.contact,
      "email":this.profile.value.email,
      "emergancy":this.profile.value.emergancy,
      "blood_Group":this.profile.value.blood_Group,
      "Address":this.profile.value.Address,
      "City":this.profile.value.City,
      "State":this.profile.value.State,
      "Country":this.profile.value.Country,
      "Pincode":this.profile.value.Pincode,
      "Hobbies":this.profile.value.Hobbies,
    }
    this.formOpen=false
    this.profile.controls['username'].setValue(this.sampleuserData.username)
      this.profile.controls['job'].setValue(this.sampleuserData.job)
      this.profile.controls['dob'].setValue(this.sampleuserData.dob)
      this.profile.controls['Education'].setValue(this.sampleuserData.Education)
      this.profile.controls['contact'].setValue(this.sampleuserData.contact)
      this.profile.controls['email'].setValue(this.sampleuserData.email)
      this.profile.controls['emergancy'].setValue(this.sampleuserData.emergancy)
      this.profile.controls['blood_Group'].setValue(this.sampleuserData.blood_Group)
      this.profile.controls['Address'].setValue(this.sampleuserData.Address)
      this.profile.controls['City'].setValue(this.sampleuserData.blood_Group)
      this.profile.controls['State'].setValue(this.sampleuserData.State)
      this.profile.controls['Country'].setValue(this.sampleuserData.Country)
      this.profile.controls['Pincode'].setValue(this.sampleuserData.Pincode)
      this.profile.controls['Hobbies'].setValue(this.sampleuserData.Hobbies)
  }
  // onSelectFile(event: { target: { files: Blob[]; }; }) {
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();

  //     reader.readAsDataURL(event.target.files[0]); // read file as data url

  //     reader.onload = (event) => { // called once readAsDataURL is completed
  //       this.url = event.target.result;
  //     }
  //   }
  // }
}


