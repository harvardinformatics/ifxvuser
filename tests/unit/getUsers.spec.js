import { UserAPI, User } from '@/user'
import assert from 'assert'
import axios from 'axios';

jest.mock('axios');

class MockAuth {
  getAuthHeaderValue() {
    'Token 12345'
  }
}

describe('Test UserAPI', function () {
  it('Ensure getUsers returns User objects from data', async () => {
    let response = {
      data: [
        {
          id: 1,
          full_name: 'Derpy K Derpiston',
          first_name: 'Derpy',
          last_name: 'Derpiston',
          email: 'dderpiston@harvard.edu',
          ifxid: 'IFXIDX000000001'
        }
      ]
    }
    let auth = new MockAuth()
    let userApi = new UserAPI('/api', auth)
    axios.get.mockResolvedValue(response)

    let users = await userApi.getUsers()

    assert.strictEqual(users.length, 1)
    assert.strictEqual(users[0] instanceof User, true)
  })
})