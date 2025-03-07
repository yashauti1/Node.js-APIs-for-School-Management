import app from "./app.js";
import db from "./db/db.js";
import cors from 'cors';
import schoolRoutes from './routes/schoolRoutes.js';


// Start Server


app.use(cors());

app.use('/api', schoolRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀Server running on http://localhost:${PORT}`);
});