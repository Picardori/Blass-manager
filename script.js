function showForm(formType) {
    const signinForm = document.getElementById('signin');
    const signupForm = document.getElementById('signup');
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    if (formType === 'signin') {
        signinForm.style.display = 'block';
        signupForm.style.display = 'none';
        toggleButtons[0].classList.add('active');
        toggleButtons[1].classList.remove('active');
    } else {
        signinForm.style.display = 'none';
        signupForm.style.display = 'block';
        toggleButtons[0].classList.remove('active');
        toggleButtons[1].classList.add('active');
    }
}

document.getElementById('signin').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const username = event.target.username.value;
    const password = event.target.password.value;

    const users = [
        { username: 'username1', password: 'password123' },
        { username: 'username2', password: 'mypassword456' }
    ];

    const isValidUser = users.some(user => user.username === username && user.password === password);

    if (isValidUser) {
        localStorage.setItem('isAuthenticated', true);
        alert('Connexion réussie !');
        window.location.href = 'dashboard.html'; 
    } else {
        alert('Nom d’utilisateur ou mot de passe incorrect.');
    }
});


// dashboard
// Javascript pour ajouter les fonctionnalités des boutons
const ordersLink = document.getElementById('orders');
const customersLink = document.getElementById('customers');
const productsLink = document.getElementById('products');
const discountsLink = document.getElementById('discounts');
const searchInput = document.getElementById('search');
const logoutBtn = document.getElementById('logoutBtn');

const homeLink = document.getElementById('home');
const ordersTable = document.getElementById('ordersTable');
const unpaidOrdersTable = document.getElementById('unpaidOrdersTable');

// Écouter les clics sur les liens de la barre latérale
ordersLink.addEventListener('click', function() {
    homeLink.classList.remove('active');
    ordersLink.classList.add('active');
    customersLink.classList.remove('active');
    productsLink.classList.remove('active');
    discountsLink.classList.remove('active');
    // Afficher le contenu de commandes ici...
});

customersLink.addEventListener('click', function() {
    homeLink.classList.remove('active');
    ordersLink.classList.remove('active');
    customersLink.classList.add('active');
    productsLink.classList.remove('active');
    discountsLink.classList.remove('active');
    // Afficher le contenu des clients ici...
});

productsLink.addEventListener('click', function() {
    homeLink.classList.remove('active');
    ordersLink.classList.remove('active');
    customersLink.classList.remove('active');
    productsLink.classList.add('active');
    discountsLink.classList.remove('active');
    // Afficher le contenu des produits ici...
});

discountsLink.addEventListener('click', function() {
    homeLink.classList.remove('active');
    ordersLink.classList.remove('active');
    customersLink.classList.remove('active');
    productsLink.classList.remove('active');
    discountsLink.classList.add('active');
    // Afficher le contenu des réductions ici...
});

// Fonction pour simuler les données dans les tableaux (exemple)
function loadOrders() {
    let orders = [
        {date: "01-12-2024", address: "Port-au-Prince", quantity: 3, total: "₽300.00"},
        {date: "02-12-2024", address: "Cité Soleil", quantity: 2, total: "₽200.00"}
    ];
    orders.forEach(order => {
        let row = `<tr><td>${order.date}</td><td>${order.address}</td><td>${order.quantity}</td><td>${order.total}</td></tr>`;
        ordersTable.innerHTML += row;
    });
}

function loadUnpaidOrders() {
    let unpaidOrders = [
        {id: "001", email: "client1@example.com", type: "Standard", total: "₽150.00"},
        {id: "002", email: "client2@example.com", type: "Express", total: "₽250.00"}
    ];
    unpaidOrders.forEach(order => {
        let row = `<tr><td>${order.id}</td><td>${order.email}</td><td>${order.type}</td><td>${order.total}</td></tr>`;
        unpaidOrdersTable.innerHTML += row;
    });
}

// Initialiser les tableaux
loadOrders();
loadUnpaidOrders();


