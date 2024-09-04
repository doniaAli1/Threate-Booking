import React, { useState } from 'react';
import "./style/AddTheatre.css"
import { useNavigate } from 'react-router-dom';

const AddTheatre = () => {
    const navigate = useNavigate();
    const [theatreData, setTheatreData] = useState({
        id: '',
        name: '',
        description: '',
        des: '',
        price: '',
        prc: '',
        image: null,
        seats: [
            { id: 1, booked: true, date: null },
            // ... more seat data ...
        ]
    });

    const handleAddTheatre = () => {
        if (
            !theatreData.id ||
            !theatreData.name ||
            !theatreData.description ||
            !theatreData.des ||
            !theatreData.price ||
            !theatreData.prc ||
            !theatreData.image
        ) {
            alert('Please fill out all fields.');
            return; 
        }

        
        const existingTheatres = JSON.parse(localStorage.getItem('theatres')) || [];
        const newTheatre = {
            ...theatreData,
            id: existingTheatres.length + 1, 
        };

        
        const updatedTheatres = [...existingTheatres, newTheatre];
        localStorage.setItem('theatres', JSON.stringify(updatedTheatres));
        const addedTheatres = JSON.parse(localStorage.getItem('addedTheatres')) || [];
        const updatedAddedTheatres = [...addedTheatres, newTheatre];
        localStorage.setItem('addedTheatres', JSON.stringify(updatedAddedTheatres));
        setTheatreData({
            id: '',
            name: '',
            description: '',
            des: '',
            price: '',
            prc: '',
            image: '',
            seats: [
                { id: 1, booked: true, date: null },
                // ... more seat data ...
            ]
        });
        navigate('/home-admin', { state: { isAdmin: true } });
    };

    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        const imageURL = URL.createObjectURL(selectedImage);
        setTheatreData({
            ...theatreData,
            image: imageURL
        });
    };
 
    return (
        <div className="add-theatre-container">
            <h2>Add Theatre</h2>
            <form>
                <label>ID:</label>
                <input
                    type="text"
                    value={theatreData.id}
                    onChange={(e) => setTheatreData({ ...theatreData, id: e.target.value })}
                    required
                />
                <label>Theatre Name:</label>
                <input
                    type="text"
                    value={theatreData.name}
                    onChange={(e) => setTheatreData({ ...theatreData, name: e.target.value })}
                    required
                />
                <label>Description:</label>
                <textarea
                    value={theatreData.description}
                    onChange={(e) => setTheatreData({ ...theatreData, description: e.target.value })}
                    required
                />
                <label>Des:</label>
                <textarea
                    value={theatreData.des}
                    onChange={(e) => setTheatreData({ ...theatreData, des: e.target.value })}
                    required
                />
                <label>Price:</label>
                <input
                    type="text"
                    value={theatreData.price}
                    onChange={(e) => setTheatreData({ ...theatreData, price: e.target.value })}
                    required
                />
                <label>Prc:</label>
                <input
                    value={theatreData.prc}
                    onChange={(e) => setTheatreData({ ...theatreData, prc: e.target.value })}
                    required
                />
                <label>Date:</label>
                <input
                    value={theatreData.seats.date}
                    onChange={(e) => setTheatreData({ ...theatreData, date: e.target.value })}
                    required
                />
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                    />
                </div>
                
                {/* ... Add seat data inputs here ... */}
                <button type="button" className="add-theatre-button" onClick={handleAddTheatre}>Add Theatre</button>
            </form>
        </div>
    );
};

export default AddTheatre;
