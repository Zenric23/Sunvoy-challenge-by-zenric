import axios from 'axios';
import fs from 'fs';
import { User } from './types';

export const fetchCurrentAuthenticatedUser = async (): Promise<void> => {
  try {
    const formData = new URLSearchParams();
    formData.append(
      'access_token',
      '55b6cc2d60ed03a9fe98f2c2d2367c684814edfb47c97e284d73fefb413601ce',
    );
    formData.append('apiuser', 'demo@example.org');
    formData.append('language', 'en_US');
    formData.append('openId', 'openid456');
    formData.append('operateId', 'op789');
    formData.append('timestamp', '1749984945');
    formData.append('userId', 'd9b30f76-2c07-468b-9c23-63de80f0ebf2');
    formData.append('checkcode', 'D30C33441BD3207093A7EC9F6FD95291424BC354');

    const res = await axios.post<User>(
      'https://api.challenge.sunvoy.com/api/settings',
      formData,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
    const currentUser = res.data;

    const usersFilePath = './users.json';
    let users: User[] = [];

    // Check if users.json exists and read its content
    if (fs.existsSync(usersFilePath)) {
      const fileContent = fs.readFileSync(usersFilePath, 'utf-8');
      users = JSON.parse(fileContent);
    }

    users.push(currentUser);

    // Write the updated users array back to users.json
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
    console.log('User added to users.json');
  } catch (error) {
    console.log(`Invalid Credentials: ${error}`);
  }
};
