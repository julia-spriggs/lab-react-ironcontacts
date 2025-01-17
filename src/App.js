import { useState } from 'react';
import './App.css';
import contactsArray from './contacts.json';


function App() {
  const firstFiveContacts = contactsArray.slice(0, 5);
  const remainingContacts = contactsArray.slice(5);

  function addRandom() {
    let index = Math.floor(Math.random() * remainingContacts.length);
    let randomContact = remainingContacts[index];
    const contactCopy = [...listOfContacts];
    contactCopy.push(randomContact);
    remainingContacts.splice(index, 1);
    return setListOfContacts(contactCopy);
  }

  const [listOfContacts, setListOfContacts] = useState(firstFiveContacts);
  const trophy = '🏆';

  return <div className="App"><h1>IronContacts</h1>

    <button onClick={addRandom}>Add Random Contact</button>

    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
      </thead>
      <tbody>
        {listOfContacts.map(contact => {
          let imgContent;
          imgContent = <img src={contact.pictureUrl} alt={contact.name} className="contact-picture" />
          return (
            <tr key={contact.id}>
              <td>{imgContent}</td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? trophy : null }</td>
              <td>{contact.wonEmmy ? trophy : null }</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
}

export default App;