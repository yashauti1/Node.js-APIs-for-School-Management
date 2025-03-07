import pool from '../db/db.js';

// Add a new school
export const addSchool = async (req, res) => {
    try {
        const { name, address, latitude, longitude } = req.body;

        // Validate input
        if (!name || !address || !latitude || !longitude) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Insert into database
        const [result] = await pool.execute(
            `INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)`,
            [name, address, latitude, longitude]
        );

        res.status(201).json({ message: 'School added successfully', schoolId: result.insertId });

    } catch (error) {
        console.error('Error adding school:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
const haversineDistance = (lat1, lon1, lat2, lon2) => {
    const toRadians = (degree) => degree * (Math.PI / 180);

    const R = 6371; // Earth radius in km
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
};

export const listSchools = async (req, res) => {
    try {
        const { latitude, longitude } = req.query;

        if (!latitude || !longitude) {
            return res.status(400).json({ message: 'Latitude and longitude are required' });
        }

        // Fetch all schools from database
        const [schools] = await pool.execute('SELECT * FROM schools');

        // Calculate distances and sort
        const sortedSchools = schools.map(school => ({
            ...school,
            distance: haversineDistance(latitude, longitude, school.latitude, school.longitude)
        })).sort((a, b) => a.distance - b.distance);

        res.json(sortedSchools);

    } catch (error) {
        console.error('Error fetching schools:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
