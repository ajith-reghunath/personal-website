function valid(x){
    let name = /^[A-Za-z ]+$/;
    var mail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (x.name.value == "") {
        alert('Please enter your Name');
        x.name.focus();
        return false;
    }if (!x.name.value.match(name)) {
        alert('Your Name contain invalid characters');
        x.name.focus();
        return false;
    }if (x.email.value == "") {
        alert('Please enter Your E-mail Address');
        x.email.focus();
        return false;
    }if (!x.email.value.match(mail)) {
        alert('Enter valid E-mail Address');
        x.email.focus();
        return false;
    }if (x.message.value == "") {
        alert('Please enter Message');
        x.message.focus();
        return false;
    }
}