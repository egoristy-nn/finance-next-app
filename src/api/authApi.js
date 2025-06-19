const URL = 'http://localhost:8484';

export function loginUser(username, password) {
  return fetch(`${URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
    сredentials: 'include',
  });
}

export function logoutUser () {
    return fetch(`${URL}/api/auth/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        сredentials: 'include',
    })
}