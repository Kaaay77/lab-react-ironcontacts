// src/App.js
import "./App.css";
import contactsData from "./contacts.json";
import React, {useState} from "react";

const contacts5 = contactsData.splice(0, 5);
const contactosSobrantes = contactsData.splice(5);



function App() {
  const [contacts, setContacts] = useState(contacts5)

  const randomContact = () => {
   const random = contactosSobrantes[Math.floor(Math.random()*contactosSobrantes.length)];
    setContacts(current => [...current, random]);
  }

  const popularitySort = () =>{
    // eslint-disable-next-line
     const popular = contacts.sort((a, b) => b.popularity - a.popularity)
     setContacts(current => [...current]);
    }

  const alphabeticSort = () => {
    // eslint-disable-next-line
   const alph =  contacts.sort((a, b) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      return 0
    })
    setContacts(current => [...current]);
  }

  const clickToDelete = (contactId) => {
    const filteredContacts = contacts.filter((contact) => {
      
      return contact.id !== contactId;
  })
  setContacts(filteredContacts)
}
  
  // eslint-disable-next-line 
  return <div className="App-contain">

  <h1>IronContacts</h1>
<div className="botones">

  <button onClick={ () => randomContact() }>
    Add Random Contact
  </button>
  <button onClick={ () => alphabeticSort ()}>
  alphabetically  
  </button>
  <button onClick={ () => popularitySort() }>
  highest first
  </button>
</div>

            <table>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won an Oscar</th>
                <th>Won an Emmy</th>
                <th>Actions</th>
              </tr>
              {contacts.map((contact) => {
                  return(
                    <>
                    <tr>
                      <td><img src={contact.pictureUrl} alt="" className="imagen"></img></td>
                      <td>{contact.name}</td>
                      <td>{contact.popularity.toFixed(2)}</td>
                      {
                        contact.wonOscar ? (
                          <td>🏆</td> 
                        ) : (
                          <td></td>
                        )
                      }
                      {
                        contact.wonEmmy ? (
                          <td>🏆</td> 
                        ) : (
                          <td></td>
                        )
                      }
                      <td>
                        <button onClick={ () => clickToDelete(contact.id) }>
                          Delete ❌
                        </button>
                      </td>
                    </tr>
                    </>
                  )
              })}
              
            </table>
  </div>

}
export default App;