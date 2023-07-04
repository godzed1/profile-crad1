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
      <Skill skill='photo editing' emoji='👶🏻' color='blue' />
      <Skill skill='Html' emoji='👶🏻' color='violet' />
      <Skill skill='Css' emoji='👶🏻' color='pink' />
      <Skill skill='Python' emoji='👶🏻' color='red' />

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
      <h1>นายเจษฎา ขุลี</h1>
      <p>
        นักศึกษาสาขาเทคโนโลยีสารสนเทศและการสื่อสาร คณะวิทยาศาสตร์ 
        มหาวิทยาลัยอุบลราชธานี สนใจในการตัดต่อรูปภาพ
      </p>

    </div>

  );
}

function Avatar() {
  return <img className='avatar' src={require('./boss.jpg')} alt='My Avatar'></img>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
