import { useEffect, useState } from 'react';
import { bowler } from './types/bowler';

export default function BowlersList() {
    const [bowlersList, setBowlersList] = useState<bowler[]>([]);

    useEffect(() => {
        const fetchBowlers = async () => {
            const response = await fetch('https://localhost:5000/Bowlers');
            const data  = await response.json();
            setBowlersList(data);
        }
    
        fetchBowlers();
    }, []);

    // Example to fetch food data (update this as needed to fetch from an API)
    return (
        <>
            <h1>Bowlers </h1>
            <table>
                <thead>
                    <tr>
                        <th>Bowler Name</th>
                        <th>Team Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {bowlersList.filter((b) => ['Marlins', 'Sharks'].includes(b.team.teamName)).map((b) => (
                        <tr key={b.bowlerId}>
                            <td>{`${b.bowlerFirstName} ${b.bowlerMiddleInit ? b.bowlerMiddleInit+'. ' : ''} ${b.bowlerLastName}`}</td>
                            <td>{b.team.teamName}</td>
                            <td>{b.bowlerAddress}</td>
                            <td>{b.bowlerCity}</td>
                            <td>{b.bowlerState}</td>
                            <td>{b.bowlerZip}</td>
                            <td>{b.bowlerPhoneNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}