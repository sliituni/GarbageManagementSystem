import React, { useState, useEffect } from "react";
import axios from "axios";

function DisplayCSPopup({ onClose, itemId }) {
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await axios.get(`http://localhost:4011/cs/get/${itemId}`);
                setItem(response.data.item);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchItem();
    }, [itemId]);

    return (
        <div className="popupk"
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999, }}>

            <div className="popupInnerk"
                style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', maxWidth: '700px', width: '100%', textAlign: 'center', }}>

                <div className="popupk" style={{ position: 'relative' }}>
                    <button className="closeBtnk" type="button" aria-label="Close" onClick={onClose} style={{ position: 'absolute', top: '-20px', right: '-15px', zIndex: '1', background: 'none', border: 'none', fontSize: '1.5rem', color: '#000', cursor: 'pointer', outline: 'none' }}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                {item && (
                    <div>
                        <img
                            src={item.imageUrl}
                            alt={item.itemName}
                            style={{ maxWidth: "100%", maxHeight: "300px" }}
                        />
                        <h5>{item.itemName}</h5>
                        <p>Condition: {item.itemCondition}</p>
                        <p>Contact No: {item.contactNo}</p>
                        <p>Address: {item.address}</p>
                    </div>
                )}

            </div>
        </div>
    );
}

export default DisplayCSPopup;
