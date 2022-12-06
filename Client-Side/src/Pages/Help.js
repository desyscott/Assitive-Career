import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

const edges = [
    { id: '1-2', source: '1', target: '2',animated: false },
    { id: '3-4', source: '3', target: '4',animated: false },
    { id: '5-6', source: '5', target: '6',animated:false },
    { id: '5-2', source: '5', target: '2',animated: true },
    { id: '5-1', source: '1', target: '5',animated: true },
    { id: '5-3', source: '5', target: '3',animated: true },
    { id: '5-4', source: '5', target: '4',animated: true },
               
               ];

const nodes = [
  {
    id: '1',
    data: {label:<strong>Python</strong>  },
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

function Flow() {
  return (
    <div style={{ height: '100vh',width:"100%" }}>
      <ReactFlow nodes={nodes} edges={edges}  >
        {/* <Background />
        <Controls /> */}
      </ReactFlow>
    </div>
  );
}

export default Flow;