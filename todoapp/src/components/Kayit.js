import React from 'react'
import './stil.css'
import { useState } from 'react';


const Kayit = () => {
    const [newItem, setnewItem] = useState("");
    const [items, SetItems] = useState([]);
    function notEkle() {

        if (!newItem) {
            alert("Bir not girin");
            return;
        }

        const item = {
            id: Math.floor(Math.random() * 1000),
            value: newItem
        }
        SetItems(oldItems => [...oldItems, item])
        setnewItem("");
    }

    function hepsinisiL() {
        SetItems([]);
    }

    function notSil(id) {
        SetItems(items.filter(item => item.id !== id));
    }


    return (
        <div className='cerceve'>
            <input type='text' className='kayitgirisi' placeholder='                    Eklemek istediğiniz notu yazın.' value={newItem} onChange={e => setnewItem(e.target.value)} />
            <div className='d-flex justify-content-evenly'>
                <button id='ekle' type="button" className="btn btn-success" onClick={notEkle}>Ekle</button>
                <button type="button" className="btn btn-danger" onClick={hepsinisiL} >Tümünü Sil</button>
            </div>
            <hr />
            <div className='notlar_container'>
                {items.map((item) => (
                    <div className='not' key={item.key}>{item.value} <button className='sil' onClick={() => notSil(item.id)} >X</button></div>


                ))}
            </div>
        </div>
    );
};
export default Kayit;



