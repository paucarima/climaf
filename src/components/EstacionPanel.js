import React, {useState} from 'react';
import Form from './Form';
import Cartas from './Cartas';

const EstacionPanel=()=>{
    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=6767eed1f83b2fc9d91db319d1a9495f&lang=es";
    let cityUrl = "&q=";
    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=6767eed1f83b2fc9d91db319d1a9495f&lang=es";
    //respuesta del tiempo actual
    const [weather, setWeather] = useState([]);//tiempo actual
    const [forecast, setForecast] = useState([]);// prediccion de las horas 
    const [loading, setLoading] = useState(false); //imagen de carga
    const [show, setShow] = useState(false); //Estado de la app
    const [location, setLocation] = useState(""); //lugar
    
    const getLocation = async(loc) => { //locazar los valores
        setLoading(true); //visualizar la carga
        setLocation(loc); 

        //tiempo

        urlWeather = urlWeather + cityUrl + loc; //concante la respuesta

        await fetch(urlWeather).then((response) =>{
            if(!response.ok) throw {response}//sentencia de fallo o ok
            return response.json();
        }).then((weatherData) =>{  //ingresar los datos
            console.log(weatherData);
            setWeather(weatherData);
        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });

        //Prediccion 

        urlForecast = urlForecast + cityUrl + loc; //completar la url

        await fetch(urlForecast).then((response) =>{ //obtiene los datos
            if(!response.ok) throw {response}
            return response.json();
        }).then((forecastData) =>{
            console.log(forecastData);
            setForecast(forecastData);

            setLoading(false);
            setShow(true);

        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });

    }
    

        return(
            <React.Fragment>
               <Form 
               newLocation = {getLocation}
               />
              <Cartas
                showData = {show}//mirar datos
                loadingData = {loading} //s}visulizar el spinner
                weather = {weather}//clima-tiempo
                forecast = {forecast}// prediccion
            />
            </React.Fragment>

            
        );
        
}   

export default EstacionPanel;
