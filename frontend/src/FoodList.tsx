import { useEffect, useState } from 'react';
import { food } from './types/food';

export default function FoodList() {
    const [foodList, setFoodList] = useState<food[]>([]);

    useEffect(() => {
        const fetchFood = async () => {
            const response = await fetch('https://localhost:5000/MarriottFood');
            const data  = await response.json();
            setFoodList(data);
        }
    
        fetchFood();
    }, []);

    // Example to fetch food data (update this as needed to fetch from an API)
    return (
        <>
            <h1>Food</h1>
            <table>
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Vendor</th>
                        <th>Event Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {foodList.map((f) => (
                        <tr key={f.foodId}>
                            <td>{f.eventName}</td>
                            <td>{f.vendor}</td>
                            <td>{f.foodRating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}