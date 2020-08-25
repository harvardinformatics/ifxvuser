import { User } from '@/user'
import assert from 'assert'


describe('Test User class', function () {
  let data = {}
  beforeEach(() => {
    data = {
      id: 1,
      full_name: 'Derpy K Derpiston',
      first_name: 'Derpy',
      last_name: 'Derpiston',
      email: 'dderpiston@harvard.edu',
      ifxid: 'IFXIDX000000001',
      is_active: false,
      is_staff: true,
      groups: [
        'group1',
        'group3'
      ]
    }
  });
  it('Ensure user object maps is_active properly', function () {
    let user = new User(data)
    assert.strictEqual(user.isActive(), false)
  })
  it('Ensure user object maps is_staff properly', function () {
    let user = new User(data)
    assert.strictEqual(user.isDjangoStaff(), true)
  })
  it('Ensure user object maps groups properly', function () {
    let user = new User(data)
    assert.strictEqual(user.groups.join(','), 'group1,group3')
  })
  it('Ensure group can be added', function () {
    let user = new User(data)
    user.addToGroup('group2')
    assert.strictEqual(user.groups.join(','), 'group1,group3,group2')
  })
  it('Ensure duplicate group is not added', function () {
    let user = new User(data)
    user.addToGroup('group1')
    assert.strictEqual(user.groups.join(','), 'group1,group3')
  })
  it('Ensure id cannot be set', function () {
    let user = new User(data)
    expect(() => { user.id = 10 }).toThrowError()
  })
})