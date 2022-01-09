import React, {useState} from 'react'

export default function FormField(props) {
    const [text, setText] = useState('')
    const [desc, setDesc] = useState('')
    // const [todo, setTodo] = useState('')
    const [err, setErr] = useState('')
    const [arr, setArr] = useState([])
    // const [tog, setTog] = useState('View')
    const handleTitleChange = (e) => {
      setText(e.target.value);
      setErr('');
    }
    const handleDescChange = (e) => {
      setDesc(e.target.value);
    }
    const dispTodo = (t,d,e) => {
      if(t !== ''){
        if(arr.indexOf(t) >= 0){
          setErr("Title already exists");
        } else{
        const v = {title: t, desc: d};  
        setArr(
          [...arr, v]
        );
        setErr('');
        }
        setText('');
        setDesc('');
      }  else{
        setErr("Title is required");  
      }
    }
    const remText = () => {
      setText("");  
      setDesc("");
      setErr("");
    }
    const remFromList = (t,e) => {
    
      if(window.confirm('Are you sure?')){
       document.getElementById(arr.indexOf(t)).remove();
      }
    }
    const strike = (t, e) => {
      const idd = t.title;
      // const chb = document.getElementById(`check${idd}`);
      if(e.target.checked){
       document.getElementById(`style${idd}`).style.textDecoration = 'line-through';
       document.getElementById(`check${idd}`).remove();
      }
    }
    
    return (
        <div>
            
            <h2>{props.title}</h2>
            <div className="mb-3">
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" value={text} onChange={handleTitleChange}/>
            </div>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Description' value={desc} onChange={handleDescChange}></textarea>
            </div>
            
            <button className="btn btn-primary" style={{fontWeight: 'bold'}} onClick={(e) => dispTodo(text, desc, e)}>Add</button>
            <button className="btn btn-primary mx-3" style={{fontWeight: 'bold'}} onClick={remText}>Clear</button>

            <div className="container my-3">
                <p className='text-warning'>{err}</p>
                <ul style={{listStyle: "none", color: (props.mode==='dark')?'white':'black'}}>{arr.map((todo) => {
                  return (
                  <div id={arr.indexOf(todo)}>
                    <div className='accordion' style={{color: (props.mode==='dark')?'white':'black'}} id={`accordionEg${todo.title}`}>
                  <div className="accordion-item" style={{backgroundColor: (props.mode==='dark')?'grey':'white'}}>
    <h2 className="accordion-header" id={`heading${todo.title}`}>
      <button style={{backgroundColor: (props.mode==='dark')?'grey':'white', color:(props.mode==='dark')?'white':'black'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${todo.title}`} aria-expanded="false" aria-controls={`collapse${todo}`}>
        <span id={`style${todo.title}`}>{todo.title}</span>&nbsp;
  <input className="form-check-input" type="checkbox" id={`check${todo.title}`} onClick={(e) => strike(todo, e)}/>
  
&nbsp;<span style={{color: 'red', fontWeight: 'bold'}} onClick={(e) => remFromList(todo, e)}>X</span>
      </button>
      
    </h2>
    <div id={`collapse${todo.title}`} className="accordion-collapse collapse" aria-labelledby={`heading${todo.title}`} data-bs-parent={`#accordionEg${todo.title}`}>
      <div className="accordion-body" style={{backgroundColor: (props.mode==='dark')?'grey':'white'}}>
        {todo.desc}
      </div>
    </div>
  </div>
  </div>
                  </div>)
                })}</ul>
          </div>      
        </div>
    );
}
