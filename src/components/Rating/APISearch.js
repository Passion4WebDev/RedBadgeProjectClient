import React, {useState, useEffect, createElement} from 'react';
import {Button, Input, Form, FormGroup} from 'reactstrap';
import APIDisplay from "./APIDisplay"
const inputStyle={
  fontFamily: "Rating Font",
  height: "35px", 
  fontSize: "50px",
}

const APISearch = () => {
  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [meta, setMeta] = useState('');
  const [release, setRelease] = useState('');
  const [plat, setPlat] = useState([]);
  const [dev, setDev] = useState('');
  const [des, setDes] = useState('');
  const [det, setDet] = useState([]);
  
  
  const handleSubmit = () => {
    const key = "";
    // e.preventDefault();
    fetch(`${search.replace(/\s/g , "-")}?key=${key}`)
    .then(res => {
      if(res.ok){
        return res.json()
      } else if(res.staus === 404){
        return Promise.reject('error 404')
      } else {
        return Promise.reject("Error:" + res.status)
      }
    })
    .then( data => {
      console.log(data)
      setTitle(data.name);
      setImageUrl(data.background_image);
      setMeta("Metacritic Rating: " + data.metacritic + "/100");
      setRelease("Release Date: " + data.released);
      setPlat("Platforms: " + data.platforms.map(platName => platName.platform.name).join(', '));
      setDev("Developers: " + data.developers[0].name);
      setDes("Description: " + data.description_raw);
      }).catch(err => {
      setDet("Not Found!! ")
      alert("Hello Sugar, something is wrong on our end")
      console.log(det)
    })
    setDet('')
  }
  
  const searchAndClear = () => {
      handleSubmit();
    setSearch('')
  }

  const clearRender = () => {
    window.location.reload(false);
  }
  
  return(
    <div className="api-search-main">
      <br/>
      <h2 style={{"fontFamily": "Rating Font Two", "color": "navy", fontSize: "25px", textDecoration: "underline"}}>Exotic Super CarsXXXX</h2>
      <Input style={inputStyle} name="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder=""/>
      <br/>
      <Button className="searchBtn" onClick={searchAndClear} style={{"color": "navy"}} color="warning">Search Database</Button>

      <Button className="clearBtn" onClick={clearRender} style={{"color": "navy"}} color="warning">Clear</Button>
      {det == '' ? <APIDisplay title={title} imageUrl={imageUrl} meta={meta} release={release} plat={plat} dev={dev} des={des} /> :
      <APIDisplay det={det} />}
      </div>
)
}
  
export default APISearch;