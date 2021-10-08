let users=[
    {username:'Dina',password:'qwerty'},
    {username:'Kamilla',password:'qwertyy'},
    {username:'Suleiman',password:'123456'},
    {username:'Rimma',password:'56789'},
    {username:'Zhanyl',password:'123456'},
    {username:'Kenes',password:'qwertyuio'},
    {username:'Tiara',password:'zxcvbn'},]

localStorage.setItem('users', JSON.stringify(users));

function LogInAccount(){
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let local_storage_users = localStorage.getItem('users');
    let u = JSON.parse(local_storage_users);
    for (let i = 0; i < u.length; i++) {
        if (
            (u[i].username === username.value) &&
            (u[i].password === password.value)) {
            localStorage.setItem('is_authorized', true);
            username.style.borderColor = 'green';
            password.style.borderColor = 'green';
            window.location.href = 'twitter4.html';
            alert("Welcome!")
            return true;
        }
    }
    username.style.borderColor = "red";
    password.style.borderColor = "red";
}

function SignUpAccount(){
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    if ((username.value.length > 8) && (password.value.length > 8)) {
        let local_storage_users = JSON.parse(localStorage.getItem('users'));
        console.log(local_storage_users);
        local_storage_users.push({ 'username': username.value, 'password': password.value })
        local_storage_users_json=JSON.stringify(local_storage_users);
        localStorage.setItem('users',local_storage_users_json);
        window.location.href = 'twitter4.html';
        alert("Your data was saved")

    } else {
        console.log('invalid data');
    }
}

function Exit(){
    window.location.href = 'twitter.html';
    alert("Session was finished")
}

