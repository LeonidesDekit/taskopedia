import React from "react";
import Student from "./Components/Student/Student";
import StudentReview from "./Components/Student/StudentReview";
class MainBody extends React.Component(){
    render(){
    const totalLecture = 3;
    return(
      <div style={{minHeight:"70vh"}}>
        <p>In this course,we learn react js by building Taskopedia!
          <br/>
          Total Lecture - {totalLecture}
        </p>
        <ul>
          <li>Call ben</li>
          <li>Go to walmart</li>
        </ul>
        <div className='container row'>Students Enrolled</div>
        <Student experience={3} name='John Cena' headshot='https://api.lorem.space/image/face?w=150&h=150'>
            <StudentReview/>
        </Student>
        <Student experience={7} name='Triple H' headshot='https://api.lorem.space/image/face?w=150&h=151'/>
        <Student experience={2} name='Shawn Michael' headshot='https://api.lorem.space/image/face?w=150&h=152'>
            <StudentReview/>
        </Student>
        <Student experience={1} name='The Hulk' headshot='https://api.lorem.space/image/face?w=150&h=153'/>
      </div>
    )}
 }

 export default MainBody;