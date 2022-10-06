import React, {useState} from 'react';


const Form = ({newLocation}) => {
    const [city, setCity]= useState("");//recoger información de laciudad
    const onSubmit = (e) => {
        e.preventDefault();  //no se recargue la pafina
        console.log({city}); //mostrar
        if(city === "" || !city) return; //validar espacio vacio
        newLocation(city);//recoger
    }

    return(
        <div className="container">
        <form onSubmit={onSubmit}>
            <div className="input-group mb-3 mx-auto">
                <input type="text" className="form-control" placeholder="Ciudad" 
                onChange={(e) =>setCity(e.target.value)}/>

                <button className="btn btn-primary input-group-text" type="submit">Buscar</button>

            </div>
        </form>
    </div>

    );

}

export default Form;



