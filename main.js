const main_btn_add = document.querySelector('.main_btn-add');
const main_table = document.querySelector('.main_table');
const main_input_name = document.getElementById('main_input-name');
const main_input_post = document.getElementById('main_input-post');
const main_input_age = document.getElementById('main_input-age');
const main_input_competencies = document.getElementById('main_input-competencies');

let users = [
    {
        name: 'Шестопалов Иван',
        post: 'Программист',
        age: '20',
        competencies: 'HTML5, CSS3, SCSS (адаптивная верстка), JavaScript, React, TypeScript, WebRTC, Redux, Redux-toolkit, Framer Motion, NextJS, MobX, Webpack, Babel, FSD архитектура, i18n, Линтеры (EsLint, Stylelint), Storybook, Тесты (React Testing Library, Jest, Loki), Huski',
    },
];

main_btn_add.addEventListener('click', () => {
    const validateErrors = validateData();

    if (!validateErrors.length) {
        main_input_name.style.border = "1px solid black";
        main_input_age.style.border = "1px solid black";
        main_input_competencies.style.border = "1px solid black";

        let post;

        switch (main_input_post.value) {
            case "1":
                post = "Аналитик";
                break;
            case "2":
                post = "Менеджер";
                break;
            case "3":
                post = "Программист";
                break;
            case "4":
                post = "Юрист";
                break;
            default:
                post = "";
                break;
        }

        const objUser = {
            name: main_input_name.value,
            post: post,
            age: main_input_age.value,
            competencies: main_input_competencies.value,
        };

        users.push(objUser);
        redrawing();
    } else {
        if (validateErrors.includes('name')) {
            main_input_name.style.border = "2px solid red";
        } else {
            main_input_name.style.border = "1px solid black";
        }

        if (validateErrors.includes('age')) {
            main_input_age.style.border = "2px solid red";
        } else {
            main_input_age.style.border = "1px solid black";
        }

        if (validateErrors.includes('competencies')) {
            main_input_competencies.style.border = "2px solid red";
        } else {
            main_input_competencies.style.border = "1px solid black";
        }
    }
})

const redrawing = () => {
    document.querySelectorAll(".main_table-user").forEach(e => e.remove());

    for (let i = users.length - 1; i >= 0; i--) {
        const name = document.createElement('div');
        name.innerHTML = users[i].name;
        name.classList.add('main_table-item', 'main_table-user');

        const post = document.createElement('div');
        post.innerHTML = users[i].post;
        post.classList.add('main_table-item', 'main_table-user');

        const age = document.createElement('div');
        age.innerHTML = users[i].age;
        age.classList.add('main_table-item', 'main_table-user');

        const competencies = document.createElement('div');
        competencies.innerHTML = users[i].competencies;
        competencies.classList.add('main_table-item', 'main_table-user');

        const actions = document.createElement('div');
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'Удалить';
        deleteBtn.classList.add('btn')
        deleteBtn.onclick = () => deleteUser(i);
        actions.append(deleteBtn);
        actions.classList.add('main_table-item', 'main_table-user');

        main_table.append(name);
        main_table.append(post);
        main_table.append(age);
        main_table.append(competencies);
        main_table.append(actions);

        main_input_name.value = '';
        main_input_post.value = '1';
        main_input_age.value = '';
        main_input_competencies.value = '';
    }
}

const deleteUser = (id) => {
    users.splice(id, 1);
    redrawing();
}

const validateData = () => {
    let errors = [];

    if (!main_input_name.value) {
        errors.push("name");
    }
    if (!main_input_age.value) {
        errors.push("age");
    }
    if (!main_input_competencies.value) {
        errors.push("competencies");
    }

    return errors;
}

const checkNumber = (e) => {
    const value = e.value;
    e.value = value.replace(/\D/g, '');
}

const sendData = () => {
    console.log(JSON.stringify(users));
}

redrawing();