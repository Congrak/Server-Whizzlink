
import { app } from './server.mjs';
import { connectToDatabase } from './database.mjs';
import { NewUser } from "./models/account.mjs";

connectToDatabase().then(() => {
    app.listen(app.get('port'), () => {
      console.log('Server running on port ' + app.get('port'));

      app.post('/register', async (req, res) => {
        try {
          const { name, lastName, email, password } = req.body;
          const result = await NewUser({
            name,
            lastName,
            email,
            password
          });
          res.send(result);
        } catch (error) {
          console.error(error);
          res.status(500).send('Error creating new user');
        }
      })
    });
  }).catch(console.error);