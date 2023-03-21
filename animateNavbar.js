const navbar_contact_logo_img = document.querySelector('.navbar_contact-logo-img');
const linkElement = navbar_contact_logo_img.closest('a');
const linkOnePhoto = "https://www.tkbbank.ru/ico/ico-mail.svg";
const linkTwoPhoto = "https://www.tkbbank.ru/ico/ico-phone.svg";
const linkThreePhoto = "https://www.tkbbank.ru/ico/ico-chat.svg";
const linkOne = "https://www.tkbbank.ru/feedback/?utm_feedbaback=form";
const linkTwo = "https://www.tkbbank.ru/feedback/";
const linkThree = "https://www.tkbbank.ru/feedback/?utm_feedbaback=form";

const redefinitionSrc = () => {
    if (navbar_contact_logo_img.src === linkOnePhoto) {
        navbar_contact_logo_img.src = linkTwoPhoto;
        linkElement.href = linkTwo;
    } else if (navbar_contact_logo_img.src === linkTwoPhoto) {
        navbar_contact_logo_img.src = linkThreePhoto;
        linkElement.href = linkThree;
    } else if (navbar_contact_logo_img.src === linkThreePhoto) {
        navbar_contact_logo_img.src = linkOnePhoto;
        linkElement.href = linkOne;
    }
}

setTimeout(() => {
    redefinitionSrc();

    setInterval(() => {
        redefinitionSrc();
    }, 5000);
}, 2500)