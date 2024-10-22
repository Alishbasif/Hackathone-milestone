//store HTML document in typescript
const form = document.getElementById('resume-form')as HTMLFormElement;
const ResumeDisplayelement= document.getElementById('resume-display') as HTMLDivElement;

form.addEventListener('submit',(event:Event) => {
    event.preventDefault(); // prevent page reload
    //collect all input values
    const name =(document.getElementById('name') as HTMLInputElement).value
    const email =(document.getElementById('email') as HTMLInputElement).value
    const phone =(document.getElementById('phone') as HTMLInputElement).value
    const education =(document.getElementById('education') as HTMLTextAreaElement).value
    const experience =(document.getElementById('experience') as HTMLTextAreaElement).value
    const skills =(document.getElementById('skills') as HTMLTextAreaElement).value
//generate resume content dynamically
const resumeHTML= `
<h2><b>Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b>${name}</p>
<p><b>Email:</b>${email}</p>
<p><b>Phone:</b>${phone}</p>

<h3>Education</h3>
<p>${education}</p>

<h3>Experience</h3>
<p>${experience}</p>

<h3>Skills</h3>
<p>${skills}</p>
`;

//display the generated resume
if(ResumeDisplayelement){
  ResumeDisplayelement.innerHTML = resumeHTML;
}else{
    console.error('The resume display element is missing.');
}
})