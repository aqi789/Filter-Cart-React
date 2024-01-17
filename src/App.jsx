import React, { useState } from 'react';
import PhoneCard from './Card';
import PhoneButton from './Buttons';
import './App.css';

const App = ({ datas }) => {
  const [selectedVersion, setSelectedVersion] = useState("");

  const uniqueVersions = [...new Set(datas.map(phone => phone.iphone_version))];

  const filteredVersions = uniqueVersions.slice(0, 7);

  return (
    <div className="container">
      <h1>Select Yours</h1>
      <div className="buttons-row">
        {filteredVersions.map((version) => (
          <PhoneButton
            key={version}
            version={version}
            onClick={setSelectedVersion}
          />
        ))}
      </div>

      <div className="cards-row">
        {datas
          .filter((phone) => selectedVersion === "" || phone.iphone_version === selectedVersion)
          .map((phone, index) => (
            <div key={phone.id} className="card">
              <PhoneCard phone={phone} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
