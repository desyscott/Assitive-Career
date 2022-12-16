import React,{useState,useEffect} from 'react'
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

// const edges = [
//     { id: '1-2', source: '1', target: '2',animated: false },
//     { id: '3-4', source: '3', target: '4',animated: false },
//     { id: '5-6', source: '5', target: '6',animated:false },
//     { id: '5-2', source: '5', target: '2',animated: true },
//     { id: '5-1', source: '1', target: '5',animated: true },
//     { id: '5-3', source: '5', target: '3',animated: true },
//     { id: '5-4', source: '5', target: '4',animated: true },
               
//                ];

function Flow() {
  
const initialElements = [
  {
    id: '1',
  data:{label:"Python"},
    position: { x: 250, y:50 },
    type: 'input',
     style:{color:'white',backgroundColor:'gray',width:'200px',fontSize:'1.4rem'}
  },
  {
    id: '2',
    data: {label:<strong>JavaScript</strong>},
    position: { x:250, y:150 },
    style:{color:'white',backgroundColor:'gray',width:'200px',fontSize:'1.4rem'}
    
  },
  {
    id: '3',
    data: { label: <strong>Node</strong> },
    position: { x: 750, y: 50 },
    style:{color:'white',backgroundColor:'gray',width:'200px',fontSize:'1.4rem'}
  },
  {
    id: '4',
    data: { label: <strong>Express</strong> },
    position: { x: 750, y: 150 },
    style:{color:'white',backgroundColor:'gray',width:'200px',fontSize:'1.4rem'}
  },
  {
    id: '5',
    data: { label:<strong>Internet</strong> },
    position: { x: 500, y: 100 },
    style:{color:'white',backgroundColor:'gray',width:'200px',fontSize:'1.4rem'}
  },
  {
    id: '6',
    data: { label:<strong>Basic frontend Language</strong> },
    position: { x: 500, y: 170 },
    style:{color:'white',backgroundColor:'gray',width:'200px',fontSize:'1.4rem'}
  },
];

const labels=[
  {texts:"desy"},
  {texts:"cindy"},
  {texts:"mike"},
  {texts:"amoh"},
  {texts:"desy"},
]

   const [element,setElement]=useState(initialElements);
   const [name,setName]=useState(labels.map((text)=>text.texts))
   
   useEffect(()=>{
     setElement(e=>e.concat({
       id:(e.length+1).toString(),
       data:{label:`${labels.map((text)=>text.texts)}`},
       position:{x:Math.random()* window.innerWidth, y:Math.random()* window.innerHeight},
     })
     )
   },[name])
   
  return (
    <div style={{ height: '100vh',width:"100%" }}>
      <ReactFlow nodes={element} />
   
    </div>
  );
}

export default Flow;