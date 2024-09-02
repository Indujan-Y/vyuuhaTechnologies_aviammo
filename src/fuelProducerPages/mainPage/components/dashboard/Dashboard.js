import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { MdGasMeter } from "react-icons/md";
import { FaTemperatureLow } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

function Dashboard() {
  const [tempdata, setTempData] = useState(null);
  const [humdata, setHumData] = useState(null);
  const [ammdata, setAmmData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tempResponse = await fetch('https://blr1.blynk.cloud/external/api/get?token=lQsUZMADT45wS5-fILN4F8Htdr2M4glp&v5');
        const tempJson = await tempResponse.json();
        setTempData(tempJson);

        const humResponse = await fetch('https://blr1.blynk.cloud/external/api/get?token=lQsUZMADT45wS5-fILN4F8Htdr2M4glp&v6');
        const humJson = await humResponse.json();
        setHumData(humJson);

        const ammResponse = await fetch('https://blr1.blynk.cloud/external/api/get?token=lQsUZMADT45wS5-fILN4F8Htdr2M4glp&v2');
        const ammJson = await ammResponse.json();
        setAmmData(ammJson);
      } catch (err) {
        console.log(err);
      }
      fetchData();
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-wrapper">
      <div className="fuelproducers-dashboard-topbar">
        <img src="" alt="Profile" className="fuelproducers-dashboard-topbar-profile" />
      </div>
      <h1 className="fuel-producers-dashboard-title">
        Plant Environment Readings
      </h1>
      <div className="fuel-producers-censor-values">
        <div className="fuel-producers-censor-value">
          <h2 className="fuel-producers-censor-value-title">Temperature</h2>
          <div className="value-subdiv">
            <FaTemperatureLow />
            <p className="value">
              {tempdata ? tempdata : "Loading..."}
            </p>
          </div>
        </div>
        <div className="fuel-producers-censor-value">
          <h2 className="fuel-producers-censor-value-title">Humidity</h2>
          <div className="value-subdiv">
            <WiHumidity />
            <p className="value">
              {humdata ? humdata : "Loading..."}
            </p>
          </div>
        </div>
        <div className="fuel-producers-censor-value">
          <h2 className="fuel-producers-censor-value-title">Ammonia</h2>
          <div className="value-subdiv">
            <MdGasMeter />
            <p className="value">
              {ammdata ? ammdata : "Loading..."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
