import {useState} from 'react'
export const Form = () => {
  const [ formData, setFormdata] = useState({
    name :'',
    password :'',
    email :'',
})

const handleChange =(event)=>{
    const {name,value} = event.target;
    setFormdata({...formData, [name] :value})
   // [name]-> dianamic value is created//
    console.log(name,value)
}

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div>
        <form>
            <label>Name:</label>
            <input type='text'  name='name' value={FormData.name} onChange={handleChange}></input>
            <br></br>
            <label>Password:</label>
            <input type='text'  name='password' value={FormData.password} onChange={handleChange}></input>
            <label>Email:</label>
            <input type='text'  name='email' value={FormData.email} onChange={handleChange}></input>
            <br></br>
            <input type='button' value='submit' />
        </form>
    </div>
  )
}