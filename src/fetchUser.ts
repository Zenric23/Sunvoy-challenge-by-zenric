import axios from 'axios';
import fs from 'fs';
import { User } from './types';

export const fetchUser = async (): Promise<void> => {
  try {
    const res = await axios.post<User[]>(
      'https://challenge.sunvoy.com/api/users',
      {},
      {
        headers: {
          Cookie:
            'user_preferences=eyJ0aGVtZSI6ImxpZ2h0IiwibGFuZ3VhZ2UiOiJlbiIsInRpbWV6b25lIjoiVVRDIiwibm90aWZpY2F0aW9ucyI6dHJ1ZX0%3D; feature_flags=eyJuZXdEYXNoYm9hcmQiOnRydWUsImJldGFGZWF0dXJlcyI6ZmFsc2UsImFkdmFuY2VkU2V0dGluZ3MiOnRydWUsImV4cGVyaW1lbnRhbFVJIjpmYWxzZX0%3D; tracking_consent=accepted; _gcl_au=1.1.1178421767.1749964048; _ga=GA1.1.1805047653.1749964048; _clck=1inwilm%7C2%7Cfws%7C0%7C1992; _fbp=fb.1.1749964049170.455889945972180811; __hstc=212011595.dbf68c82f5fa5bb20dc6444e14941e44.1749964049493.1749964049493.1749964049493.1; hubspotutk=dbf68c82f5fa5bb20dc6444e14941e44; __hssrc=1; _ga_519SRCNPS2=GS2.1.s1749964102$o1$g0$t1749964106$j56$l0$h0; _clsk=1xc9ijl%7C1749964133655%7C6%7C1%7Ci.clarity.ms%2Fcollect; _ga_9K3QV45BVK=GS2.1.s1749964048$o1$g1$t1749964195$j60$l0$h0; JSESSIONID=291d4da6-b9bb-4ae5-ba5a-426fb5116b6b; _csrf_token=3a48ae9b9e08073f1bb762bca7f2e51d220fa75a4d50d25c7f29ff99deeceb30; analytics_id=analytics_22ccb307c4b3add83752756ddb955a99; session_fingerprint=9e7dd25be4d9e6631a901d570cc5eb48540b1cc2bb453cc7f6e0d93a17129e1a; device_id=device_160aa68ab4bee1e8368335dc',
        },
      },
    );
    const users = res.data;

    const formattedJSON = JSON.stringify(users, null, 2);
    const outputPath = './users.json';

    fs.writeFileSync(outputPath, formattedJSON);

    console.log(`Users saved to ${outputPath}`);
  } catch (error) {
    console.log(`Error fetching users: ${error}`);
  }
};
