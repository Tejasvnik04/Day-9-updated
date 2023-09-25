import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import background from './one.jpg';
import Footer from '../components/Footer';
import { useDispatch } from 'react-redux';
import { addPlants , deletePlants} from '../redux/userSlice';

function Dashboard() {
  const user = useSelector(selectUser);
  const [formData, setFormData] = useState({
    plantName: '',
    plantType: '',
    room: '',
    sunlight: 'moderate',
    water: 'moderate',
  });
  const [plants, setPlants] = useState([]); // Store the entered plant data
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting and reloading the page
    
    const id = Date.now();
    const plant = { ...formData, id };
    
    // Add the plant data to the list
    setPlants([...plants, plant]);
    
    // Dispatch the action (if needed)
    dispatch(addPlants(plant));
    
    // Reset the form data
    setFormData({
      plantName: '',
      plantType: '',
      room: '',
      sunlight: 'moderate',
      water: 'moderate',
    });
    
  };
  const handleDelete = (donor) => {
    dispatch(deletePlants(donor));
  };
    return (
        <>
            <Layout />
            <div className='main-wrapper'style={{ backgroundImage: `url(${background})`, backgroundSize:`1400px` }}>
                <div className='welcome-container'>
                    <form onSubmit={handleSubmit} className='form'>
                    <div>
          <label>Plant Name:</label>
          <input
            type="text"
            name="plantName"
            value={formData.plantName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Plant Type:</label>
          <input
            type="text"
            name="plantType"
            value={formData.plantType}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Room:</label>
          <input
            type="text"
            name="room"
            value={formData.room}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Sunlight:</label>
          <div className='radioList'>
            <label>
              <input
                type="radio"
                name="sunlight"
                value="low"
                checked={formData.sunlight === 'low'}
                onChange={handleChange}
              />
              Low
            </label>
            <label>
              <input
                type="radio"
                name="sunlight"
                value="moderate"
                checked={formData.sunlight === 'moderate'}
                onChange={handleChange}
              />
              Moderate
            </label>
            <label>
              <input
                type="radio"
                name="sunlight"
                value="high"
                checked={formData.sunlight === 'high'}
                onChange={handleChange}
              />
              High
            </label>
          </div>
        </div>
        <div>
          <label>Water Requirement:</label>
          <div className='radioList'>
            <label>
              <input
                type="radio"
                name="water"
                value="low"
                checked={formData.water === 'low'}
                onChange={handleChange}
              />
              Low
            </label>
            <label>
              <input
                type="radio"
                name="water"
                value="moderate"
                checked={formData.water === 'moderate'}
                onChange={handleChange}
              />
              Moderate
            </label>
            <label>
              <input
                type="radio"
                name="water"
                value="high"
                checked={formData.water === 'high'}
                onChange={handleChange}
              />
              High
            </label>
          </div>
        </div>
        <button type="submit">Submit</button>
      
        
                    </form>
                    <div className="table-container">
            <h2>Plant Data Table</h2>
            <table>
              <thead>
                <tr>
                  <th>Plant Name</th>
                  <th>Plant Type</th>
                  <th>Room</th>
                  <th>Sunlight</th>
                  <th>Water Requirement</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {plants.map((plant) => (
                  <tr key={plant.id}>
                    <td>{plant.plantName}</td>
                    <td>{plant.plantType}</td>
                    <td>{plant.room}</td>
                    <td>{plant.sunlight}</td>
                    <td>{plant.water}</td>
                    <td>
                    <button onClick={() => handleDelete(plant)}>Delete</button>
              </td>
                  </tr>
                ))}
              </tbody>
          
            </table>
          </div>

                </div>

            </div>
            <Footer/>
        </>
    )
}

export default Dashboard