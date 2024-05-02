import decode from 'jwt-decode';

function isAutenticed() {
    const token = localStorage.getItem('accessToken');
    if (token !== null) {
        const decoded = decode(token);
        if (decoded && decoded.exp > Date.now() / 1000) {
            return true;
        }
    }
    localStorage.clear();
    return false;
}

function getUserName() {
    const token = localStorage.getItem('accessToken');
    if (token !== null) {
        const decoded = decode(token);
        if (decoded && decoded.exp > Date.now() / 1000) {
            return decoded.Name;
        }
    }
    return '';
}

export {isAutenticed,getUserName}