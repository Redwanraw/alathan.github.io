import React , { useState } from 'react';
import './App.css';
import axios from "axios";

function App() {


  const par = [
  {firstname : " مكة المكرمة",  value: "Makkah" },
  {firstname : "الرياض" ,  value: 'Riyadh'},
  {firstname : "جدة", value:"Jaddah", }
  ]

const name = par.map((name1) =>
    <option   id='name' value={name1.value} >{name1.firstname } </option>
);
//if (name[1].props.value == '2') {
  //getPrayers("Riyadh")
//}


const [cityName1, setcityName1] = useState("Makkah")
    const params = {
  country:"SA",
  city:cityName1
  }
axios.get('http://api.aladhan.com/v1/timingsByCity/:date_or_timestamp',{
      params : params
})

  .then(function althan (response) {
    // handle success
    const taemsla = response.data.data.timings
    const month = response.data.data.date.hijri.month.ar
    const tareh = response.data.data.date.hijri.date
    const day = response.data.data.date.hijri.weekday.ar

    document.getElementById("tareh").innerHTML = day + " " + month +" "+ tareh
    document.getElementById("Fajr").innerHTML = taemsla.Fajr
    document.getElementById("Dhuhr").innerHTML = taemsla.Dhuhr
    document.getElementById("Asr").innerHTML = taemsla.Asr
    document.getElementById("Maghrib").innerHTML = taemsla.Maghrib
    document.getElementById("Isha").innerHTML = taemsla.Isha
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

const [namecity, setnamecity] = useState('مكة المكرمة')

return (
    <div className="App" >

<div className='row m-3'>

<h1 className='mt-5'>  {namecity} </h1>
<h5 id='tareh' className='mt-3'></h5>
<h6 > اوقات الصلاة في  {namecity}</h6>
</div>
<hr/>
<div className=" row row-cols-1 row-cols-md-5 me-1">
  <div className="col">
    <div className="card">
      <div className='day'>
          <h5 className="col  card-body " >الفجر</h5>
      </div>
      <div className="card-body">
        <h2 id="Fajr" className='text-cenret'></h2>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <div className='day'>
          <h5 className="col  card-body " >الظهر</h5>
      </div>
      <div className="card-body">
        <h2 id="Dhuhr" className='text-cenret Fajr'></h2>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
            <div className='day'>
          <h5 className="col  card-body " >العصر</h5>
      </div>
      <div className="card-body">
        <h2 id="Asr" className='text-cenret Fajr'></h2>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <div className='day'>
          <h5 className="col  card-body " >المغرب</h5>
      </div>
      <div className="card-body">
        <h2 id="Maghrib" className='text-cenret Fajr'></h2>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
            <div className='day'>
          <h5 className="col  card-body " >العشاء</h5>
      </div>
      <div className="card-body">
        <h2 id="Isha" className='text-cenret Fajr'></h2>
      </div>
    </div>
  </div>
</div>

<div id='cities-select' className=" input-group text-center ">
  <select key={name.toString} onChange={(then)=>{
    if (then.target.value == "Makkah") {
      setcityName1("Makkah")
      setnamecity('مكة المكرمة')
    }
    if(then.target.value == "Riyadh"){
      setcityName1("Riyadh")
      setnamecity('الرياض ')

    }
    if (then.target.value == "Jaddah") {
            setcityName1("Jaddah")
            setnamecity('جدة ')

    }
console.log(then.target.value)
  }  } className="form-select text-center" id="inputGroupSelect01">
{name}
  </select>
</div>

    </div>
  );
}

export default App;
