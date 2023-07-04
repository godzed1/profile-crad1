import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App(){
  return(
    <>
      <div className='card'>
        <Avatar />
        <div className='data'>
          <Intro />
          <SkillList />
    
        </div>
      </div>
    </>
  );
}

function SkillList(){
  return(
    <div className='skill-list'>
      <Skill skill='3D Modeling' emoji='😎' color='orange' />
      <Skill skill='Html' emoji='👶🏻' color='violet' />
      <Skill skill='Css' emoji='👶🏻' color='red' />
      <Skill skill='Python' emoji='🤡' color='lightgreen' />

    </div>

  );
}

function Skill(props){
  return(
    <div className='skill' style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>

    </div>

  );
}

function Intro(){
  return(
    <div>
      <h1>นายพงศ์ปณต แสงกล้า</h1>
      <p>
        นักศึกษาสาขาเทคโนโลยีสารสนเทศและการสื่อสาร คณะวิทยาศาสตร์ 
        มหาวิทยาลัยอุบลราชธานี สนใจในการสร้างโมเดลสามมิติ และชื่นชอบเกี่ยวกับยานยนต์
      </p>

    </div>

  );
}

function Avatar() {
  return <img className='avatar' src={require('./Buddy-Christ.jpg')} alt='My Avatar'></img>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);