const URL = 'http://localhost:8484';

export function loginUser(username, password, rememberMe) {
  return fetch(`${URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password, rememberMe }),
    credentials: 'include',
  });
}

export function logoutUser () {
    return fetch(`${URL}/api/auth/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    })
}

export function signUpUser (username, password, confirmPassword, email) {
    return fetch(`${URL}/api/auth/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, confirmPassword, email }),
        credentials: 'include',
    })
}