import React, {useState} from 'react'

function FormularioComponent() {

  const [user, setUser] = useState({});

  const getDataForm = (e) => {
    e.preventDefault();

    let userForm = {
      name: e.target.name.value,
      surname: e.target.surname.value,
      sex: e.target.sex.value,
      comments: e.target.comments.value,
      send: e.target.send.value
    }

    setUser(userForm);
  }

  const changeData = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    let userToModify = user;

    setUser({...userToModify, [inputName]: inputValue});
  }

  return (
    <>
      <h1>Formulario</h1>

      { user.send &&
        (
          <div className='label'>
            { user.name} {user.surname} es {user.sex} y sus comentarios son: {user.comments}
          </div>
        )
      }

      <form className='formulario' onSubmit={getDataForm}>
        <input type="text" placeholder="Nombre" className='input' name='name' onChange={changeData}/>
        <input type="text" placeholder="Apellido" className='input' name='surname' onChange={changeData}/>
        <select className='input' name='sex' onChange={changeData}>
          <option value="">Seleccione una opción</option>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>

        <textarea placeholder="Comentarios" className='input' name='comments' onChange={changeData} />

        <input className='button' type="submit" value="Enviar" name='send'/>
      </form>
    </>
  )
}

export default FormularioComponent